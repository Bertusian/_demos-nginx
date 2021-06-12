[<img src="https://avatars0.githubusercontent.com/u/1412239?s=200&v=4" align="right">](http://nginx.org//)

# Simple set up of an nginx webserver. 

First pull the nginx image from Docker hub
```bash
docker pull nginx
```

Make a html file in the folder and add some text in it.
```bash
touch HelloWorld.html
nano HelloWorld.html
```


Test nginx and run the container on port 8080
```bash
docker run -it --rm -d -p 8080:80 --name web nginx
```

Run the container on port 8080 with a mounted volume
```bash
docker run -p 8080:80 -v /home/hans/_demos/nginx/Example1:/usr/share/nginx/html -d nginx
```

Finally, go the the following URL: 
192.168.0.20/HelloWorld.html

See also this [post from Peter McKee](https://www.docker.com/blog/how-to-use-the-official-nginx-docker-image/).
