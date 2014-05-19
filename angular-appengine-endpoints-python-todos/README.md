Angular Appengine Endpoints Todos
=================================

Google Appengine Endpoints code borrowed from [Endpoints Todos Python](https://github.com/danholevoet/appengine-endpoints-angular-todos-python).
Make sure you have ``node``, ``npm`` & ``yeoman`` installed, or follow these [instructions](http://yeoman.io/codelab/setup.html).

Dev Server
----------

```
# Clone and get submodule
$ git clone https://github.com/izambasiron/yeoman-examples.git
$ cd yeoman-examples
$ git submodule update --init
$ cd angular-appengine-endpoints-python-todos

# Use 'package.json' to pull down the app's dependencies from NPM
$ npm install

# Use 'bower.json' to pull down the app's dependencies from Bower
$ bower install

# Start Appengine's dev server
$ path/to/google_appengine/dev_appserver.py app
```

Deploy
------

```
$ grunt
$ path/to/google_appengine/appcfg.py dist
```

TODO
----

1. Install grunt + endpoints
2. Fix unit test
