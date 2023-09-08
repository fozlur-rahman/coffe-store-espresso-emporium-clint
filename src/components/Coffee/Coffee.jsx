import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Coffee = ({ coffee, coffees, setCoffees }) => {
    console.log(coffee);
    const { name, chef, taste, supplier, details, photo, category, _id } = coffee;

    const handleDelete = (_id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(coffee => coffee._id !== _id);
                            setCoffees(remaining);
                        }
                    })
            }
        })

    }
    return (
        <div style={{ height: '200px' }} className='shadow flex justify-between items-center'>
            <div className='h-full'>
                <img className='h-full overflow-hidden w-full ' src={photo} alt="" />
            </div>
            <div className=' flex flex-col'>
                <h2>Name: {name}</h2>
                <p >Category: {category}</p> <p>Sup: {supplier}</p>
            </div>
            <div className=' flex flex-col items-center me-5 gap-5'>
                <button className='btn btn-primary'>V</button>
                <Link to={`updateCoffee/${_id}`}>
                    <button className='btn btn-warning'>U</button>
                </Link>
                <button onClick={() => handleDelete(_id)} className='btn btn-danger'>X</button>
            </div>


        </div>
    );
};

export default Coffee;