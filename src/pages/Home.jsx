import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Heading from "../components/Heading";

const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            {/* Banner */}
            <Banner></Banner>
            {/* Heading */}
            <Heading title={'Browse Coffees by Category'} subtitle={'Choose your desired coffee category to browser through specific coffees that fit in your taste'} />
            {/* Categories tab section */}
            <Categories categories={categories} ></Categories>
            {/* Dynamic Nested Components */}
            <Outlet/>
        </div>
    );
};

export default Home;