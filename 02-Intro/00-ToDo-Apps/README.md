# Public URL:

https://spa-demo.fly.dev/


# Starting the app locally:

    npm i --prefix 01-ToDo-Server
    npm i --prefix 02-ToDo-SPA
    npm i --prefix 03-ToDo-SPA-API
    npm i
    npm run build
    npm start

Then go to: http://localhost:8080/



# Local Docker

```
docker build --tag spa-demos .
docker -i -t -p 8080:8080 spa-demos
```



# Deploying to Fly.io

    flyctl launch

https://fly.io/apps/spa-demo
