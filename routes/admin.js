const express = require('express')
const router = express.Router();

const userController = require('../controller/userController');
const categoryController = require('../controller/categoryController');
const articleController = require('../controller/articleController');
const commentController = require('../controller/commentController');
const isLoggedIn = require('../middleware/isLoggedin');

//Login Routes
router.get('/', userController.loginPage);
router.post('/index', userController.adminLogin);
router.get('/logout', userController.logout);
router.get('/dashboard', isLoggedIn, userController.dashboard);
router.get('/settings', isLoggedIn, userController.settings);

//User CRUD Routes
//Display all users
router.get('/users', isLoggedIn, userController.allUser);
//Open Add user page
router.get('/add-user', isLoggedIn, userController.addUserPage);
//Save Add user page
router.post('/add-user', isLoggedIn, userController.addUser);

//Open update user page
router.get('/update-user/:id', isLoggedIn, userController.updateUserPage);
//Save Update user page
router.post('/update-user/:id', isLoggedIn, userController.updateUser);
//Delete user page
router.delete('/delete-user/:id', isLoggedIn, userController.deleteUser);
 
//Category CRUD routes
//Display all categories
router.get('/category', isLoggedIn, categoryController.allCategory);
//Open Add category page
router.get('/add-category', isLoggedIn, categoryController.addCategoryPage);
//Save Add category page
router.post('/add-category', isLoggedIn, categoryController.addCategory);
//Open update category page
router.get('/update-category/:id', isLoggedIn, categoryController.updateCategoryPage);
//Save Update category page
router.post('/update-category/:id', isLoggedIn, categoryController.updateCategory);
//Delete category page
router.delete('/delete-category/:id', isLoggedIn, categoryController.deleteCategory);


//Article CRUD route
//Display all article
router.get('/article', isLoggedIn, articleController.allArticle);
//Open Add article page
router.get('/add-article', isLoggedIn, articleController.addArticlePage);
//Save Add article page
router.post('/add-article', isLoggedIn, articleController.addArticle);
//Open update article page
router.get('/update-article/:id', isLoggedIn, articleController.updateArticlePage);
//Save Update article page
router.post('/update-article/:id', isLoggedIn, articleController.updateArticle);
//Delete article page
router.delete('/delete-article/:id', isLoggedIn, articleController.deleteArticle);


//Display all comments
router.get('/comments', commentController.allComments);

module.exports = router;

