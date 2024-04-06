import express from "express";
import {
	getCustomers, 
	getCustomersById,
	createCustomers,
	updateCustomers,
	deleteCustomers
	} from "../controller/customer-controller.js";

const router = express.Router();

router.get('/customers', getCustomers);
router.get('/customers/:id', getCustomersById);
router.post('/customers', createCustomers);
router.patch('/customers/:id', updateCustomers);
router.delete('/customers/:id', deleteCustomers);

export default router;
