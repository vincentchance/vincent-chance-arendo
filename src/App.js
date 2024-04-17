import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerList from "./components/CustomerList";
import AddCustomer from "./components/AddCustomer";
import EditCustomer from "./components/EditCustomer";

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<CustomerList/>}/>
      <Route path="/add" element={<AddCustomer/>}/>
      <Route path="edit/:id" element={<EditCustomer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
