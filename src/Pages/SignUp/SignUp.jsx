import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
const SignUp = () => {
    const {UserSignIn} = useContext(AuthContext)
    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target 
        const email = form.email.value
        const password = form.password.value 
        console.log(email,password)
        UserSignIn(email,password)
        .then(result=>{
            console.log(result.user)
            if(result.user.accessToken){
                Swal.fire({
                    title: "Success!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
            }
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="hero min-h-[90vh] bg-base-200">
            <div className="hero-content flex-col md:gap-[90px] lg:flex-row  ">
                <div className="text-center lg:text-left">
                    <img src={login} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
                    <h1 className="text-5xl font-bold text-center">SignUp</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                             </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className='btn btn-secondary' value="Login" />
                        </div>
                    <p>Al Ready you have an accound ? <Link className='text-orange-400 font-bold' to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;