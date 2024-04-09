import { Sequelize } from 'sequelize';
import db from '../config/database.js';
import Product from './product-model.js';
import Customer from './Customer-model.js';

const { DataTypes } = Sequelize;

const OrderItem = db.define('order_item', {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    freezeTableName: true
});

// Define associations
OrderItem.belongsTo(Customer);
Customer.hasMany(OrderItem);

// Define a many-to-many association with Product
OrderItem.belongsToMany(Product, { through: 'OrderItemProduct' });
Product.belongsToMany(OrderItem, { through: 'OrderItemProduct' });

export default OrderItem;
