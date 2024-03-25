const express=require('express');
const { createUser, LoginUser, getNameWithToken } = require('../controller/authentication');
const TotalUser = require('../controller/Admin');
const router=express.Router()




router.route('/signup').post(createUser);
router.route('/login').post(LoginUser);
router.route('/getname').get(getNameWithToken);
router.route('/TotalUsers').get(TotalUser);











module.exports=router