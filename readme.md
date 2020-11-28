First pull the nginx image from Docker hub
```
docker pull nginx
```

Make a html file in the folder and add some text in it.
```
touch HelloWorld.html
nano HelloWorld.html
```


Run the container on port 8080
```
docker run -p 8080:8080 -v /home/hans/_demos/nginx/Example1:/usr/share/nginx/html -d nginx
```

Finally, go the the following URL: 
192.168.0.20/HelloWorld.html

See also:
https://www.docker.com/blog/how-to-use-the-official-nginx-docker-image/