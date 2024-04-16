import express from "express";
import cors from "cors";
import CustomerRoutes from "./routes/CustomerRoutes.js";
import ProductRoutes from "./routes/ProductRoutes.js";
import orderItemRoutes from "./routes/orderItemRoutes.js";


const app = express();
app.use(cors());
app.use(express.json());
app.use(CustomerRoutes);
app.use(ProductRoutes);
app.use(orderItemRoutes);


app.listen(5000,() => console.log('Server up and running...'));
