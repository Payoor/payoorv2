#!/bin/bash

set -e  # Exit if any command fails

sudo docker system prune -af --volumes

echo "Starting containers..."
docker-compose up --build -d

echo "Waiting for Elasticsearch..."

until curl -s http://localhost:9200 | grep -q '"cluster_name"' ; do
  echo "Elasticsearch not ready yet..."
  sleep 2
done

echo "Elasticsearch is ready!"

echo "⏳ Waiting for Node server to be ready..."

until curl -s http://localhost:3001 | grep -q 'server is up and running here now' ; do
  echo "🔄 Node server not ready yet..."
  sleep 2
done

echo "✅ Node server is ready!"

echo "🚀 Running Node scripts inside 'nodeserver' container..."

docker exec -it nodeserver node server/scripts/createProductsIndex.js

docker exec -it nodeserver node server/scripts/createMetadataIndex.js

docker exec -it nodeserver node server/scripts/addProducts.js

echo "🎉 All done."