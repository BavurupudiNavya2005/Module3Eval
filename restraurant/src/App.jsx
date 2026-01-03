import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDAshboard from "./pages/AdminDashboard";
import customerDashboard from "./pages/CustomerDashboard";
import AddRestaurant from "./pages/AddRestaurant";
import ProctectedRoute from "./components/ProtectedRoute";

export default function App(){
  return(
    <Routes>
      <Route path="/" element = {<Login/>}></Route>
      <Route path = "/admin/dashBoard" element ={
      <ProctectedRoute role="admin">
        <AdminDAshboard/>
      </ProctectedRoute>  
      }></Route>
      <Route path = "/admin/add" element ={
      <ProctectedRoute role="admin">
        <AddRestaurant/>
      </ProctectedRoute>  
      }></Route>
      <Route path = "/customers/dashBoard" element ={
      <ProctectedRoute role="customer">
        <customerDashboard/>
      </ProctectedRoute>  
      }></Route>
      </Routes>

  );
}