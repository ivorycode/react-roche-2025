# React Course Preparation
Please prepare your laptop before the course with the following steps.

### Overview:

The following steps are needed for the setup. Below are detailed informations for each of the steps.

1. Install Git
2. Install NodeJS
3. Install Chrome
4. Install an editor. Recommended: *IntelliJ Ultimate*, *Rider* or *WebStorm* or *Visual Studio Code*
5. Clone the repo: `https://github.com/ivorycode/react-roche-2025`
6. In the repository in `01-Starter/react-starter` run `npm install` and then `npm run dev`

If you have any questions or problems concerning the instructions below, please contact: jonas.bandi@ivorycode.com

### Important:

Make sure that you have **unrestricted access to the internet**! In the steps below you will have to access *Bitbucket*, *GitHub* and *npmjs.org*. Some corporate proxies block these sites or block access over https or git!

If you are already using node/npm, make sure that you __don't__ have a global npm-proxy configured. (Check: `npm config get proxy` should return `null`). If it does not return `null`, then you should probably comment out the corresponding proxy in the file `.npmrc` in your home or profile directory.




## Software Installation
For the workshop the following software should be installed.  

**The version numbers don't have to match exactly, but they should be pretty close!**



### Git

A recent git installation is needed to download the sample code and exercises.  
Git can be downloaded from here: <https://git-scm.com/download/>

Check:  

 ```
 git --version                                                             
 git version 2.49.0
 ```



### Node.js & NPM 
Node and NPM are the fundament for the JavaScript toolchain.  
The Node installer can be downloaded here: <https://nodejs.org/>

Install the latest version of Node.js LTS (at least version 20 or above).  

Check:

```
> node --version
v22.14.0
> npm --version
10.9.2
```


### Browser

A recent modern browser must be available. Recommended: Chrome.



### Optional:  IntelliJ, Rider, WebStorm or Visual Studio Code
[IntelliJ IDEA Ultimate](https://www.jetbrains.com/idea/),  [WebStorm](http://www.jetbrains.com/webstorm), [Rider](https://www.jetbrains.com/rider/) or [Visual Studio Code](https://code.visualstudio.com/) are all very good IDEs/editors for web development.  
Notes: 

- IntelliJ IDEA Community does *not* support JavScript/TypeScript development.
- WebStorm supports the same features as IntelliJ IDEA Ultimate or Rider for frontend development.

These editors are not a requirement for the workshop. However the examples and demos will be shown with WebStorm. It is up to the attendees to use any other editor of their preference. 



## Course Material

All the course material will be provided in the following repository:

	https://github.com/ivorycode/react-roche-2025

Please clone the repo like this:

	git clone https://github.com/ivorycode/react-roche-2025.git


To update the repo later (please update the repo in the morning of the workshop):

```
cd react-roche-2025
git pull
```



## Run the intro example

Start the intro example in order to check that the environment is set up correctly, 

```
cd 01-Starter/react-starter
npm install
npm run dev
```

The last command starts a VITE development web server, serving the intro application at `http://localhost:5173/`.  
Open a browser at `http://localhost:5173/` -> a page with a headline "Vite + React" should be shown.



## Further Preparation for the Curious Students

The course is an intro to React, so you don't need any further preparation.
But for those who like to dive into the topic of React before the course, here are some recommendations:

- React Quick Start: https://react.dev/learn
- The official React tutorial: https://react.dev/learn/tutorial-tic-tac-toe
- React tutorial on MDN:
  https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started
