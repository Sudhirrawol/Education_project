import { useState, useEffect } from "react";
import axios from "axios";

const Admin = () => {
  let [user, setUser] = useState(null);
  let [loading, setLoading] = useState(false);
  let token = window.localStorage.getItem("token");
  useEffect(() => {
    try {
      let datafetch = async () => {
        let { data } = await axios.get("http://localhost:5002/api/v1/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(data.data);
        console.log(user);
        setUser(data.data);
        console.log(user);
      };
      datafetch();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      {user === null ? (
        "loading..."
      ) : (
        <>
          <div>
            <h1>welcome {user.name}</h1>
            <h2>email{user.email}</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Admin;
