import OrderItem from "../models/order_item.js"

export const createOrderItem = async(req, res) => {
	try {
		const {quantity, price, customerId, productId, discount } = req.body;
		const totalPrice = price *( 1 - discount ); //buat variabel total harga
		const orderItem = await OrderItem.create({quantity, price: totalPrice, customerId});
		await orderItem.addProduct(productId);
		
		res.status(201).json({orderItem});
	} catch(error){
	console.log(error.message);
	}
}

export const getOrderItem = async(req, res) =>{
	try {
		const response = await OrderItem.findAll();
		res.status(200).json(response);
	} catch(error){
	console.log(error.message);
	}
}
