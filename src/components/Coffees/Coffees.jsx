import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Coffee from '../Coffee/Coffee';

const Coffees = () => {
    const loadedCoffees = useLoaderData();

    const [coffees, setCoffees] = useState(loadedCoffees);
    return (
        <div className='container mx-auto	'>
            <Link className='btn btn-link' to='/create'>create coffee</Link>
            <div className='grid grid-cols-3 gap-10'>
                {
                    coffees.map(coffee => <Coffee
                        key={coffee._id}
                        coffee={coffee}
                        coffees={coffees}
                        setCoffees={setCoffees}
                    ></Coffee>)
                }
            </div>


        </div>
    );
};

export default Coffees;