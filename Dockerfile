FROM node:14.15.0 as build

USER root

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

RUN npm install

COPY . .

RUN npm run build

FROM nginx

COPY ./scripts/nginx-default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/public /usr/share/nginx/html