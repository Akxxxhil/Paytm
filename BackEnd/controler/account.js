const mongoose = require("mongoose")
const Account = require("../models/accountSchema")


exports.userBalance = async (req, res) => {
    try {
        const account = await Account.findOne({
            userId: req.user.userId

        })
        if (!account) {
            return res.status(404).json({
                success: false,
                message: "Account not found",
            });
        }
        console.log(account);
        return res.status(200).json({
            success: true,
            balance: account.balance,
            message: "Balance fetched successfully",
        });
    } catch (error) {
        console.error(error);
        return res.status(411).json({
            success: false,
            message: "Balance Unable to  fetched ",
        });
    }
}


exports.transfer = async (req, res) => {
   try {
    const session = await mongoose.startSession();
    session.startTransaction();
    const { amount, to } = req.body;

    
    // Fetch the accounts within the transaction
    const account = await Account.findOne({
        userId: req.user.userId
    }).session(session)

    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }
    const toAccount = await Account.findOne({ userId: to }).session(session);
    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    //perform the transfer

    await Account.updateOne({userId: req.user.userId},{$inc:{balance:-amount}}).session(session)
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    
    // Commit the transaction
    await session.commitTransaction();
    res.status(200).json({
        message: "Transfer successful"
    });
   } catch (error) {
    console.error(error);
        return res.status(411).json({
            success: false,
            message: "Transfer NOT successful",
        });
   }
}