import { useEffect, useState } from "react";
import Service from "./Service";
import useServices from "../../../CustomHook/useServices";

const Services = () => {
    // const [services, setServics] = useState([])
    // console.log(services)
    // useEffect(() => {
    //     fetch('https://doctor-mama-is-comming-projects.vercel.app/services')
    //         .then(res => res.json())
    //         .then(data => setServics(data))

    // }, [])
    const services = useServices()
    return (
        <div>
            <div className="text-center mt-11">
                <p className="text-orange-500">Service</p>
                <p className="text-3xl font-bold">Our Service Area</p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {
                   services? services.map(data => <Service key={data._id} data={data}></Service>):<p>not fonund</p>
                }
            </div>
        </div>
    );
};

export default Services;