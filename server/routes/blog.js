const express = require('express');
const router = express.Router();

const blogCtrl = require('../controllers/blog');
const authService = require('../services/auth');

router.get('', blogCtrl.getBlogs);

router.get('/me',blogCtrl.getUserBlogs);

router.get('/:id', blogCtrl.getBlogById);

router.get('/s/:slug', blogCtrl.getBlogBySlug);

router.post('', blogCtrl.createBlog);

router.patch('/:id',
                blogCtrl.updateBlog);

router.delete('/:id', blogCtrl.deleteBlog);

module.exports = router;

