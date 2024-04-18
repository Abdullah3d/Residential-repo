import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-4xl font-medium  text-center p-24">
            <h2>Opss!!!</h2>
            <h3>404! page not Found </h3>
            <Link className="text-blue-600" to="/">Go back to home</Link>
        </div>
    );
};

export default ErrorPage;