// SearchDistributors.js
import React, { useState } from 'react';
import axios from 'axios';

const SearchDistributors = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [distributors, setDistributors] = useState([]);
    const [message, setMessage] = useState('');

    const fetchDistributors = async () => {
        try {
            const response = await axios.get('http://localhost:3000/search', {
                params: { keyword: searchKeyword }
            });
            setDistributors(response.data);
            setMessage(response.data.length > 0 ? '' : 'No distributors found.');
        } catch (error) {
            console.error('Error fetching data:', error);
            setMessage('Error fetching data. Please try again.');
        }
    };

    return (
        <div>
            <h2>Search Distributors</h2>
            <input 
                type="text" 
                value={searchKeyword} 
                onChange={(e) => setSearchKeyword(e.target.value)} 
                placeholder="Search by manufacturer" 
            />
            <button onClick={fetchDistributors}>Search</button>
            
            {message && <p>{message}</p>}
            {distributors.length > 0 && (
                <div>
                    <h3>Search Results:</h3>
                    <ul>
                        {distributors.map((distributor, index) => (
                            <li key={index}>
                                <strong>Manufacturer:</strong> {distributor.Manufacturer}, 
                                <strong> Medicine ID:</strong> {distributor.Medicine_ID}, 
                                <strong> Order No:</strong> {distributor.Order_no}, 
                                <strong> Units:</strong> {distributor.No_of_units}, 
                                <strong> Date:</strong> {new Date(distributor.Order_date).toLocaleDateString()}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchDistributors;
