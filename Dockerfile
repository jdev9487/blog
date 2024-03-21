FROM node:latest AS builder

WORKDIR /app

COPY . .

RUN yarn install && yarn build


FROM nginx:alpine

WORKDIR /etc/nginx/conf.d

RUN rm -f default.conf

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /.next .

EXPOSE 443 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]