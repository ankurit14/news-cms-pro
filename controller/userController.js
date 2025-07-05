const mongoose = require('mongoose')
const userModel = require('../models/User')


const loginPage = async(req,res) => {
    res.render('admin/login',{ layout: false})
}
const adminLogin = async(req,res) => {}
const logout = async(req,res) => {}
const dashboard = async(req,res) => {
    res.render('admin/dashboard')
}
const settings = async(req,res) => {
    res.render('admin/settings')
}

const allUser = async(req,res) => {
    const users = await(userModel.find())
    res.render('admin/users', { users })
}


const addUserPage = async(req,res) => {
    res.render('admin/users/create')
}
const addUser = async(req,res) => {
     await userModel.create(req.body)
    res.redirect('/admin/users');
}
const updateUserPage = async(req,res) => {
    const id = req.params.id
try {
    const user = await userModel.findById(id)
    if(!user){
        return res.status(404).send('User not found')
    }
    res.render('admin/users/update',{ user })
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error')
    }
    
}
const updateUser = async(req,res) => {
    const id = req.params.id
    const{fullname,password,role} =req.body
    try{
        const user = await userModel.findById(id)
        if(!user){
    return res.status(404).send('User not found')
   }
   user.fullname = fullname || user.fullname
   if(password) {
    user.password = password
   }

   user.role =role || user.role
   await user.save()
   res.redirect('/admin/users')
    } catch(error) {
        res.status(404).status('user not found ')
    }
}
const deleteUser = async(req,res) => {}


module.exports = {
    loginPage,
    adminLogin,
    logout,
    allUser,
    addUserPage,
    addUser,
    updateUserPage,
    updateUser,
    deleteUser,
    dashboard,
    settings
}

