FROM nginx:stable
COPY src /usr/share/nginx/html
CMD tail -f /dev/null
