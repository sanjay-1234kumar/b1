const router=require('express').Router();

const MangerAuthController=require('./manger/controllers/manger-auth-controller');

const MangerAuthMiddler=require('./manger/middlewares/manger-auth-middleware');

const MangerActivateController=require('./manger/controllers/manger-activate-controller');

const imageUploadMiddleware=require('./manger/middlewares/image-upload-middleware');

const MangerSellerController=require('./manger/controllers/manger-seller-controller');

const MangerCustomerController=require('./manger/controllers/manger-customer-controller');

const MangerPaymentController=require('./manger/controllers/manger-payment-controller');

const MangerOrderController=require('./manger/controllers/manger-order-controller');

const MangerAccountPayController=require('./manger/controllers/manger-accountPayment-controller');

const MangerAuditController=require('./manger/controllers/manger-audit-controller');

const AduitImageMiddleware=require('./manger/middlewares/aduit-image-middleware');


const BillImageMiddleware=require('./manger/middlewares/bill-image-upload-middleware');

const MangerReturnController=require('./manger/controllers/manger-return-controller');

const ReturnImageMiddleware=require('./manger/middlewares/return-image-middleware');

const MangerAddressController=require('./manger/controllers/manger-address-controller');


router.post('/api/manger/register',MangerAuthController.registerManger);

router.post('/api/manger/verify',MangerAuthController.verifyManger);

router.get('/api/manger/refresh',MangerAuthController.mangerRefresh);

router.post('/api/manger/logout',MangerAuthMiddler,MangerAuthController.logoutmanger);

router.post('/api/manger/activate',MangerAuthMiddler,imageUploadMiddleware,MangerActivateController.activateManger);

router.get('/api/manger/seller/all',MangerAuthMiddler,MangerSellerController.findSellers);

router.get('/api/manger/customer/all',MangerAuthMiddler,MangerCustomerController.findCustomers);

router.get('/api/manger/payments/all',MangerAuthMiddler,MangerPaymentController.getAllPaymentForManger);

router.get('/api/manger/orders/all',MangerAuthMiddler,MangerOrderController.getAllMangerOrders);

router.post('/api/manger/account-pay/add',MangerAuthMiddler,BillImageMiddleware,MangerAccountPayController.registerAccountPayment);

router.get('/api/manger/account-pay/all',MangerAuthMiddler,MangerAccountPayController.findAllAccountPayforManger);

router.post('/api/manger/aduit/add',MangerAuthMiddler,AduitImageMiddleware,MangerAuditController.registerMonthlyAudit);

router.get('/api/manger/aduit/all',MangerAuthMiddler,MangerAuditController.allAuditForManger);

router.post('/api/manger/return/add',MangerAuthMiddler,ReturnImageMiddleware,MangerReturnController.registerReturnsOfManger);

router.get('/api/manger/return/all',MangerAuthMiddler,MangerReturnController.findAllRetunrsForManger);

router.get('/api/manger/address/form',MangerAuthMiddler,MangerAddressController.findAddressMangerForForm);


module.exports=router;

