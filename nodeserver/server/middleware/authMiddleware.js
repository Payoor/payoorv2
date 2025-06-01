import jwt from 'jsonwebtoken'

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]

    if (!token) {
      return res.status(400).json({ success: false, message: 'Token is required' })
    }

    // Verify and decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // Attach user data to the request object
    req.userId = decoded._id
    req.user = decoded
    req.token = token

    next()
  } catch (err) {
    console.error('JWT Auth error:', err)

    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ success: false, message: 'Token expired' })
    }

    return res.status(401).json({ success: false, message: 'Invalid token' })
  }
}

export default authMiddleware;