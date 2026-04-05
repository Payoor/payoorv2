import express from 'express'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

import AuthClass from '../controllers/AuthClass'

import authMiddleware from '../middleware/authMiddleware'

const authRoute = express(); 

authRoute.post('/shopper/auth/mail', AuthClass.sendEmailOtp) 

authRoute.post('/shopper/auth/verifyotp', AuthClass.verifyOtp)

authRoute.post('/shopper/auth/google', AuthClass.googleAuth) 

authRoute.post('/shopper/auth/google/token', AuthClass.authGoogleToken)

authRoute.get('/shopper/auth/google/user', AuthClass.authGoogleUser);  

authRoute.get('/shopper/auth/test', async (req, res) => {
  

  res.send('hello therre')
})

authRoute.get('/shopper/auth/validuser', AuthClass.getValidUser) 

authRoute.post(
  '/shopper/auth/updatedetails/phonenumber',
  authMiddleware,
  AuthClass.updatePhoneNumber
);
 
authRoute.post(
  '/shopper/auth/updatedetails/name',
  authMiddleware,
  AuthClass.updateName
);

authRoute.post(
  '/shopper/auth/updatedetails',
  authMiddleware,
  AuthClass.updateDetails
)

authRoute.post('/shopper/auth/signout', AuthClass.signOut)

export default authRoute;
