"use server"
import connectDb from "@/db/connectDb"
import User from "@/models/User"
import Payment from "@/models/Payment"

export const fetchUser = async (username) => {
    await connectDb()
    let u = await User.findOne({ username : username })

    if(!u)
        return { error : "user not found"}

    let user = u.toObject({ flattenObjectIds: true });
    return user
}

export const updateProfile = async (data, oldUsername) => {
    await connectDb()
    let newdata = Object.fromEntries(data)

    if(oldUsername !== newdata.username){
        let u = await User.findOne({username : newdata.username})

        if(u){
            return { error : "Username already taken"}
        }
    }
    
    await User.updateOne({email : newdata.email}, newdata)
}

export const handlePayment = async (payment) => {
    await connectDb()

    let data = Object.fromEntries(payment)
    const newPayment = await Payment.create({
        name : data.name,
        message : data.message,
        amount : data.amount,
        to_user : data.to_user,
        done : false
    })

    if(newPayment){
        await Payment.findByIdAndUpdate(newPayment._id, {done : true})
    }
}

export const fetchPayment = async (username) => {
    await connectDb()
    let data = await Payment.find({to_user : username}).lean()
    
    const cleanedData = data.map(payment => ({
        _id: payment._id.toString(),
        name: payment.name,
        to_user: payment.to_user,
        message: payment.message,
        amount: payment.amount,
        done: payment.done,
        createdAt: payment.createdAt.toISOString(), 
        updatedAt: payment.updatedAt.toISOString(), 
        __v: payment.__v 
    }));

    return cleanedData; 
}