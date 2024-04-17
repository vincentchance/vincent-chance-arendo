import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const CustomerList = () => {
const [customers, setCustomers] = useState([]);

useEffect(() => {
    getCustomers();
  }, []);

const getCustomers = async () =>{
    const response = await axios.get('http://localhost:5000/customers');
    setCustomers(response.data);
}

const deleteCustomers = async(id) => {
    try {
        await axios.delete(`http://localhost:5000/customers/${id}`);
        getCustomers();
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <Link to={`/add`} className="button is-success">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Phone Number</th>
                        <th>E-mail Address</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer)=>(
                    <tr key={customer.id}>
                        <td>{customer.name}</td>
                        <td>{customer.phone}</td>
                        <td>{customer.email}</td>
                        <td>{customer.address}</td>
                        <td><Link to={`edit/${customer.id}`}className='button is-small is-info'>Edit</Link>
                        <button onClick={() => deleteCustomers(customer.id)} className='button is-small is-danger'>Delete</button>
                        </td>
                    </tr>
                ))}
                    </tbody>
            </table>
        </div>
    </div>
  )
}
export default CustomerList;
export default UserList;
