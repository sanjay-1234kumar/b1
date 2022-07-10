const router = require('express').Router();
//refresh 

const AuthSellerController = require('./controllers/auth-seller-controller');

const ActivateSellerController = require('./controllers/activate-seller-controller');

const handleMyFile = require('./middlewares/im-middleware');

const sellerAuthMiddleware = require('./middlewares/seller-auth-middleware');


const SellerCatergory = require('./controllers/catergory-seller-controller');

const SellerSubCatergory = require('./controllers/subacatergory-seller-controller');

const SellerTax = require('./controllers/tax-seller-controller');

const SellerProductController = require('./controllers/product-seller-controller');

const handelMutiplyFileIm = require('./middlewares/productFile');


const sellerAdminRole = require('./middlewares/seller-admin-middleware');

const SellerReturnController = require('./controllers/return-seller-controller');

const SellerSupplyController = require('./controllers/supply-seller-controller');

const SellerPaymentController = require('./controllers/payment-seller-controller');

const SellerPinController = require('./controllers/pin-seller-controller');

const SellerActivateMiddleware = require('./middlewares/seller-actiavte-middleware');

const SellerCitySerAvaibleController = require('./controllers/citySerAvailble-seller-controller');

const SellerAlertController = require('./controllers/alert-controller');

const AdminSupplyController = require('./controllers/admin-supply-controller');

const AdminCustomerController = require('./controllers/others/AdminCustomerController');
const AdminSellerController = require('./controllers/others/AdminSellerController');
const AdminPaymentController = require('./controllers/others/AdminPaymentController');
const AdminReturnController = require('./controllers/others/AdminReturnController');
const AdminOrderController = require('./controllers/others/AdminOrderController');

const returnImageMiddleware = require('./manger/middlewares/return-image-middleware');

const AllWorkController = require('./controllers/all-worker-controller');


const handelworkfile = require('./middlewares/work-middleware');
const AdminWorkController = require('./controllers/admin-work-controller');

// regsiter api 
router.post('/api/seller/send-otp', AuthSellerController.sendOtp);
router.post('/api/seller/verify-otp', AuthSellerController.verifyOtp);
router.post('/api/seller/activate', sellerAuthMiddleware, handleMyFile, ActivateSellerController.activateSeller);
router.get('/api/seller/refresh', AuthSellerController.sellerRefresh);
router.post('/api/seller/logout', sellerAuthMiddleware, AuthSellerController.logout);

// catergory api admin
router.post('/api/seller/admin/add-catergory', sellerAuthMiddleware, sellerAdminRole, SellerCatergory.addSellerCatergory);
router.get('/api/seller/admin/getall-catergory', sellerAuthMiddleware, sellerAdminRole, SellerCatergory.getSellerCatergory);
router.get('/api/seller/admin/allcatergory/single/:id', sellerAuthMiddleware, sellerAdminRole, SellerCatergory.findSingleCatergoryByid);
router.get('/api/seller/admin/allcatergory/edit/data/:id', sellerAuthMiddleware, sellerAdminRole, SellerCatergory.getSellerCatergoryForeditData);
router.post('/api/seller/admin/allcatergory/update', sellerAuthMiddleware, sellerAdminRole, SellerCatergory.updateSellercatergoryByid);

//sub catergory api admin
router.post('/api/seller/admin/add-subcatergory', sellerAuthMiddleware, sellerAdminRole, SellerSubCatergory.createSubCatergory);
router.get('/api/seller/admin/getall-subcatergory', sellerAuthMiddleware, sellerAdminRole, SellerSubCatergory.getAllSubCatergory);
router.get('/api/seller/admin/subcatergory/single/:id', sellerAuthMiddleware, sellerAdminRole, SellerSubCatergory.findsinglesubcatergorybyid);
router.get('/api/seller/admin/subcatergory/edit/data/:id', sellerAuthMiddleware, sellerAdminRole, SellerSubCatergory.getSubcatergoryFordataforedit);
router.post('/api/seller/admin/subcatergory/update', sellerAuthMiddleware, sellerAdminRole, SellerSubCatergory.updateSellerSubcatergorybyId);


//tax api for admin
router.post('/api/seller/admin/add-tax', sellerAuthMiddleware, sellerAdminRole, SellerTax.createTax);
router.get('/api/seller/admin/getall-tax', sellerAuthMiddleware, sellerAdminRole, SellerTax.getAllTax);
router.get('/api/seller/admin/tax/single/:id', sellerAuthMiddleware, sellerAdminRole, SellerTax.findsingletaxbyid);
router.get('/api/seller/admin/tax/edit/data/:id', sellerAuthMiddleware, sellerAdminRole, SellerTax.getTaxDataForTax);
router.post('/api/seller/admin/tax/update', sellerAuthMiddleware, sellerAdminRole, SellerTax.updateTaxByid);



//product api for admin
router.get('/api/seller/admin/product/form/data', sellerAuthMiddleware, sellerAdminRole, SellerProductController.getdataoftaxsubcatergoryforaddProduct);
router.post('/api/seller/admin/product/add', sellerAuthMiddleware, sellerAdminRole, handelMutiplyFileIm, SellerProductController.createSingleProduct);
router.get('/api/seller/admin/product/all', sellerAuthMiddleware, sellerAdminRole, SellerProductController.findAllProductsforSeller);
router.get('/api/seller/admin/product/single/:id', sellerAuthMiddleware, sellerAdminRole, SellerProductController.findSingleProductbyId);
router.get('/api/seller/admin/product/edit/data/:id', sellerAuthMiddleware, sellerAdminRole, SellerProductController.getdataforeditofproductbyid);
router.post('/api/seller/admin/product/update', sellerAuthMiddleware, sellerAdminRole, SellerProductController.updateProductbyId);
router.get('/api/seller/admin/product/search', sellerAuthMiddleware, sellerAdminRole, SellerProductController.findProductbySearchId);



//pincode api admin
router.post('/api/seller/admin/pin/add', sellerAuthMiddleware, sellerAdminRole, SellerPinController.addPincodeArea);
router.get('/api/seller/admin/pin/all', sellerAuthMiddleware, sellerAdminRole, SellerPinController.findAllPincode);
router.get('/api/seller/admin/pin/single/:id', sellerAuthMiddleware, sellerAdminRole, SellerPinController.findSinglePinbyid);
router.get('/api/seller/admin/pin/edit/data/:id', sellerAuthMiddleware, sellerAdminRole, SellerPinController.getdataEditofSellerPincode);
router.post('/api/seller/admin/pin/update', sellerAuthMiddleware, sellerAdminRole, SellerPinController.updateSellerPincodeById);


//api for admin for alerts
router.get('/api/seller/admin/alert/all', sellerAuthMiddleware, sellerAdminRole, SellerAlertController.allAlertForAdmin);
router.get('/api/seller/admin/alert/single/:id', sellerAuthMiddleware, sellerAdminRole, SellerAlertController.findSingleAlertbyId);
router.get('/api/seller/admin/alert/edit/data/:id', sellerAuthMiddleware, sellerAdminRole, SellerAlertController.getDataforSingleAlerforedit);
router.post('/api/seller/admin/alert/update', sellerAuthMiddleware, sellerAdminRole, SellerAlertController.updateAlertStatus);


//address country state city  api  for admin seller
router.post('/api/seller/admin/city/add', sellerAuthMiddleware, sellerAdminRole, SellerCitySerAvaibleController.registerCitySerAvaible);
router.get('/api/seller/admin/city/all', sellerAuthMiddleware, sellerAdminRole, SellerCitySerAvaibleController.findCityStateCountry);
router.get('/api/seller/admin/city/single/:id', sellerAuthMiddleware, sellerAdminRole, SellerCitySerAvaibleController.findSingleCitySerbyId);
router.get('/api/seller/admin/city/edit/data/:id', sellerAuthMiddleware, sellerAdminRole, SellerCitySerAvaibleController.getDataofCitySerforEdit);
router.post('/api/seller/admin/city/update', sellerAuthMiddleware, sellerAdminRole, SellerCitySerAvaibleController.updateCitySer);


//admin all lists of map supply 
router.get('/api/seller/admin/supply/all', sellerAuthMiddleware, sellerAdminRole, AdminSupplyController.adminAllListofSupply);
router.get('/api/seller/admin/supply/searchPr', sellerAuthMiddleware, sellerAdminRole, AdminSupplyController.findSupplyBasedOnProductId);
router.get('/api/seller/admin/supply/searchSupplyId', sellerAuthMiddleware, sellerAdminRole, AdminSupplyController.findSupplyBasedOnSupplyId);

//admin others  othesr api 
router.get('/api/seller/admin/other/customer', sellerAuthMiddleware, sellerAdminRole, AdminCustomerController.findAllCustomerListforAdmin);
router.get('/api/seller/admin/other/seller', sellerAuthMiddleware, sellerAdminRole, AdminSellerController.findAllSellerListforAdmin);
router.get('/api/seller/admin/other/payments', sellerAuthMiddleware, sellerAdminRole, AdminPaymentController.findAllPaymentofAdmin);
router.get('/api/seller/admin/other/payments/single/:id', sellerAuthMiddleware, sellerAdminRole, AdminPaymentController.findSingleForAdmin);


router.get('/api/seller/admin/other/order', sellerAuthMiddleware, sellerAdminRole, AdminOrderController.findAllOrderForAdmin);
router.get('/api/seller/admin/other/order/single/:id', sellerAuthMiddleware, sellerAdminRole, AdminOrderController.findSingleOrderforAdmin);
router.get('/api/seller/admin/other/order/edit/data/:id', sellerAuthMiddleware, sellerAdminRole, AdminOrderController.getOrderDataforEdit);
router.post('/api/seller/admin/other/order/update', sellerAuthMiddleware, sellerAdminRole, AdminOrderController.updateOrderStatusbyAdmin);

router.get('/api/seller/admin/other/return', sellerAuthMiddleware, sellerAdminRole, AdminReturnController.findAllReturnForAdmin);
router.post('/api/seller/admin/other/return/register', sellerAuthMiddleware, sellerAdminRole, returnImageMiddleware, AdminReturnController.registerReturn);
router.get('/api/seller/admin/other/return/single/:id', sellerAuthMiddleware, sellerAdminRole, AdminReturnController.findSingleReturnforAdmin);

//function of seller supply retunrns payment
//supply
router.post('/api/seller/supply/add', sellerAuthMiddleware, SellerActivateMiddleware, SellerSupplyController.createSingleSupplyMap);
router.get('/api/seller/supply/all', sellerAuthMiddleware, SellerSupplyController.findSupplyMapForeachSeller);
router.get('/api/seller/supply/single/:id', sellerAuthMiddleware, SellerSupplyController.findSingleItembyId);
router.get('/api/seller/supply/edit/data/:id', sellerAuthMiddleware, SellerSupplyController.getSupplydataforedit);
router.post('/api/seller/supply/update', sellerAuthMiddleware, SellerSupplyController.updateSellerSupply);
router.get('/api/seller/supply/searchPrid', sellerAuthMiddleware, SellerSupplyController.findSupplyByProductId);

//payments
router.post('/api/seller/payment/add', sellerAuthMiddleware, SellerActivateMiddleware, SellerPaymentController.createSinglePaymentForSeller);
router.get('/api/seller/payment/all', sellerAuthMiddleware, SellerPaymentController.findAllPaymentForSeller);
router.get('/api/seller/payment/single/:id', sellerAuthMiddleware, SellerPaymentController.findSinglePaymentbtid);
router.get('/api/seller/payment/edit/data/:id', sellerAuthMiddleware, SellerPaymentController.getdataforbyid);
router.post('/api/seller/payment/update', sellerAuthMiddleware, SellerPaymentController.updatePaymentbyid);
router.get('/api/seller/payment/search/orderId', sellerAuthMiddleware, SellerPaymentController.findPaymentbysearchOrderId);


//returns
router.get('/api/seller/return/all', sellerAuthMiddleware, SellerReturnController.findAllReturnForSeller);
router.get('/api/seller/return/single/:id', sellerAuthMiddleware, SellerReturnController.findSingleReturnforseller);
router.get('/api/seller/return/edit/data/:id', sellerAuthMiddleware, SellerReturnController.getdataofreturnforedit);
router.post('/api/seller/return/update', sellerAuthMiddleware, SellerReturnController.updateRetunrStatus);

//profile seller
router.get('/api/seller/profile', sellerAuthMiddleware, ActivateSellerController.getSellerProfile);
router.get('/api/seller/profile/edit/get-data', sellerAuthMiddleware, ActivateSellerController.getSellerDataEditProfile);
router.post('/api/seller/profile/edit/update-data', sellerAuthMiddleware, ActivateSellerController.editUpdateSellerProfile);

//address for form 
router.get('/api/seller/address/form', sellerAuthMiddleware, SellerCitySerAvaibleController.findAllAddressCityStateForForm);


//works service routes
router.post('/api/sanjay/worker/add', sellerAuthMiddleware, sellerAdminRole, handelworkfile, AllWorkController.registerWoker);

router.post('/api/sanjay/working/add', sellerAuthMiddleware, sellerAdminRole, handelworkfile, AllWorkController.registerWorking);

router.get('/api/seller/admin/san/worker/all', sellerAuthMiddleware, sellerAdminRole, AdminWorkController.getAllWorkers);

router.get('/api/seller/admin/san/working/all', sellerAuthMiddleware, sellerAdminRole, AdminWorkController.getAllWorkingSer);

router.get('/api/seller/admin/san/booking/all', sellerAuthMiddleware, sellerAdminRole, AdminWorkController.getAllWorkBooking);

router.get('/api/seller/admin/san/booking/single/:id', sellerAuthMiddleware, sellerAdminRole, AdminWorkController.getSingleWorkBooking);

router.get('/api/seller/admin/san/booking/edit-data/:id', sellerAuthMiddleware, sellerAdminRole, AdminWorkController.getDataForEditWorkingBook);

router.post('/api/seller/admin/san/booking/update', sellerAuthMiddleware, sellerAdminRole, AdminWorkController.updateWorkingBooking);


module.exports = router;

