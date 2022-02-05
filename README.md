<p align="center">
<img src="/Assets/Logo.png" alt="Hive Logo" style="object-fit:contain;">
</p>

# Hive

![Lines](https://img.shields.io/tokei/lines/github/opticSquid/hive)
![Open Issues](https://img.shields.io/github/issues-raw/opticSquid/hive)
[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/opticSquid/hive)
![license](https://img.shields.io/github/license/opticSquid/hive)

![stars](https://img.shields.io/github/stars/opticSquid/hive?style=social)
![forks](https://img.shields.io/github/forks/opticSquid/hive?style=social)

It is an open source social media management platform for content creators. It brings different social media platforms and services together to create a unified experience for content creators. It brings all the stats of different social media platforms in one place which helps them better understand their audience and make content that matters to them to increase audience engagement and growth of the creator

## The repo is Participating in JWoC (JGEC Winter of Code)

<p align="center">
<img src="/Assets/jwoc_logo.svg" alt="JWoC Logo" height="500" width="500" style="object-fit:contain;">
</p>

For more information visit: [JWoC](https://jwoc.tech/).

**For participant's manual visit:** [Mentee's Guide](https://jwoc.tech/docs/student-manual)

## Join our Discord Server to interact with the maintainers and community

[![Join our Discord server!](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/msTYRtVR)

## Project Aims

### UI

- Link for figma Prototypes
  [Click Here](https://www.figma.com/file/QQzoh9P3XwJGlh50JPezke/Hive-Design?node-id=0%3A1)

### For Backend

1. Having a single backend that serves both the web client and the mobile app.
2. Backend should be made of `Node.js` with `Express.js`.
3. Database is `MongoDB`.
4. For caching purposes use `Redis`.
5. Code should be scalable from the start.
6. We will use middleware based approach for all the routes.
7. `Factory` design pattern is used for handling the success response and error responses so that a standard template can be maintained over all the routes.
8. We will maintain the API documentation usign `Swagger` and `Swagger UI`.

### For Frontend

1. Web client uses React.js with `create-react-app` and mobile app uses `React Native`.
2. UI should be responsive for the web client keeping a mobile first approach.
3. For both web and mobile app in the UI utmost priority should be given to accessbility and intuitiveness for all the functionalities of the app resulting in better UX.

## Links to related content for learning

### Backend

[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](http://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)](https://redis.io/)
[![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)](https://swagger.io/)

- Node JS Design Patterns: <https://blog.logrocket.com/design-patterns-in-node-js/>

### Frontend

[![ReactJS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![ReactNative](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://facebook.github.io/react-native/)

- React JS Design Patterns: <https://blog.logrocket.com/design-patterns-in-react-js/>
- Create-react-app: <https://facebook.github.io/create-react-app/>

## For contributing to the repo see [Contributing Guidelines](./CONTRIBUTING.md)

> This file has been changed please go through the updated guidelines to make your PRs count (for contributions coming under JWOC specially)

## Getting started with your first contribution to Open-source

The prerequisites you need to have are:

1. Vscode
2. git
3. Basic understanding of Integrating git and GitHub : [Please_refer](https://www.freecodecamp.org/news/how-to-use-git-and-github-in-a-team-like-a-pro/)

If you don't have Vscode on your machine, [install it](https://www.youtube.com/watch?v=JGsyJI8XG0Y). If you don't have git on your machine, [install it](https://help.github.com/articles/set-up-git/).

### Fork this repository

Fork this repository by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account.

### Clone the repository

Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the _copy to clipboard_ icon.

Open a terminal and run the following git command:

```sh
    git clone "url you just copied"
```

### Create a branch

Create a branch using the `git checkout` command:

```sh
    git checkout -b your-new-branch-name
```

### Make changes and commit

Make the nessecery changes and commit them using the `git commit` command:

```sh
    git add .
    git commit -m "your commit message"
```

### Push the changes to the remote repository

To push the changes to the remote repository, use the `git push` command:

```sh
    git push origin <your-new-branch-name>
```

### Running the Project -

For making any of the required changes you have to run the project on your local machine first for that the steps are:-

1.  Opening the cloned repo after creation of a seperated branch in Vscode editor.
2.  As mentioned you have to have installed

        - Node.js ^12.x
        - npm ^6.x

    in your system in advance

3.  Now that the project contains a package.JSON which contains all the information about the dependencies required for running it on your local host. so open the terminal and type

```
npm install
```

4. now that you've successfully installed all the dependencies in node modules folder run the project by typing

```
npm run start
```

5. If by any chance it doesn't run and throws an error saying `'react-scripts' is not recognized as an internal or external command, operable program or batch file` run the following command alongside :

```sh
    npm install react-scripts
```

followed by

```sh
    node node_modules/react-scripts/scripts/start.js
```

Now that your project is up and running through the desired port : usually 3000 start making the required changes.

### After making the changes Commiting them to the branch

If you go to the project directory and execute the command `git status`, you'll see there are changes.

Add those changes to the branch you just created using the `git add` command:

```sh
    git add <changed file>
```

Now commit those changes using the `git commit` command:

```sh
    git commit -m "Made a few changes to Readme.md file"
```

### Push changes to GitHub

Push your changes using the command `git push`:

```sh
    git push origin <add-your-branch-name>
```

### Submit your changes for review

If you go to your repository on GitHub, you'll see a `Compare & pull request` button. Click on that button.Now submit the pull request.Woof You just made a PR!!

### ONLY 4 Steps to get you there

1. fork
2. clone
3. add and commit
4. compare and Pull request

### Where to go from here?

Congrats! You just completed the standard _fork -> clone -> edit -> pull request_ workflow that you'll encounter often as a contributor!

Now let's get you started with contributing to the project.

## For Security realted things see [Security Policy](./SECURITY.md)

## To work in this repo you need to adhere by this [Code of Conduct](./CODE_OF_CONDUCT.md)
