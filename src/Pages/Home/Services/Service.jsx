import { FaBeer } from "react-icons/fa";
import { Link } from "react-router-dom";

const Service = ({ data }) => {
    const { _id,title, img, price } = data
  
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title text-orange-600"> {title}</h2>
                <div className="flex justify-between items-center">
                    <p className="text-xl font-bold">Price : {price}</p>
                    <Link to={`/booked/${_id}`}>
                        <button className="btn btn-circle btn-outline">
                            <FaBeer></FaBeer>
                        </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;