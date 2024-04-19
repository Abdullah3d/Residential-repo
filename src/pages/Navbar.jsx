// import { useContext } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../Provider/AuthProvider";

// const Navbar = () => {
//     const { user,logOut } = useContext(AuthContext)

//     const handleSignOut = () =>{
//         logOut()
//         .then()
//         .catch()
//     }
//     const navLinks = <>
//         <li><NavLink to="/">Home</NavLink></li>
//         <li><NavLink to="/updateProfile">Update Profile</NavLink></li>
//         <li><NavLink to="/userProfile">User Profile</NavLink></li>
//         <li><NavLink to="/login">Login</NavLink></li>
//         <li><NavLink to="/contact">Contact</NavLink></li>
//     </>
//     return (
//         <div className="navbar bg-base-100">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                     </div>
//                     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//                         {navLinks}
//                     </ul>
//                 </div>
//                 <a className="btn btn-ghost text-3xl font-bold">Residential</a>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                     {navLinks}
//                 </ul>
//             </div>
//             <div className="navbar-end">
//                 <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//                     <div className="w-10 rounded-full">
//                         <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//                     </div>
//                 </label>
//                 {
//                     user ?
//                         <button onClick={handleSignOut} className="btn text-2xl font-semibold">Sign Out</button>
//                         :
//                         <Link to="/login">
//                             <button className="btn text-2xl font-semibold">Login</button>
//                         </Link>

//                 }

//             </div>
//         </div>
//     );
// };

// export default Navbar;

// import { useContext } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../Provider/AuthProvider";

// const Navbar = () => {
//     const { user, logOut } = useContext(AuthContext);

//     const handleSignOut = () => {
//         logOut()
//             .then()
//             .catch();
//     };

//     const navLinks = (
//         <>
//             <li><NavLink to="/">Home</NavLink></li>
//             <li><NavLink to="/updateProfile">Update Profile</NavLink></li>
//             {/* {user && <li><NavLink to="/userProfile">User Profile</NavLink></li>} */}
//             {!user && <li><NavLink to="/login">Login</NavLink></li>}
//             <li><NavLink to="/contact">Contact</NavLink></li>
//         </>
//     );

//     return (
//         <div className="navbar bg-base-100">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                     </div>
//                     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//                         {navLinks}
//                     </ul>
//                 </div>
//                 <a className="btn btn-ghost text-3xl font-bold">Residential</a>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                     {navLinks}
//                 </ul>
//             </div>
//             <div className="navbar-end">
//                 {user ? (
//                     <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//                         <div className="w-10 rounded-full">
//                             <img alt="User Avatar" src={user.avatar} />
//                         </div>
//                         <span className="tooltip">{user.name}</span>
//                     </label>
//                 ) : (
//                     <Link to="/login">
//                         <button className="btn text-2xl font-semibold">Login</button>
//                     </Link>
//                 )}
//                 {user ? (
//                     <button onClick={handleSignOut} className="btn text-2xl font-semibold">Sign Out</button>
//                 ) : null}
//             </div>
//         </div>
//     );
// };

// export default Navbar;

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(result =>{
                console.log(result.user);
            })
            .catch(error =>{
                console.error(error);
            });
    };

    const navLinks = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/updateProfile">Update Profile</NavLink>
            </li>
            {!user && <li><NavLink to="/login">Login</NavLink></li>}
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-bold">Residential</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="" src={user.avatar} />
                        </div>
                        <span className="tooltip">{user.name}</span>
                    </label>
                ) : (
                    <Link to="/login">
                        <button className="btn text-2xl font-semibold">Login</button>
                    </Link>
                )}
                {user && (
                    <button onClick={handleSignOut} className="btn text-2xl font-semibold">Sign Out</button>
                )}
            </div>
        </div>
    );
};

export default Navbar;



