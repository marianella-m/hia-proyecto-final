# Etapa de construcción
FROM node:20 AS builder
WORKDIR /app
COPY tpf-frontend/package*.json ./
RUN npm i
COPY tpf-frontend/ .
RUN npm run build --prod

# Etapa de producción
FROM nginx:stable-alpine
COPY --from=builder /app/dist/tpf-frontend/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]