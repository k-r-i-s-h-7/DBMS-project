import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddDistributor from './AddDistributor';
import SearchDistributors from './SearchDistributors';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/insert">Add Distributor</Link></li>
                        <li><Link to="/search">Search Distributors</Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<h1>Welcome to the Pharmacy App</h1>} />
                    <Route path="/insert" element={<AddDistributor />} />
                    <Route path="/search" element={<SearchDistributors />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
