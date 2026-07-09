#!/bin/bash

set -e

APP_NAME="portfolio"
IMAGE_NAME="portfolio"

SERVER_HOST="201.51.30.97"
SERVER_USER="root"
SERVER_PORT="22"
SERVER_IMAGES_PATH="/var/www/docker-images"
SERVER_DATA_PATH="/var/www/portfolio-data"

CONTAINER_PORT="8080"
SERVER_PORT_APP="8081"
CONTAINER_DATA_PATH="/data/designer-portfolio"

BUILD_ENV="prod"

VERSION_FILE=".deploy-version"

if [ ! -f "$VERSION_FILE" ]; then
  echo "1" > "$VERSION_FILE"
fi

CURRENT_VERSION=$(cat "$VERSION_FILE")
NEXT_VERSION=$((CURRENT_VERSION + 1))

IMAGE_TAG="${IMAGE_NAME}:${NEXT_VERSION}"
TAR_NAME="${IMAGE_NAME}_${NEXT_VERSION}.tar"
LOCAL_TAR_PATH="./${TAR_NAME}"
REMOTE_TAR_PATH="${SERVER_IMAGES_PATH}/${TAR_NAME}"

echo "Deploying ${IMAGE_TAG}"

echo "Building Docker image..."
docker build \
  --platform linux/amd64 \
  --tag "${IMAGE_TAG}" \
  --build-arg env="${BUILD_ENV}" \
  .

echo "Saving Docker image to ${LOCAL_TAR_PATH}..."
docker save -o "${LOCAL_TAR_PATH}" "${IMAGE_TAG}"

echo "Creating remote directory..."
ssh -p "${SERVER_PORT}" "${SERVER_USER}@${SERVER_HOST}" "mkdir -p ${SERVER_IMAGES_PATH}"

echo "Uploading image to server..."
scp -P "${SERVER_PORT}" "${LOCAL_TAR_PATH}" "${SERVER_USER}@${SERVER_HOST}:${REMOTE_TAR_PATH}"

echo "Deploying on server..."
ssh -p "${SERVER_PORT}" "${SERVER_USER}@${SERVER_HOST}" << EOF
set -e

APP_NAME="${APP_NAME}"
IMAGE_TAG="${IMAGE_TAG}"
IMAGE_NAME="${IMAGE_NAME}"
REMOTE_TAR_PATH="${REMOTE_TAR_PATH}"
CONTAINER_PORT="${CONTAINER_PORT}"
SERVER_PORT_APP="${SERVER_PORT_APP}"
SERVER_DATA_PATH="${SERVER_DATA_PATH}"
CONTAINER_DATA_PATH="${CONTAINER_DATA_PATH}"

echo "Preparing persistent storage..."
mkdir -p "\$SERVER_DATA_PATH/content"
mkdir -p "\$SERVER_DATA_PATH/uploads/services"
chown -R 1001:1001 "\$SERVER_DATA_PATH"

echo "Stopping old container..."
docker stop "\$APP_NAME" || true

echo "Removing old container..."
docker rm "\$APP_NAME" || true

echo "Loading new image..."
docker load -i "\$REMOTE_TAR_PATH"

echo "Starting new container..."
docker run \
  --name "$APP_NAME" \
  --restart unless-stopped \
  -e ADMIN_PASSWORD="ДаниилИАртемНеГеи" \
  -e ADMIN_SESSION_SECRET="designer-portfolio-admin-local-secret" \
  -e CONTENT_STORAGE_DIR="\$CONTAINER_DATA_PATH" \
  -v "\$SERVER_DATA_PATH:\$CONTAINER_DATA_PATH" \
  -p "$SERVER_PORT_APP:$CONTAINER_PORT" \
  -d \
  "$IMAGE_TAG"

echo "Cleaning dangling images..."
docker image prune -f

echo "Current containers:"
docker ps
EOF

echo "$NEXT_VERSION" > "$VERSION_FILE"

echo "Removing local tar..."
rm -f "${LOCAL_TAR_PATH}"

echo "Deploy completed: ${IMAGE_TAG}"
echo "App should be available on: http://${SERVER_HOST}:${SERVER_PORT_APP}"
