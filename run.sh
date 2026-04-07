#!/bin/bash

set -e

wait_for_healthy() {
  local container_name="$1"
  local retries="${2:-60}"

  echo "Waiting for ${container_name} to become healthy..."

  while true; do
    status=$(docker inspect -f '{{if .State.Health}}{{.State.Health.Status}}{{else}}no-healthcheck{{end}}' "$container_name" 2>/dev/null || echo "missing")

    if [ "$status" = "healthy" ]; then
      echo "✅ ${container_name} is healthy!"
      break
    fi

    retries=$((retries - 1))
    if [ "$retries" -le 0 ]; then
      echo "❌ ${container_name} did not become healthy in time"
      docker logs "$container_name" --tail 200 || true
      exit 1
    fi

    echo "🔄 ${container_name} status: $status"
    sleep 2
  done
}

echo "Stopping old containers..."
docker compose down

echo "Building containers..."
docker compose build --no-cache nodeserver nodeserver2 nodeserver3 telegbot shopui

echo "Starting containers..."
docker compose up -d

wait_for_healthy elasticsearchdb 90
wait_for_healthy nodeserver 90
wait_for_healthy nodeserver2 90
wait_for_healthy nodeserver3 90
wait_for_healthy telegbot 90

echo "Running Node scripts inside 'nodeserver' container..."
docker exec nodeserver node server/scripts/addProducts.js

echo "🎉 All done."