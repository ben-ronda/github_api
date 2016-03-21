# GitHub Finder
### Created By: Ben Ronda
***
## Project Description:
This site is designed to take a username from a user and find all public repositories for the user.

It was built using the following:
* JavaScript
* Node
* JQuery
* HTML and CSS(w/Bootstrap)
* Gulp

***
## Installation:
To install GitHub Finder, clone the following repository by:
1. Open up your terminal and type the following line:
`git clone https://github.com/ben-ronda/github_api.git`
2. Use this line to change directories to the project folder: `cd github_api`
3. Run the following line to install gulp globally: `sudo npm install gulp -g`
4. You will also need to install jshint globally: `sudo npm install jshint -g`
5. Then use this to install the remaining developer dependencies: `sudo npm install gulp gulp-util gulp-concat gulp-uglify gulp-jshint jshint browserify browser-sync vinyl-source-stream del bower bower-files --save-dev`  
6. Now that we have installed bower, run: `bower install jquery bootstrap moment --save`
7. In the terminal, you should now be able to run ` gulp build --production` followed by `gulp serve` to access the webpage.


***
## License
Copyright (c) 2016 Ben Ronda

This software is licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
