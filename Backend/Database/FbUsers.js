let Facebook;
class FbUsers {
    static async injectDB(conn) {
        if (Facebook) {
          return
        }
        try {
          Facebook = await conn.db("Hive").collection("Facebook")
        } catch (e) {
          console.error(`Unable to establish connection with Facebbok collecion: ${e}`)
        }
      }
/**
   * @param {string} userName 
   * @param {string} email
   * @param {string} accessToken 
   * @param {string} userID
   * @param {object} picture
   * @returns {DAOResponse}
   */
  static async addUser(userName, email, userID, accessToken, picture) {
    try {
      const UserDoc = { Name: userName, Email:email, ID:userID, AccessToken: accessToken, Image: picture};
      return await Facebook.insertOne(UserDoc)
    } catch (e) {
      console.error(`Unable to add User: ${e}`)
      return { error: e }
    }
  }
}
/**
 * Success/Error return object
 * @typedef DAOResponse
 * @property {boolean} [success] - Success
 * @property {string} [error] - Error
 */
module.exports = FbUsers;