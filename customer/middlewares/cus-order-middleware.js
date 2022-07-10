

async function customerordermiddleware(req, res, next) {


    //verify payment signutrue
    //after that find payment by id
    //attack mypayment to reqbody

    console.log("function  call payment verification");

    console.log(req.body);

    const {
        orderCreationId,
        razorpayPaymentId,
        razorpayOrderId,
        razorpaySignature,
    } = req.body;


    const shasum = crypto.createHmac("sha256", `${process.env.RAZORPAY_SECRET}`);

    shasum.update(`${orderCreationId}|${razorpayPaymentId}`);

    const digest = shasum.digest("hex");

    // comaparing our digest with the actual signature
    if (digest !== razorpaySignature) {
        return res.status(400).json({ msg: "Transaction not legit!" });
    }


   
    console.log("payment has match");

    //find payment based on id

    const instance = new Razorpay({
        key_id: `${process.env.RAZORPAY_KEY_ID}`,
        key_secret: `${process.env.RAZORPAY_SECRET}`,
    });

    let mypayment;


    try {

        mypayment = await instance.payments.fetch(razorpayPaymentId);

        console.log(mypayment);
    } catch (error) {

        console.log(error);

        return next(error);


    }


    //attack mypayment req.body

    req.body.mypayment=mypayment;

    return next();//final next

}






module.exports = customerordermiddleware;