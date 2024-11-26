# Etapa de construcción
FROM node:20 AS builder
WORKDIR /app
COPY ./tpf-backend/package*.json ./
RUN npm install --production
COPY ./tpf-backend/ .

# Etapa final
FROM node:20
WORKDIR /app
COPY --from=builder /app /app
EXPOSE 3000
CMD ["npm", "start"]