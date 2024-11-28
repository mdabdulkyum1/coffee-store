import { createContext, useEffect, useState } from "react";
import { PropTypes } from 'prop-types';

export const CoffeeContext = createContext(null);

const CoffeeProviders = ({ children }) => {
    const [coffees, setCoffees] = useState([]);
    


    useEffect(()=> {
        fetch('http://localhost:5000/coffees')
        .then(res=> res.json())
        .then(data => setCoffees(data))
    } ,[]);


    const coffeeInfo = {
        coffees, 
        setCoffees
    }
    return (
        <CoffeeContext.Provider value={coffeeInfo}>
            {children}
        </CoffeeContext.Provider>
    );
};



CoffeeProviders.propTypes = {
    children: PropTypes.node    
};
export default CoffeeProviders;


