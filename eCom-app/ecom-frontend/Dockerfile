FROM node:16 AS base

WORKDIR /usr/src/app

COPY . .

FROM base as build-stage

RUN npm ci
ENV REACT_APP_BACKEND_URL="http://localhost:8080/api"

RUN npm run build

FROM nginx:1.20-alpine

# COPY the directory build from build-stage to /usr/share/nginx/html
# The target location here was found from the docker hub page
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
EXPOSE 80