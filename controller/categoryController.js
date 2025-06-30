const mongoose = require('mongoose')

const allCategory = async (req,res) => {
    res.render('admin/categories')
}
const addCategoryPage = async (req,res) => {
    res.render('admin/categories/create')
}
const addCategory = async (req,res) => {
    
}
const updateCategoryPage = async (req,res) => {}
const updateCategory = async (req,res) => {
    res.render('admin/categories/update')
}
const deleteCategory = async (req,res) => {}

module.exports = {
    allCategory,
    addCategoryPage,
    addCategory,
    updateCategoryPage,
    updateCategory,
    deleteCategory
}
