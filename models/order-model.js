import Sequelize from "sequelize";
import db from "../config/database.js";
import OrderItem from "./order_item.js";
import Customer from "./Customer-model.js";
import Product from "./Product-model.js";
//model to get a detail for existing order and total information
const {DataTypes} = Sequelize;

const Order = db.define('order', {
	total :{
		type: DataTypes.FLOAT,
		allowNull : false
	}, {
		freezeTableName: true
});
//buat asosiasi
Order.belongTo(Customer);
Customer.hasMany(Order);

Order.hasMany(OrderItem);
OrderItem.belongTo(Order);

export default Order;
