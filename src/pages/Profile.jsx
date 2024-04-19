import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Provider/AuthProvider";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
    const { user, createUser, updateUserProfile } = useContext(AuthContext);
    const handleUpdate = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        console.log(name, photo);

        createUser(name, photo)
            .then(result => {
                console.log(result.user)
                updateUserProfile(name, photo)
                    .then(() => {
                        navigate(form);
                    })


            })
            .catch(error => {
                console.error(error)
            })

    }
    return (
        <div>
            <Helmet>
                <title>Task-9 | profile </title>
            </Helmet>
            <form onSubmit={handleUpdate} className=" mb-10md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    {user?.name || <input type="text" name="name" placeholder="name" className="input input-bordered" required />}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URl</span>
                    </label>
                    {
                        user?.photo || <input type="text" name="Photo" placeholder="Photo URL" className="input input-bordered" required />
                    }
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <Footer></Footer>
        </div>
    );
};

export default Profile;