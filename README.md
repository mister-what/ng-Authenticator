# ng-Authenticator
Google Authenticator WebApp based on angularjs and localStorage

## Build & development

Run `grunt build` for building and `grunt serve` for preview.
Steps to build first time for production:

    $ npm install
    $ bower install
    $ grunt build
    $ cd dist/
    $ npm install
    $ node server.js

After that you can go with:

    $ grunt build
    $ cd dist/
    $ node server.js

to run a production instance.

###Demo:
You will find a demo at  
[ngauth.mybluemix.net](https://ngauth.mybluemix.net/ "Ng-Auth Demo")