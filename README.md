# React_Laravel_e-commerce

# Problems faced:

# 1- cannot find app.js & app.css:
# solution: add this to package.json
    "config": {
        "webpack": "node_modules/laravel-mix/setup/webpack.config.js"
    },

# 2- want to use css modules?
# install Babel-plugin-react-css-modules wrapper => import the package in laravel mix => call it on the app
    npm i laravel-mix-react-css-modules
    require('laravel-mix-react-css-modules');
    mix.react('resources/assets/app.js', 'public/js').reactCSSModules();
    OR
    .reactCSSModules('[path]__[name]___[hash:base64]');

