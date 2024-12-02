
-React is typically used for SPAs (Single Page Applications)
-index.html is where all the UI is rendered by React.
-index.js is where all the JS code exists.
-The browser first gets index.html and then renders the file. Then JS in index.js is responsible for all the logical rendering of UI, which takes element with id root to be its base element for rendering all the UIs.
-Like in vanilla JS, React searches for the element with ID 'root' and keeps all the UI to be rendered inside that element using the virtual DOM concept
-'npm build' or 'yarn build' building React app, which merges all the code into a single file. So when a client requests your site, the server sends .html with the JS files. So, at last, JS files 

source: https://stackoverflow.com/questions/63406249/react-entry-point-index-html-vs-index-js-where-is-the-node-code



NPM Commands:
    "npm start"
        -NPM CLI command that allows you to instantiate a shell and execute a command
        -"run" a script in package.json. In this case, you're running script "start".
        -Same as: "npm run start"



source: https://stackoverflow.com/questions/49275342/what-does-npm-run-do
