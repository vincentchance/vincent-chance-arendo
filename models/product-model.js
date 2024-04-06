import {Sequelize} from "sequelize";
import db1 from "../config/database.js";

const {DataTypes} = Sequelize;

const Product = db1.define('product',{
	name: DataTypes.STRING,
	unit: DataTypes.INTEGER,
	price: DataTypes.INTEGER
},{
	freezeTableName:true
});

export default Product;

(async()=>{
	await db1.sync();
})();