const jwt = require("jsonwebtoken")
require("dotenv").config();


exports.authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(403).json({});
        }
        try {
            const payload = jwt.verify(authHeader,process.env.JWT_SECRET)
            req.user = payload;
        } catch (error) {
            return res.json({
                success: false,
                message: "token is invalid"
            })
        }

        next()
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Something went wrong while veifying token"
        })
    }
}