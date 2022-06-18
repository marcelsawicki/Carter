import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../components/Banner';
import NavBar from '../components/NavBar';

export interface IAboutPageProps {}

const ProductPage: React.FunctionComponent<IAboutPageProps> = (props) => {
    const [message, setMessage] = useState('');
    const { number } = useParams();

    useEffect(() => {
        if (number) {
            setMessage('The number is ' + number);
        } else {
            setMessage('No number was provided');
        }
    }, []);

    return (
        <div>
            <NavBar />
            <Banner title="Produkt"></Banner>
            <p>This is the product page.</p>
            <p>{message}</p>
        </div>
    );
};

export default ProductPage;