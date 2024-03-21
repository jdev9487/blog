FROM nginx:latest

# Remove any existing config files
RUN rm /etc/nginx/conf.d/* 

# Copy config files
COPY ./holder.conf /etc/nginx/conf.d/
COPY ./convert-nginx.sh /etc/nginx/

# giving execution permissions to convert-nginx.sh shell file. 
RUN chmod +x /etc/nginx/convert-nginx.sh

# Expose the listening port
EXPOSE 8080