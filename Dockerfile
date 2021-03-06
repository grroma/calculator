FROM node:14.15.1 as node

WORKDIR /app
COPY package.json /app/
RUN npm install
COPY ./ /app/
ARG env=prod
RUN npm run build -- --prod --environment $env

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:latest
COPY --from=node /app/dist/ /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/default.conf