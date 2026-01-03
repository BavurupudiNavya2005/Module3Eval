import { useNavigate } from "react-router-dom";

export default function
RestaurantCard({data, isAdmin}){
    const navigate = useNavigate();

    const deleteRestaurant = () => {
        if(!confirm("Are you sure you want to delete?")) return;
        let arr =
        JSON.parse(localStorage.getItem("evaData",));
        arr = arr.filter(r => r.restaurantID);
        localStorage.setItem("evaData",JSON.stringify(arr));
        window.location.reload();
    };

    return(
        <div style={{border: "1px solid black", margin: 10}}>
            <img src="{data.image" width={200}/>
            <h3>{data.restaurantName}</h3>
            <p>{data.address}</p>
            <p>{data.type}</p>
            <p>parking: {data.parkingLot ? "Yes":"No"}</p>
            {isAdmin && (
                <>
                <button onClick={()=> 
                    navigate(`/admin/update/${data.restaurantID}`)
                }>Update</button>
                <button onClick={deleteRestaurant}>Delete</button></>
                
            )}
        </div>
    );
}