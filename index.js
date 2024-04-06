import express from "express";
import cors from "cors";
import CustomerRoutes from "./routes/CustomerRoutes.js";
import ProductRoutes from "./routes/ProductRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(CustomerRoutes);
app.use(ProductRoutes);

app.listen(8000,() => console.log('Server up and running...'));