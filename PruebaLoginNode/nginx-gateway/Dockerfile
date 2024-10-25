# Usar la imagen oficial de NGINX
FROM nginx:latest

# Copiar el archivo de configuración de NGINX al contenedor
COPY nginx.conf /etc/nginx/nginx.conf

# Exponer el puerto que NGINX utilizará
EXPOSE 4004

# Ejecutar NGINX en modo foreground
CMD ["nginx", "-g", "daemon off;"]
