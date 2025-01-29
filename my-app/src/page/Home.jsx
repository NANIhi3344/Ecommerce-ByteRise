import React from 'react';
import { Productcard } from './Component/Productcard';

const productdetails =[
    {
        image:"https://images.unsplash.com/photo-1606780000000-3b3b3e1b3b3b",
        name:"Product 1",
        price:"$100",
        description:"new product"
    },

    {
        image:"https://images.unsplash.com/photo-1606780000000-3b3b3e1b3b3b",
        name:"Product 2",
        price:"$200",
        description:"new product"
    },

    {
        image:"https://images.unsplash.com/photo-1606780000000-3b3b3e1b3b3b",
        name:"Product 3",
        price:"$300",
        description:"new product"
    },

    {
        image:"https://images.unsplash.com/photo-1606780000000-3b3b3e1b3b3b",
        name:"Product 4",
        price:"$400",
        description:"new product"
    }
]

export const Home = () => {
    return (
        <div className='w-full min-h-screen bg-nuetral-800'>
        <div className='flex justify-center items-center h-screen bg-gray-200'>
            {
                productdetails.map((product, index) => {
                    return(
                    <>
                    <Productcard key={index}{...product} /></>
                    )
                }
                )}
            
        </div> </div>
    );
}