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
        const payload = {
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

exports.login = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const exisitingUser = await User.findOne({ userName });
        if (!exisitingUser) {
            return res.status(411).json({
                message: "Incorrect inputs or SignUp first"
            })
        }
        const payloadlogin={
            userId: exisitingUser._id
        }
        const tokenlogin=jwt.sign(payloadlogin,process.env.JWT_SECRET, { expiresIn: '1h' })

        return res.status(200).json({
            success: true,
            token: tokenlogin,
            message:"User loged in successfully"
        });
    } catch (error) {
        console.error(error);
        return res.status(411).json({
            success: false,
            message: "Error while logging in"
        })
    }
}
