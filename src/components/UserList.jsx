import React, {useState, useEffect} from 'react';
import axios from "axios";

const UserList = () => {
const [customers, setCustomers] = useState([]);

useEffect(() => {
    getCustomers();
  }, []);

const getCustomers = async () =>{
    const response = await axios.get('http://localhost:5000/customers');
    setCustomers(response.data);
}

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <table className='table is-striped is-fullwidth'>
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
                        <th>{customer.name}</th>
                        <th>{customer.phone}</th>
                        <th>{customer.email}</th>
                        <th>{customer.address}</th>
                        <th></th>
                    </tr>
                ))}
                    </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserList;
