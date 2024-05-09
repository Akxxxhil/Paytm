const User = require("../models/userSchema");
require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
    try {
        const { userName, firstName, lastName, password } = req.body;
        const userExist = await User.findOne({ userName });
        if (userExist) {
            return res.status(411).json({
                success: false,
                message: "Email already taken"
            });
        }

        const newUser = await User.create({ userName, firstName, lastName, password });
        const payload={
            userId: newUser._id 
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        return res.status(200).json({
            success: true,
            data: newUser,
            token: token,
            message: "User created successfully"
        });
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        return res.status(500).json({
            success: false,
            message: "User unable to create"
        });
    }
};
