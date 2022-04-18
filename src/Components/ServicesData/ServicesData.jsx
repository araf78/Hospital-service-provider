import React from 'react';
import Services from '../Services/Services';

const ServicesData = () => {
    const servicesAllData =
    return (
        <div>
             {
                servicesAllData.map(data =>{
                    // console.log(data)
                    <Services
                    data = {data}
                    ></Services>
                })
            } 
        </div>
    );
};

export default ServicesData;