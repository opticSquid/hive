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

3. Create a new branch for your contribution from the `next` branch of the repo using this command:

    ```sh
        git checkout -b <your branch name> next
    ```

    **Advisory**
    > Do not use main branch. It only contains stable releases. All the changes are done on the next branch. It contains all the changes which are going for next release.

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

8. Push your changes to the repo using this command:

    ```sh
        git push origin <your branch name>
    ```

9. Come to github and raise a pull request from `your_branch` to the `next` branch of the repo.
    > No pull requests will be accepted if made to the main branch. Only admins and moderators with the approval of admin will do the merge to the `main` branch

10. Code will be reviewed and added to the repo if all things go right. You will retain the ownership of the lines of code you wrote.
