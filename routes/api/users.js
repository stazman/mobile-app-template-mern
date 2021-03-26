/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const { check, validationResult} = require('express-validator');
const User = require('../../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');

router.post('/', [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please use a valid email address').isEmail(),
  check('password', 'Please use a password with six or more characters').isLength({
    min: 6
  })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()){
    return res.status(422).json({errors: errors.array() });
  }

  const { name, email, password, gravatar } = req.body;

  try {

    let user = await User.findOne({ email });

    if (user) {
      return res.status(422).json({ errors: [{ msg: 'User already exists'}]});
    }

    user = new User({
      name,
      email,
      password,
      gravatar
    });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      config.get('jwtSecret'),
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );

  } catch(err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }

});

module.exports = router;