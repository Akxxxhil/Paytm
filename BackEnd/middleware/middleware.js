const jwt = require("jsonwebtoken")
require("dotenv").config();


exports.authMiddleware = (req, res, next) => {
    try {
        const token= req.header("Authorization").replace("Bearer ","");
        if(!token){
            return res.json({
                success:false,
                message:"token is missing"
            })
        }
        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET);
            req.user = payload;
        } catch (error) {
            return res.json({
                success: false,
                message: "Token is invalid"
            })
        }

        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Something went wrong while verifying token"
        })
    }
}