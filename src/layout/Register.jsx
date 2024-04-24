import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Footer from "../pages/Footer";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const name = form.get('name');
        const photo = form.get('photo');
        const password = form.get('password');
        console.log( name, photo, email, password);

        if(password.length < 6){
            setRegisterError('password should be 6 character');
            return;
        }
        else if (/[A-Z]/.test(password)){
            setRegisterError('your password should have at least one upper case character.')
            return;
        }
        else if(/[a-z]/.test('password')){
            setRegisterError('Your password Should have at least one lower case character.')
            return;
        }

        setRegisterError('');
        setSuccess('');

        createUser(email, password)
        .then(result =>{
             console.log(result.user)
             setSuccess('User Created Successfully.')
        })
        .catch(error =>{
            console.error(error);
            setRegisterError(error.message);
        })

    }

    return (
        <div>
            <Helmet>
                <title>Residential | Register </title>
            </Helmet>
            <h2 className="text-3xl my-10 text-center">Please Register</h2>
            <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URl</span>
                    </label>
                    <input type="text" name="Photo" placeholder="Photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <br/>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            {
                registerError && <p className="text-red-700 font-bold text-center">{registerError}</p>
            }
            {
                success && <p className="text-green-600 font-bold text-center">{success}</p>
            }
            <p className="text-center mt-4">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
            <Footer></Footer>
        </div>
    );
};

export default Register;


// import { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../Provider/AuthProvider";
// import { Helmet } from "react-helmet-async";
// import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
// import Footer from "../pages/Footer";

// const Register = () => {
//   const [registerError, setRegisterError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const { createUser } = useContext(AuthContext);

//   const handleRegister = e => {
//     e.preventDefault();
//     const form = new FormData(e.currentTarget);
//     const email = form.get('email');
//     const name = form.get('name');
//     const photo = form.get('photo');
//     const password = form.get('password');
//     console.log( name, photo, email, password);


//     if(password.length < 6){
//       setRegisterError('Password should be at least 6 characters.');
//       return;
//     }
//     else if (/[A-Z]/.test(password)){
//       setRegisterError('Your password should have at least one uppercase character.');
//       return;
//     }
//     else if(/[a-z]/.test(password)){
//       setRegisterError('Your password should have at least one lowercase character.');
//       return;
//     }

//     setRegisterError('');
//     setSuccess('');

//     createUser(email, password)
//       .then(result => {
//         console.log(result.user);
//         setSuccess('User Created Successfully.');
//       })
//       .catch(error => {
//         console.error(error);
//         setRegisterError(error.message);
//       });
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div>
//       <Helmet>
//         <title>Residential | Register </title>
//       </Helmet>
//       <h2 className="text-3xl my-10 text-center">Please Register</h2>
//       <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Name</span>
//           </label>
//           <input type="text" name="name" placeholder="name" className="input input-bordered" required />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Photo URL</span>
//           </label>
//           <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Email</span>
//           </label>
//           <input type="email" name="email" placeholder="email" className="input input-bordered" required />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Password</span>
//           </label>
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               placeholder="password"
//               className="input input-bordered"
//               required
//             />
//             {showPassword ? (
//               <AiFillEyeInvisible
//                 className="absolute right-3 top-2/4 transform -translate-y-2/4 text-gray-500 cursor-pointer"
//                 onClick={togglePasswordVisibility}
//               />
//             ) : (
//               <AiFillEye
//                 className="absolute right-3 top-2/4 transform -translate-y-2/4 text-gray-500 cursor-pointer"
//                 onClick={togglePasswordVisibility}
//               />
//             )}
//           </div>
//           <br />
//           <label className="label">
//             <a href="#" className="label-text-alt link link-hover">
//               Forgot password?
//             </a>
//           </label>
//         </div>
//         <div className="form-control mt-6">
//           <button className="btn btn-primary">Register</button>
//         </div>
//       </form>
//       {registerError && <p className="text-red-700 font-bold text-center">{registerError}</p>}
//       {success && <p className="text-green-600 font-bold text-center">{success}</p>}
//       <p className="text-center mt-4">
//         Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link>
//       </p>
//       <Footer />
//     </div>
//   );
// };

// export default Register;