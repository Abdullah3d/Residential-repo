import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Provider/AuthProvider";
import Footer from "./Footer";
import { getAuth, updateProfile } from "firebase/auth";

const Profile = () => {
    const { user, createUser, updateUserProfile } = useContext(AuthContext);
    const [uName, setuName] = useState(user?.displayName)
    const [uPhoto, setuPhoto] = useState(user?.photoURL)


    const handleUpdate = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('Photo');

        const auth = getAuth();
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        }).then(() => {
            console.log("success")
        }).catch((error) => {
            console.log(error)
        });

    }

    return (
        <div>
            <Helmet>
                <title>Residential | profile </title>
            </Helmet>
            <form onSubmit={handleUpdate} className=" mb-10md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    {user?.name || <input type="text" onChange={e => {
                        const spouseName = e.target.value
                        setuName(spouseName)
                    }} value={uName} name="name" placeholder="name" className="input input-bordered" required />}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URl</span>
                    </label>
                    {
                        user?.photo || <input type="text" onChange={e => {
                            setuPhoto(e.target.value)
                        }} value={uPhoto} name="Photo" placeholder="Photo URL" className="input input-bordered" required />
                    }
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Save</button>
                </div>
            </form>
            <Footer></Footer>
        </div>
    );
};

export default Profile;