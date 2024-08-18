import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

interface Country {
    name: string;
    capital: string;
    currency: string;
    language: string;
    region: string;
    flagUrl: string;
    mapUrl: string;
}

const CountryDetails: React.FC = () => {
    const { name } = useParams<{ name: string }>();
    const [country, setCountry] = useState<Country | null>(null);

    useEffect(() => {
        axios.get(`https://localhost:7042/api/country/${name}`)
            .then(response => setCountry(response.data))
            .catch(error => console.error('Error fetching country details', error));
    }, [name]);

    if (!country) return <div>Loading...</div>;

    return (
        <div className="country-details-container">
            <h1>{country.name}</h1>
            <img src={country.flagUrl} alt={`${country.name} flag`} />
            <p><strong>Capital:</strong> {country.capital}</p>
            <p><strong>Currency:</strong> {country.currency}</p>
            <p><strong>Language:</strong> {country.language}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><a href={country.mapUrl} target="_blank" rel="noopener noreferrer">View on Map</a></p>
            <Link to="/">Back to Countries List</Link>
        </div>
    );
};

export default CountryDetails;
