
## Setup proxy for angular
Upto now our Angular server runs on localhost:4200 while developing but loopback runs on localhost:3000.
So we want our angular service from localhost:4200 to communicate to backend loopback API endpoints at localhost:3000/api.
But whenever we hit a API request at `/api/contact`, it will hit the request at `localhost:4200/api/contact` instead of `localhost:3000/api/contact`.

So finally what is the solution to make request to port `3000`.

Ans lies in using `proxy.conf.json` file

Steps:


1. edit `"start"` of your `package.json` to look like below

     ```
     "start": "ng serve --proxy-config proxy.conf.json",
     ```

1. create a new file called `proxy.conf.json` in the root of the project (client) and inside that define your proxies like below
   ```
   {
     "/api": {
       "target":  {
         "host": "localhost",
         "protocol": "http:",
         "port": 3000
       },
       "secure": false,
       "changeOrigin": true,
       "logLevel": "info"
     }
   }
   ```

1. Important thing is that you use `npm start` instead of `ng serve`

That's it now every API request will be done at `localhost:3000/api`
