# Contribution Guidelines

## Prerequisites

- Node.js ^12.x
- npm ^6.x

## Steps to be followed to setup the project for contribution

> All the terminal commands written here assumes you are in the root level of the project

1. Clone the repo in your local environemt (your PC basically) by using

    ```sh
        git clone "<repo url which comes under the green code button>"
    ```

2. Install the dependencies by running this commands:

    ```sh
        cd ./Server/
        npm install
        cd ../Website/
        npm install
        cd ../App/
        npm install
    ```

3. Now start the backend server (in development mode) by running the command:

    ```sh
        cd ./Server/
        npm run dev
    ```

4.  
    > If you want to work in the web client run this command:

    ```sh
        cd ./Website/
        npm start
    ```

    > If you want to work in the app run this command:

    ```sh
        cd ./App/
        npm start
    ```

5. Make the nessecery changes
6. Add and commit your changes and push this to your forked remote.
7. **Make sure the head of your forked remote is up to date with the main repo. (To avoid any breaking changes)**
8. Create a pull request from the `main` branch of your forked repo to the `next` branch of the main repo.

    > No pull requests will be accepted if made to the main branch. Only admins and moderators with the approval of admin will do the merge to the `main` branch

9. Code will be reviewed and added to the repo if all things go right. You will retain the ownership of the lines of code you wrote.
