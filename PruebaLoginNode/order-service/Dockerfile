# Dockerfile para order-service

FROM node:18-alpine

WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Compilar TypeScript a JavaScript
RUN npm run build

# Exponer el puerto en el que correrá el servicio
EXPOSE 8080

# Comando para ejecutar el microservicio
CMD ["node", "dist/orderService.js"]
