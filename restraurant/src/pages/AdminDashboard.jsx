import {Link} from "react-router-dom"
import RestaurantCard from "../components/RestaurantCard";

export default function
AdminDAshboard(){
    const restaurants = JSON.parse(localStorage,getItem("evaData")) || [];
    return (
        <div>
            <h2>Admin Dashboard</h2>
            <Link to="/admin/add">Add Restaurant</Link>
            {restaurants.map(r => (
                <RestaurantCard
                key = { r.restaurantID} data = {r}
                isAdmin />
            ))}
        </div>
    );
}