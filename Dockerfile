FROM node:22 AS builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . . 

RUN npm run build 

FROM nginx:alpine AS runner 

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/dist .

# Load NGINX config file
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 

CMD [ "nginx", "-g", "daemon off;" ]



