const router = require('express').Router();

//require CRUD functions from controller here
  const {
    createComment,
    editComment,
    deleteComment,
  } = require('../../controllers/comment-controller');

//use express router to get, post, put, delete here
    router.route('/').post(createComment);
    router.route('/:id').put(editComment);
    router.route('/:id').delete(deleteComment);

module.exports = router;