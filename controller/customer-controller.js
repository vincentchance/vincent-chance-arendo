import Customer from "../models/Customer-model.js";

export const getCustomers = async(req, res) =>{
	try{
		const response = await Customer.findAll();
		res.status(200).json(response);
} catch(error){
	console.log(error.message);
}
}

export const getCustomersById = async(req, res) =>{
	try{
		const response = await Customer.findOne({
			where:{
				id: req.params.id
			}
		});
		res.status(200).json(response);
} catch(error){
	console.log(error.message);
}
}


export const createCustomers = async(req, res) =>{
	try{
		await Customer.create(req.body);
		res.status(201).json({msg: "Customer Created"});
	} catch(error){
	console.log(error.message);
	}
}


export const updateCustomers = async(req, res) =>{
	try{
		await Customer.update(req.body,{
			where:{
				id: req.params.id
			}
		});
		res.status(200).json({msg: "Customer Updated"});
	} catch(error){
	console.log(error.message);
	}
}


export const deleteCustomers = async(req, res) =>{
	try{
		await Customer.destroy({
			where:{
				id: req.params.id
			}
		});
		res.status(200).json({msg: "Customer Deleted"});
} catch(error){
	console.log(error.message);
}
}