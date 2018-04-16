const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true}
})

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
}

// userSchema.virtual('confirm_password')
//   .set(function setPasswordConfirmation(passwordConfirmation, next) {
//     console.log('Confirm password', passwordConfirmation, 'password', this.password);
//     if (passwordConfirmation !== this.password) {
//       console.log(passwordConfirmation, this.username);
//       this.invalidate('confirm_password', 'does not match');
//     }
//     // this._passwordConfirmation = passwordConfirmation;
//   })

userSchema.virtual('confirm_password')
  .set(function setPasswordConfirmation(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation;
  })

userSchema.pre('validate', function checkPasswordConfirmation(next) {
  if (this._passwordConfirmation !== this.password) {
    this.invalidate('passwordConfirmation', 'Does not match');
  }
  next();
})

userSchema.pre('save', function hashPassword(next) {
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  next();
})

module.exports = mongoose.model('User', userSchema);
