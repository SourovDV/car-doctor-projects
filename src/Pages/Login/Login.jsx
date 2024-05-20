import { Link} from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import Swal from 'sweetalert2';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';
import { getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../../Firebase.config';
import useAuth from '../../CustomHook/useAuth';
const Login = () => {
    const {userLoginin} =useAuth()
    const provider = new GoogleAuthProvider()
 
    const auth = getAuth(app)


    //google login 

    const googleLogin = ()=>{
        signInWithPopup(auth,provider)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error.message)
        })
         
    }
    
    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target 
        const email = form.email.value
        const password = form.password.value 
        console.log(email,password)
        // navigate(navigate?.state?navigate.state:'/')
        userLoginin(email,password)
        .then(result=>{
            console.log(result.user)
            if(result.user){
                Swal.fire({
                    title: "Sucess",
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
                    <h1 className="text-5xl font-bold text-center">Login</h1>

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
                    <p>Create a new accound <Link className='text-orange-400 font-bold' to='/signup'>SignUp</Link></p>
                    </form>
                    <button onClick={googleLogin}>Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;