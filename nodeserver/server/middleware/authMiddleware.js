import jwt from 'jsonwebtoken'

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]

    //console.log(token, req.headers)

    if (!token) {
      return res
        .status(400)
        .json({ success: false, message: 'Token is required' })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    req.userId = decoded._id
    req.user = decoded
    req.token = token

    next()
  } catch (err) {
    next(err)
    console.error('JWT Auth error:', err)
  }
}

export default authMiddleware
