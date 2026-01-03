import RestaurantCard from "../components/RestaurantCard";

export default function customerDashboard(){
    const restaurants = JSON.parse(localStorage.getItem("evaData")) || [];
    
    return(
        <div>
            <h2>Customer Dashboard</h2>
            {restaurants.map(r => (
                <RestaurantCard
                key = {r.restaurantID} data = {r}/>
            ))}
        </div>
    );
}