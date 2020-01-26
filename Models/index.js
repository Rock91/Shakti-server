/**
 * Created by ashvin on 12-01-2020.
 */
mongoose = module.exports = require('mongoose');

url = "mongodb://localhost:27017/shakti"
url = "mongodb+srv://ronak:12345@cluster0-ouucp.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(url)
.then(()=>console.log("Mongoose Connected successfully....**....!",new Date()))
.catch((err)=>console.log("Mongoose not connnected..**..>",err))

module.exports = {
    Admins : require('./Admins'),
    ManageItems : require('./ManageItems')
}
