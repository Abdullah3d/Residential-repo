import { Helmet } from "react-helmet-async";

const Contact = () => {
    return (
        <div className="text-center text-4xl py-40 font-bold">
            <Helmet>
                <title>Task-9 | contact</title>
            </Helmet>
            <h2>Contact with us</h2>
            <h3>We are one call away from you </h3>
            <h2 className="text-blue-300 mt-5 shadow-sm">Your Hotline : +974 66 55 777</h2>
        </div>
    );
};

export default Contact;