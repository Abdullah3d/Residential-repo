import { Link, useLoaderData } from "react-router-dom";
import 'animate.css';


const ShowEstate = ({ estates }) => {
    const {id, estate_title, estate_img, segment_name, price, area, location } = estates;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img className="max-h-64 animate__animated animate__bounce" src={estate_img} alt="Shoes" /></figure>
            <div className="card-body animate__animated animate__fadeIn">
                <h2 className="card-title text-3xl">{segment_name}</h2>
                <p className="text-3xl font-bold">{estate_title}</p>
                <div className="flex gap-5 text-xl font-bold">
                    <p>{price}</p>
                    <h2>{area}</h2>
                    <h2>{location}</h2>
                </div>
                <div className="card-actions justify-center mt-10 animate__animated animate__fadeIn">
                    <Link to={`/view/${id}`}><button className="btn btn-accent">View Property</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ShowEstate;