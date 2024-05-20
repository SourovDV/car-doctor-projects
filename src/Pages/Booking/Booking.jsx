import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import BookList from "../BookList";
import axios from "axios";

const Booking = () => {
    const { user } = useContext(AuthContext)
    const [booking, setBookings] = useState([])

    const handleDelete = id =>{
        console.log('hare krishno',(id))
       
            fetch(`https://doctor-mama-is-comming-projects.vercel.app/booking/${id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(date=>{
                console.log(date)
                if(date.deletedCount){
                    const remaingin = booking.filter(data=>data._id !== id)
                    setBookings(remaingin)
                }
            })
        }


    console.log(booking)
    const url = `https://doctor-mama-is-comming-projects.vercel.app/booking?email=${user?.email}`

    useEffect(() => {
        axios.get(url,{withCredentials:true})
        .then(res=>{
            setBookings(res.data)    
        })
    }, [url])
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                
                      
                        {
                            booking.map(book => <BookList key={book._id} book={book} handleDelete={handleDelete}></BookList>)
                        } 

 
                </table>
            </div>
        </div>
    );
};

export default Booking;