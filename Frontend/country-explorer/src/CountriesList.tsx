import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Country {
    name: string;
    capital: string;
    currency: string;
    language: string;
    region: string;
}

const CountriesList: React.FC = () => {
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        axios.get('https://localhost:7042/api/country')
            .then(response => setCountries(response.data))
            .catch(error => console.error('Error fetching countries', error));
    }, []);

    return (
        <div className="countries-list-container">
            <h1>Countries List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Capital</th>
                        <th>Currency</th>
                        <th>Language</th>
                        <th>Region</th>
                    </tr>
                </thead>
                <tbody>
                    {countries.map(country => (
                        <tr key={country.name}>
                            <td><Link to={`/country/${country.name}`}>{country.name}</Link></td>
                            <td>{country.capital}</td>
                            <td>{country.currency}</td>
                            <td>{country.language}</td>
                            <td>{country.region}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CountriesList;
