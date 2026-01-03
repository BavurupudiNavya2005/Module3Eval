import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function
AddRestaurant(){
    const navigate = useNavigate();
    const [form, setForm] = useState({
        restaurantName: "",
        address: "",
        type: "Indian",
        parkingLot: false,
        Image: "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
    });
    const handleAdd = () => {
        if (!form.restaurantName || !form.address){
            alert("Form cannot be empty");
            return;
        }
        if(!confirm("Are you sure you want to add?"))
        return;
    const data = 
    JSON.parse(localStorage.getItem("evaData")) || [];
    data.push({...form,restaurantID:
        Date.now()
    });
    localStorage.setItem("evaData",JSON.stringify(data));
    navigate("/admin/dashboard");
    };
    return(
        <div>
            <h3>Add Restaurant</h3>
            <input placeholder="Name" onChange={e => setForm({...form,
                restaurantName:e.target.value
            })} />
            <input placeholder="Address" onChange={e => setForm({...form,
                address:e.target.value
            })} />
            <select onChange={e => setForm({...form,type:e.target.value})}>
            <option>Indian</option>
            <option>Chinese</option>
            <option>Italian</option>
            <option>Thai</option>
            </select>
            <label>
                parking
                <input type="checkbox" onChange={e => setForm({..form,
                    parkingLot:e.target.checked
                })} />
            </label>

            <button onClick={handleAdd}>Add</button>
        </div>
    );
}