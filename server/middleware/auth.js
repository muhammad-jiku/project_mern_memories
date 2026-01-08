import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET || 'test';

const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
      return res.status(401).json({ message: "No authorization token provided" });
    }

    const token = authHeader.split(" ")[1];
    
    if (!token) {
      return res.status(401).json({ message: "Invalid authorization format" });
    }

    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {      
      decodedData = jwt.verify(token, secret);
      req.userId = decodedData?.id;
    } else {
      // For Google OAuth tokens
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }    

    if (!req.userId) {
      return res.status(401).json({ message: "Invalid token payload" });
    }

    next();
  } catch (error) {
    console.error('Auth error:', error.message);
    
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: "Invalid token" });
    }
    
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: "Token expired" });
    }
    
    return res.status(401).json({ message: "Authentication failed" });
  }
};

export default auth;
