import { useState, useEffect } from "react";

const User = () => {
  const [user, setUser] = useState("");

  const getUser = () => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => setUser(data));
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <h1>Name</h1>
      <img src="" alt="" />
      <p>Email</p>
      <h5>Day of Birth</h5>
      <button className="btn btn-danger" onClick={getUser}>
        Get User
      </button>
    </div>
  );
};

export default User;
