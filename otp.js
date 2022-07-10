const axios = require('axios');


function sendOtp(otp, number) {

    return new Promise(async (resolve, reject) => {

        try {
            const result = await axios.get('https://www.fast2sms.com/dev/bulkV2', {
                params: {
                    authorization: 'qPMrCdmyohFGQsjxXR61HKLuUk2pYBcg8venzZ45blD0tJOf9iA3V0sm1H82yoRL7je4D6hXSOtrUEwd',
                    variables_values: `${otp} By StoreClubs`,
                    route: "otp",
                    numbers: `${number}`,
                    sender_id: "FTWSMS",
                }
            });

            return resolve(result);

        } catch (error) {

            return reject(error);
        }
    })


}


async function callingt() {

    const { data } = await sendOtp(3456, 9131683474);

    console.log(data);

}


//callingt();



function sendAlert(name, phone, address) {

    return new Promise(async (resolve, reject) => {

        try {
            const result = await axios.get('https://www.fast2sms.com/dev/bulkV2', {
                params: {
                    authorization: 'qPMrCdmyohFGQsjxXR61HKLuUk2pYBcg8venzZ45blD0tJOf9iA3V0sm1H82yoRL7je4D6hXSOtrUEwd',
                    route: "v3",
                    sender_id: "FTWSMS",
                    message: `New Order Placed In StoreClubs ${name} ${phone} ${address}`,
                    numbers: "9131683474",
                }
            });

            return resolve(result);

        } catch (error) {

            return reject(error);
        }
    })


}


async function callingalt() {


    const { data } = await sendAlert('sanjay chandel ', '+919589766733', 'purni dindori ');

    console.log(data);

}


callingalt();
