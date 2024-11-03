// AddDistributor.js
import React, { useState } from 'react';
import axios from 'axios';

const AddDistributor = () => {
    const [manufacturer, setManufacturer] = useState('');
    const [medicineId, setMedicineId] = useState('');
    const [orderNo, setOrderNo] = useState('');
    const [noOfUnits, setNoOfUnits] = useState('');
    const [orderDate, setOrderDate] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const distributorData = {
            Manufacturer: manufacturer,
            Medicine_ID: medicineId,
            Order_no: orderNo,
            No_of_units: noOfUnits,
            Order_date: orderDate,
        };

        try {
            const response = await axios.post('http://localhost:3000/insert', distributorData);
            setMessage('Distributor added successfully!');
            // Clear form fields
            setManufacturer('');
            setMedicineId('');
            setOrderNo('');
            setNoOfUnits('');
            setOrderDate('');
        } catch (error) {
            console.error('Error adding distributor:', error);
            setMessage('Error adding distributor. Please try again.');
        }
    };

    return (
        <div>
            <h2>Add Distributor</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Manufacturer:</label>
                    <input 
                        type="text" 
                        value={manufacturer} 
                        onChange={(e) => setManufacturer(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Medicine ID:</label>
                    <input 
                        type="text" 
                        value={medicineId} 
                        onChange={(e) => setMedicineId(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Order No:</label>
                    <input 
                        type="text" 
                        value={orderNo} 
                        onChange={(e) => setOrderNo(e.target.value)} 
                    />
                </div>
                <div>
                    <label>No of Units:</label>
                    <input 
                        type="number" 
                        value={noOfUnits} 
                        onChange={(e) => setNoOfUnits(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Order Date:</label>
                    <input 
                        type="date" 
                        value={orderDate} 
                        onChange={(e) => setOrderDate(e.target.value)} 
                    />
                </div>
                <button type="submit">Add Distributor</button>
            </form>
        </div>
    );
};

export default AddDistributor;
