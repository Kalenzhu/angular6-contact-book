
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



## Loopback to serve static Angular build

1. Build your angular app to generate static content for loopback.

     - Go to Angular folder i.e. `/angular6-contact-book/client`
     - Run build cmd
         ```
         ng build
         ```
     - Once build is done, you will get to see `angular6-contact-book/client/dist` is generated.

1. Loopback add staic webpage.

    - Change or modify the default root route handler

      server/boot/root.js
      ```
      module.exports = function(server) { // Install a `/` route that returns server status
        var router = server.loopback.Router();
        router.get('/', server.loopback.status());
        server.use(router);
      };
      ```

      To make your application serve static content you need to disable this script.  Either delete it or just rename it to something without a .js ending (that ensures the application won’t execute it).

    - Edit server/middleware.json.  Look for the “files” entry:

      server/middleware.json

      ```
      "files": {},
      ```
      Add the following:

      server/middleware.json
      ```
        "files": {
          "loopback#static": {
            "params": "$!../client/dist/ngContactBook"
          }
        },
      ```

      This tells the loopback to serve the static files from `/client/dist/ngContactBook` folder.





> Ref: For reference on serving static webpage in loopback, please check [loopback official doc](https://loopback.io/doc/en/lb2/Add-a-static-web-page.html)
