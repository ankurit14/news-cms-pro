const categoryModel = require('../models/Category');
const newsModel = require('../models/News');
const userModel = require('../models/User');

const allArticle = async (req,res) => {
    res.render('admin/articles')
}
const addArticlePage = async (req,res) => {
    res.render('admin/articles/create')
}
const addArticle = async (req,res) => {}
const updateArticlePage = async (req,res) => {
    res.render('admin/articles/update')
}
const updateArticle = async (req,res) => {}
const deleteArticle = async (req,res) => {}

module.exports = {
    allArticle,
    addArticlePage,
    addArticle,
    updateArticlePage,
    updateArticle,
    deleteArticle
}




