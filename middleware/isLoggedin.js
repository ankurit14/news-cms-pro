const jwt = require('jsonwebtoken')

const isLoggedIn = async(req, res, next) => {
    try{
        const token = req.cookies.token;
        if(!token) return res.redirect('/admin/');
        const tokenData = jwt.verify(token, process.env.JWT_SECRET);
        next();
    }catch(error){
        res.status(401).send('Unauthorized: Invalid token');
    }
};

module.exports = isLoggedIn