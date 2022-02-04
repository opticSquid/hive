# Contribution Guidelines

## Prerequisites

- Node.js ^12.x
- npm ^6.x

## Steps to be followed to setup the project for contribution

> All the terminal commands written here assumes you are in the root level of the project

1. Fork this repo.
2. Clone into the fork in your account by using

    ```sh
        git clone "<repo url which comes under the green code button>"
    ```

3. Install the dependencies by running this commands:

    ```sh
        cd ./Server/
        npm install
        cd ../Website/
        npm install
        cd ../App/
        npm install
    ```

4. Now start the backend server (in development mode) by running the command:

    ```sh
        cd ./Server/
        npm run dev
    ```

5.  
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

6. Make the nessecery changes
7. Add and commit your changes using this command.

    ```sh
        git add .
        git commit -m "Your message"
    ```

8. Push your changes to the forked repo using this command:

    ```sh
        git push origin <your branch name>
    ```

9. Come to github and raise a pull request from the forked repo branch to the `main` branch of the main repo.

10. Code will be reviewed and added to the repo if all things go right. You will retain the ownership of the lines of code you wrote.
