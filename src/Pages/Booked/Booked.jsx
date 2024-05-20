import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Booked = () => {
    const loder = useLoaderData()
    console.log('fsdfds',loder)
    const { _id,title,price,img} = loder
    const { user } = useContext(AuthContext)
    const handleSubmitData = e =>{
        e.preventDefault()
        const form = e.target 
        const name = form.name.value 
        const date = form.date.value 
        const email = form.email.value 
        const books ={
            UserName : name,
            email,
            date,
            service_id:_id,
            service:title,
            price,
            img

        }
        fetch('https://doctor-mama-is-comming-projects.vercel.app/booking',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(books)
        })
        .then(res=>res.json())
         .then(data=>{
            console.log(data)
            if(data.insertedId){
                alert('user added sucessfulyy')
            }
         })
    }

    return (
        <div>
            <p>Bookmark added :{title} </p>

            <form className="card-body" onSubmit={handleSubmitData}>
                <div className="grid grid-cols-2 gap-9">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"  placeholder="email" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" defaultValue={user?.email} name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input  name="amound" defaultValue={price} placeholder="amound" className="input input-bordered" required />

                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Submit" />
                </div>
            </form>
        </div>



    );
};

export default Booked;