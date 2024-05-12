const Account=require("../models/accountSchema")


exports.userBalance=async(req,res)=>{
    try {
        const account =await Account.findOne({
            userId:req.user.userId
            
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