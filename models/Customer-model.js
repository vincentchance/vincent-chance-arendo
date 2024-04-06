import {Sequelize} from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Customer = db.define('customers',{
	name: DataTypes.STRING,
	phone: DataTypes.STRING,
	email: DataTypes.STRING,
	address: DataTypes.STRING
},{
	freezeTableName:true
});

export default Customer;

(async()=>{
	await db.sync();
})();