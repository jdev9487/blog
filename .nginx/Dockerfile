FROM nginx:latest

# Remove any existing config files
RUN rm /etc/nginx/conf.d/* 

# Copy config files
# COPY ./default.conf /etc/nginx/conf.d/

# Expose the listening port
EXPOSE 443 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]