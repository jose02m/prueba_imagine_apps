const {Schema, model}= require('mongoose');

const userSchema = new Schema({
  name:{
    type: String,
    require: true
  },
  lastName:{
    type: String
  },
  email:{
    type: String,
    require: true,
    unique: true,
  }
}, {
  timestamps: true,
});

module.exports = model('user', userSchema);