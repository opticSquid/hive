const router = require("express").Router();
const User = require("../Database/Users");
let userName = require("random-username-generator");
const findingFanny = async() => {
  let name = userName.generate();
  let findUser = await User.findUser(name);
  while(true)
  {
    if(findUser!==null)
    {
      name = userName.generate();
      console.log("name",name);
      findUser = await User.findUser(name);
    }
    else
    {
      break;
    }
  }
  return {userName:name};
}
router.get("/",  (req, res) => {
  findingFanny().then((response)=>{
    res.status(200).json({ username: response.userName });
  });
});
module.exports = router;