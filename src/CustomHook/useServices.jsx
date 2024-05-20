import { useState } from "react";

 
const useServices = () => {
const [services,setServics] = useState([])

    fetch('https://doctor-mama-is-comming-projects.vercel.app/services')
    .then(res=>res.json())
    .then(data=>{
        setServics(data)
    })
    return services
    
};

export default useServices;