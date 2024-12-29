install docker 
docker login
git clone https://github.com/closelocation41/microservice_project.git
docker-compose up
nginx-
http:localhost/users
http:localhost/products
http:localhost/core
core-service -
 http://core-service:3000;
product-service -
 http://product-service:3002;
user-service -
 http://user-service:3001;