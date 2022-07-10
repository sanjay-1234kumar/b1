
const CustomerService = require('../services/cus-customer-service');


const CustomerPaymentController = {


    async createrpayorder(req, res, next) {

        const { customer } = req;

        console.log("payment route order ");

        const instance = new Razorpay({
            key_id: `${process.env.RAZORPAY_KEY_ID}`,
            key_secret: `${process.env.RAZORPAY_SECRET}`,
        });

        const options = {
            amount: 150 * 100, // amount in smallest currency unit
            currency: "INR",
            receipt: `reciput_id${Date.now()}`,
        };

        //find customer by id


        let mycustomer;

        try {

            mycustomer = await CustomerService.findCustomerByIdWithDetails(customer._id);

            console.log(mycustomer);


        } catch (error) {

            console.log(error);

            return next(error);
        }


        try {

            const order = await instance.orders.create(options);

            if (!order) {

                return next({ status: 400, message: "order is not creted on raropay" });

            }


            console.log(order);

            return res.json({
                or: true, result: {
                    order: order,
                    customer: mycustomer,
                }
            });

            
        } catch (error) {

            console.log(error);

            return next(error);

        }



    },




};










module.exports = CustomerPaymentController;
