FROM node:latest AS builder

WORKDIR /app

COPY . .

RUN yarn install && yarn build


FROM nginx:alpine

WORKDIR /etc/nginx/conf.d

RUN rm -f default.conf

COPY .nginx/default.conf default.conf

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/public .

ENTRYPOINT ["nginx", "-g", "daemon off;"]