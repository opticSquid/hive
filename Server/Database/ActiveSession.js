let activeUser;
class ActiveUsers {
  static async DbConnect(conn) {
    if (activeUser) {
      return;
    }
    try {
      activeUser = await conn.db("Hive").collection("ActiveUsers");
    } catch (e) {
      console.error(
        `Unable to establish connection with Facebbok collecion: ${e}`
      );
    }
  }
  /**
   * @param {string} refreshToken
   * @returns {result}
   */
  static async addActiveUser(refreshToken) {
    try {
      let doc = { refreshToken: refreshToken };
      let insertResult = await activeUser.insertOne(doc, { wtimeout: 2500 });
      let { n, ok } = insertResult.result;
      if (n === 1 && ok === 1 && insertResult.insertedCount === 1) {
        return { success: true };
      } else {
        return { success: false };
      }
    } catch (e) {
        if (String(e).startsWith("MongoError: E11000 duplicate key error")) {
            console.error("Same user is present in another session");
            return { error: "Same user exists in DataBase" };
          }
    }
  }
  /**
   * @param {string} refreshToken 
   * @returns {Array}
   */
  static async findActiveUser(refreshToken)
  {
    let cursor;
    let doc = {refreshToken:refreshToken}
    try {
        cursor = await activeUser.find(doc);
    }
    catch (e) {
        console.error(`Unable to issue find command, ${e}`);
      return [];
    }
    finally {
        let result = cursor.toArray();
        if(result.length>0)
        {
            return result
        }
        else
        {
            return [0];
        }

    }
  }
    /**
     * @typedef result
     * @property {boolean} [success]
     * @property {string} [error]
     */
}
module.exports = ActiveUsers;
