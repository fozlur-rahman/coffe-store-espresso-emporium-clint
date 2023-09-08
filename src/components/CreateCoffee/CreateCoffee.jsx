import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CreateCoffee = () => {

    const handleNewCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, chef, supplier, taste, category, details, photo };
        console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    title: 'success!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            })
    }
    return (
        <div className='bg-gray-200 w-1/2 mx-auto  mt-20'>
            <h2 className='text-center text-3xl font-bold pt-16'>Create New Coffee</h2>
            <form onSubmit={handleNewCoffee} className='p-20'>
                <div className=' flex mx-auto justify-around'>
                    <div className="w-1/2 form-control me-5">
                        <label className="label">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <input type="text" id='name' placeholder="Enter name" className="input input-bordered rounded-none" />
                    </div>
                    <div className="w-1/2 form-control">
                        <label className="label">
                            <span className="label-text font-bold">Chef</span>
                        </label>
                        <input type="text" id='chef' placeholder="Enter Chef" className="input input-bordered rounded-none" />
                    </div>
                </div>
                <div className=' flex mx-auto justify-around'>
                    <div className="w-1/2 form-control me-5">
                        <label className="label">
                            <span className="label-text font-bold">Supplier</span>
                        </label>
                        <input type="text" id='supplier' placeholder="Enter Supplier" className="input input-bordered rounded-none" />
                    </div>
                    <div className="w-1/2 form-control">
                        <label className="label">
                            <span className="label-text font-bold">Taste</span>
                        </label>
                        <input type="text" id='taste' placeholder="Enter Taste" className="input input-bordered rounded-none" />
                    </div>
                </div>
                <div className=' flex mx-auto justify-around'>
                    <div className="w-1/2 form-control me-5">
                        <label className="label">
                            <span className="label-text font-bold">Category</span>
                        </label>
                        <input type="text" id='category' placeholder="Enter Category" className="input input-bordered rounded-none" />
                    </div>
                    <div className="w-1/2 form-control">
                        <label className="label">
                            <span className="label-text font-bold">Details</span>
                        </label>
                        <input type="text" id='details' placeholder="Enter Details" className="input input-bordered rounded-none" />
                    </div>
                </div>
                <div className='mx-auto'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Photo</span>
                        </label>
                        <input type="text" id='photo' placeholder="Enter Photo url" className="input input-bordered rounded-none" />
                    </div>
                </div>
                <div className=' mx-auto mt-5'>
                    <button className=' w-full py-3 font-bold btn btn-primary rounded-none'>Create Now</button>
                </div>
                <Link className='btn btn-link' to='/'>view all coffees</Link>
            </form>

        </div>
    );
};

export default CreateCoffee;