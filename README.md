In “docs” directory is a production version of the project. Default gulp command is set to creating a “docs” directory with a production version of the project, ready to be deployed. It minifies and renames js/css assets as well as cleaning the old “docs” directory. CSS is auto prefixed for the latest two browser versions.


**Developing:**
This project requires you to have a installation of **nodejs** with **npm** This project also requires you to have global installations of gulp.
Install all node packages: npm install
Get started:
gulp serve - starts localhost server with browser-sync, watches html sass js with hot reloading
gulp - minify css/js and builds your app into the docs directory, ready for production