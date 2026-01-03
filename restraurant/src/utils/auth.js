export const loginUser = (email,password) =>{
    if (email === "admin@email.com" && password === "admin1234"){
        localStorage.setItem("role","admin");
        return "admin";
    }
    if (email === "customer@gmail.com" && password === "customer1234"){
        localStorage.setItem("role","customer");
        return "customer";
    }
    return null;
};

export const getRole = () =>
    localStorage.getItem("role");
export const logout = () =>
    localStorage.clear();