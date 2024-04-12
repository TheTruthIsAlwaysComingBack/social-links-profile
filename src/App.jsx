import "./App.css";
import Card from "./components/Card";
import React, { useEffect, useState } from "react";

function App() {
  const [user, setuser] = useState([]);
  useEffect(() => {
    fetch("https://661037cd0640280f219c9897.mockapi.io/api/v2/Users")
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        setuser(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      {user.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </>
  );
}

export default App;
