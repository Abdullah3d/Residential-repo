import { Helmet } from "react-helmet-async";
import Estate from "../estate/Estate";
import Banner from "./Banner";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Task-9 | Home </title>
            </Helmet>
            <Banner></Banner>
            <Estate></Estate>
            <Footer></Footer>
        </div>
    );
};

export default Home;
