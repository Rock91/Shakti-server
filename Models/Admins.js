var Schema = mongoose.Schema;
var Admin = new Schema({
    name: {type: String, trim: true, index: 'text', default: null, sparse: true},
    password: {type: String, required:true}
});

module.exports = mongoose.model('Admin', Admin);