const router = require('express').Router();

//require CRUD functions from controller here
  const {
    getAllPosts,
    getSinglePost,
    createPost,
    editPost,
    deletePost,
  } = require('../../controllers/post-controller');

//use express router to get, post, put, delete here
    router.route('/').get(getAllPosts);
    router.route('/:id').get(getSinglePost);
    router.route('/').post(createPost);
    router.route('/:id').put(editPost);
    router.route('/:id').delete(deletePost);

module.exports = router;