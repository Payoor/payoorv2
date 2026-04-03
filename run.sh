#!/bin/bash

set -e

echo "Stopping old containers and removing volumes..."
docker compose down -v

echo "Building containers..."
docker compose build --no-cache nodeserver nodeserver2 nodeserver3 telegbot

echo "Starting containers..."
docker compose up -d

echo "Waiting for Elasticsearch..."
ES_RETRIES=60
until curl -s http://localhost:9200 | grep -q '"cluster_name"'; do
  ES_RETRIES=$((ES_RETRIES - 1))
  if [ "$ES_RETRIES" -le 0 ]; then
    echo "❌ Elasticsearch did not become ready in time"
    docker logs elasticsearchdb --tail 100 || true
    exit 1
  fi
  echo "Elasticsearch not ready yet..."
  sleep 2
done

echo "✅ Elasticsearch is ready!"

echo "Waiting for Node server..."
NODE_RETRIES=60
until [ "$(curl -s -o /dev/null -w '%{http_code}' http://localhost:3001/health)" = "200" ]; do
  NODE_RETRIES=$((NODE_RETRIES - 1))
  if [ "$NODE_RETRIES" -le 0 ]; then
    echo "❌ Node server did not become ready in time"
    docker logs nodeserver --tail 200 || true
    exit 1
  fi
  echo "🔄 Node server not ready yet..."
  sleep 2
done

echo "✅ Node server is ready!"

echo "Running Node scripts inside 'nodeserver' container..."
docker exec nodeserver node server/scripts/addProducts.js

echo "🎉 All done."