import { redisClient } from '../redisconf'

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]
 
    if (!token) {
      return res 
        .status(400)
        .json({ success: false, message: 'Token is required' })
    }
 
    const userId = await redisClient.get(`auth:session:${token}`);

    console.log(userId);

    if (!userId) {
      return res
        .status(401)
        .json({ success: false, message: 'Invalid or expired token' })
    }

    req.userId = userId
    req.token = token

    next()
  } catch (err) {
    console.error('Auth middleware error:', err)
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error' })
  }
}

export default authMiddleware
