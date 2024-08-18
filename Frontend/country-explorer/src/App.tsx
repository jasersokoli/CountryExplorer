import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import CountriesList from './CountriesList';
import CountryDetails from './CountryDetails';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CountriesList />} />
                <Route path="/country/:name" element={<CountryDetails />} />
            </Routes>
        </Router>
    );
};

export default App;
