const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

const mongoose = require('mongoose')
const userModel = require('../models/User')


const loginPage = async(req,res) => {
    res.render('admin/login',{ layout: false})
}
const adminLogin = async(req,res) => {
const{ username, password } = req.body;
try{
    const user = await userModel.findOne({ username})
    if(!user){
        return res.status(401).send('Invalid username and password')
    }

    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(401).send('Invalid username and password')
    }
    const jwtData= { id: user._id, fullName: user.fullname, role: user.role}
    const token = jwt.sign(jwtData, process.env.JWT_SECRET, { expiresIn: '1h' } );
    res.cookie('token', token, { httpOnly: true, maxAge: 60 * 60 * 1000});
    res.render('admin/dashboard')

} catch (error){
    console.error(error);
    res.status(500).send('Internal Server Error');
}
}
const logout = async(req,res) => {
    res.clearCookie('token')
    res.redirect('/admin/')
}
const dashboard = async(req,res) => {
    res.render('admin/dashboard')
}
const settings = async(req,res) => {
    res.render('admin/settings')
}

const allUser = async(req,res) => {
    const users = await(userModel.find())
    res.render('admin/users', { users, role: req.role })
}


const addUserPage = async(req,res) => {
    res.render('admin/users/create',{ role: req.role })
}
const addUser = async(req,res) => {
     await userModel.create(req.body)
    res.redirect('admin/users');
}
const updateUserPage = async(req,res) => {
    const id = req.params.id
try {
    const user = await userModel.findById(id)
    if(!user){
        return res.status(404).send('User not found')
    }
    res.render('admin/users/update',{ user, role: req.role })
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
   res.redirect('admin/users')
    } catch(error) {
        res.status(404).status('user not found ')
    }
}
const deleteUser = async(req,res) => {
    const id = req.params.id
    try{
        const user = await userModel.findByIdAndDelete(id)
        if(!user){
            return res.status(404).send('User not found')
        }
       res.json({success:true})
    } catch(error) {
        console.error(error)
       res.status(500).send('Internal Server Error');
    }
}


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

