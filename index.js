import express from "express";
import cors from "cors";
import CustomerRoutes from "./routes/CustomerRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";


const app = express();
app.use(cors());
app.use(express.json());
app.use(CustomerRoutes);
app.use(ProductRoutes);
app.use(orderRoutes);


app.listen(8000,() => console.log('Server up and running...'));
