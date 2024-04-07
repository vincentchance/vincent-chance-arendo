import {Sequelize} from "sequelize";

//inisiasi data

const db = new Sequelize('customer_db','root','',{
	host: 'localhost',
	dialect: 'mysql',
	port:'3308' //kalo portnya normal/3306 bisa dihapus
});

export default db;
