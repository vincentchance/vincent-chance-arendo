import express from "express";
import {
	createOrderItem,
	getOrderItem,
	getOrderItemById
} from "../controller/order-item-controller.js";

const router = express.Router();

router.get('/order_item', getOrderItem);
router.get('/order_item/:id', getOrderItemById);
router.post('/order_item', createOrderItem);

export default router;
