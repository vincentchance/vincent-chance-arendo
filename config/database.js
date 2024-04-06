import {Sequelize} from "sequelize";

//untuk customer table

const db = new Sequelize('customer_db','root','',{
	host: 'localhost',
	dialect: 'mysql'
});

export default db;
