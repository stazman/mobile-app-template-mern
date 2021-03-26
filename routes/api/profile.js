/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

router.get('/me', auth, async (req, res) => {

  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'avatar']);

    if(!profile){
      res.status(400).json({ errors: [{msg: 'No profile exists for this user'}]});
    }

    res.json(profile);

  } catch(err){
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

router.post('/', auth, async (req, res) => {

  const { bio, interests } = req.body;

  const profileFields = {};

  profileFields.user = req.user.id;
  if (bio) profileFields.bio = bio;
  if (interests) {
    profileFields.interests = interests.split(',').map( interest => interest.trim());
  }

  try {

    let profile = await Profile.findOne({user: req.user.id});

    if (profile) {

      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );
      return res.json(profile);
    }

    profile = new Profile(profileFields);

    await profile.save();

    return res.json(profile);

  } catch(err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

router.delete('/', auth, async (req, res) => {

  try {

    await Profile.findOneAndRemove({ user: req.user.id });

    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: 'User and profile deleted' });

  } catch (err){

    console.log(err.message);

    res.status(500).send('Server error');

  }
});

module.exports = router;