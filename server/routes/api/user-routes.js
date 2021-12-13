const router = require('express').Router();

//require CRUD functions from controller here
  const {
    createUser,
    userLogin,
    logout,
    getUser,
    updateUser,
  } = require('../../controllers/user-controller');

//use express router to get, post, put, delete here
  router.route('/').post(userLogin);
  router.route('/signup').post(createUser);
  router.route('/:id').get(getUser);
  router.route('/:id').put(updateUser);
  router.route('/logout').post(logout);

module.exports = router;