
// import { useLoaderData, useParams } from "react-router-dom";

// const ViewProperty = () => {
//     const views = useLoaderData();
//     const { id } = useParams();
//     const idInt = parseInt(id);
//     const view = views.find(view => view.id === idInt);
//     console.log(view);

//     if (!view) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <h2 className="text-center text-4xl font-bold p-5">View Property of: {id}</h2>
//             <div className="grid gap-4 md:grid-cols-3 p-10">
//                 <img className="max-h-96" src={view.estate_img} alt="" />
//                 <div className="border p-5 text-2xl  text-blue-600 font-bold md:col-span-1">
//                     <h2 className="text-3xl font-bold p-5">{view.segment_name}</h2>
//                     <p>{view.estate_title}</p>
//                     <h1>{view.description}</h1>
//                     <p>{view.price}</p>
//                     <p>{view.status}</p>
//                     <p>{view.area}</p>
//                     <p>{view.Location}</p>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ViewProperty;


import { useLoaderData, useParams } from "react-router-dom";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";
import 'animate.css';


const ViewProperty = () => {
    const views = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const view = views.find(view => view.id === idInt);
    console.log(view);

    if (!view) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Helmet>
                <title>Residential | ViewProperty </title>
            </Helmet>
            <h2 className="text-center text-4xl font-bold p-5">View Property of: {id}</h2>
            <div className="grid gap-4 md:grid-cols-3 p-10 animate__animated animate__fadeIn">
                <img className="max-h-96" src={view.estate_img} alt="" />
                <div className="border p-5 text-2xl text-blue-600 font-bold md:col-span-1">
                    <h2 className="text-3xl font-bold p-5">{view.segment_name}</h2>
                    <p>{view.estate_title}</p>
                    <h1>{view.description}</h1>
                    <p>{view.price}</p>
                    <p>{view.status}</p>
                    <p>{view.area}</p>
                    <p>{view.Location}</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ViewProperty;