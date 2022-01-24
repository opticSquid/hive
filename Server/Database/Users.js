let User;
class Users {
  static async DbConnect(conn) {
    if (User) {
      return;
    }
    try {
      User = await conn.db("Hive").collection("Users");
    } catch (e) {
      console.error(
        `Unable to establish connection with Facebbok collecion: ${e}`
      );
    }
  }
  /**
   * @param {string} UserName
   * @param {string} Email
   * @param {object} Passowrd
   * @param {Buffer} iv
   * @returns {result}
   */
  static async addUser(UserName, Email, Password, iv) {
    try {
      let doc = { UserName: UserName, Email: Email, Params: Password, iv: iv };
      let response = await User.insertOne(doc, {
        w: "majority",
        wtimeout: 2500,
      });
      let { n, ok } = response.result;
      if (n === 1 && ok === 1 && response.insertedCount === 1) {
        return { success: true };
      } else {
        return { success: false };
      }
    } catch (e) {
      if (String(e).startsWith("MongoError: E11000 duplicate key error")) {
        console.error("Same user exists in DataBase");
        return { error: "Same user exists in DataBase" };
      }
    }
  }
  /**
   * @param {string} UserName - UserName
   * @returns {Object | null} - Found or not
   */
  static async findUser(UserName) {
    return await User.findOne({ UserName: UserName });
  }
  /**
   * @param {string} UserEmail - Email
   * @returns {Promise<UsersCheck>}
   */
  static async findUserEmail(UserEmail) {
    let cursor;
    try {
      cursor = await User.find(
        { Email: UserEmail },
        { projection: { Email: 1, Params: 1, iv: 1, UserName: 1, _id: 0 } }
      );
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return [];
    }
    return cursor.toArray();
  }
  /**
   * @typedef result
   * @property {boolean} [success] - success
   * @property {string} [error] - error
   */
}
module.exports = Users;
