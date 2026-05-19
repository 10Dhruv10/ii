docker build -t my-admin-dash .
docker images
docker run -d -p 8080:80 my-admin-dash

go to -> localhost:8080