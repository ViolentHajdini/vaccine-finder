const express = require("express")
const router = express.Router()
const User = require("../models/User")

console.log('zz')
//for hashing passwords
const bcrypt = require("bcrypt")
const saltRounds = 10

async function passMatch(user, password) {
  //compares inputted password with hashed password in db
  const match = await bcrypt.compare(password, user.password)
  return match
}

router.post("/register", (req, res) => {
    console.log('z', req.body)

    var { name, surname, email, password, address, zipCode, dateOfBirth } = req.body
    //hash password
    bcrypt.hash(password, saltRounds, function (err, hash) {
      let hashedPassword = hash
  
      //create a user using the payload and hashed password
      const user = new User({
        name: name,
        surname, surname,
        email: email,
        password: hashedPassword,
        address: address,
        zipCode: zipCode,
        dateOfBirth: dateOfBirth
      })
  
      User.find({ email: user.email }, (err, emails) => {
        //if user already exists in database
        if (emails.length) {
          res.send("Email already exists")
        } else {
          //add the user to the db
          user.save((err) => {
            if (err) {
              console.log(err)
            } else {
              console.log("user successfully added: ", user)
              res.send("User successfully added")
            }
          })
        }
      })
    })
  })
  
  module.exports = router