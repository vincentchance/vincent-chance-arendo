import {Sequelize} from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Product = db.define('product',{
	name: DataTypes.STRING,
	unit: DataTypes.INTEGER,
	price: DataTypes.INTEGER
},{
	freezeTableName:true
});

export default Product;

(async()=>{
	await db.sync(); 
})();
