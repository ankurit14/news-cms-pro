const express = require('express')
const router = express.Router();

const userController = require('../controller/userController');
const categoryController = require('../controller/categoryController');
const articleController = require('../controller/articleController');
const commentController = require('../controller/commentController');

//Login Routes
router.get('/', userController.loginPage);
router.post('/index', userController.adminLogin);
router.get('/logout', userController.logout);
router.get('/dashboard', userController.dashboard);
router.get('/settings', userController.settings);

//User CRUD Routes
//Display all users
router.get('/users', userController.allUser);
//Open Add user page
router.get('/add-user', userController.addUserPage);
//Save Add user page
router.post('/add-user', userController.addUser);

//Open update user page
router.get('/update-user/:id', userController.updateUserPage);
//Save Update user page
router.post('/update-user/:id', userController.updateUser);
//Delete user page
router.delete('/delete-user/:id', userController.deleteUser);
 
//Category CRUD routes
//Display all categories
router.get('/category', categoryController.allCategory);
//Open Add category page
router.get('/add-category', categoryController.addCategoryPage);
//Save Add category page
router.post('/add-category', categoryController.addCategory);
//Open update category page
router.get('/update-category/:id', categoryController.updateCategoryPage);
//Save Update category page
router.post('/update-category/:id', categoryController.updateCategory);
//Delete category page
router.delete('/delete-category/:id', categoryController.deleteCategory);


//Article CRUD route
//Display all article
router.get('/article', articleController.allArticle);
//Open Add article page
router.get('/add-article', articleController.addArticlePage);
//Save Add article page
router.post('/add-article', articleController.addArticle);
//Open update article page
router.get('/update-article/:id', articleController.updateArticlePage);
//Save Update article page
router.post('/update-article/:id', articleController.updateArticle);
//Delete article page
router.delete('/delete-article/:id', articleController.deleteArticle);


//Display all comments
router.get('/comments', commentController.allComments);

module.exports = router;

