import { useState, useEffect } from "react";
import Menu from "./components/Menu";
import Login from "./components/Login";
import Predio from "./components/Predios";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [local, setLocal] = useState(localStorage.getItem("sesion" || ""));
  const [predios, setPredios] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("sesion")) {
      const search = async () => {
        const options = {
          method: "GET",
          mode: "cors",

          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: `Token ${localStorage.getItem("sesion")}`,
          },
        };
        const response = await fetch(
          "https://suyoapi.herokuapp.com/propertys/",
          options
        );
        if (response.status === 200) {
          const text = await response.text();

          const predio = JSON.parse(text);
          setPredios(predio.results);
        }
      };

      setLocal(localStorage.getItem("sesion"));
      setIsLoggedIn(true);
      search();
    }
  }, []);

  const allPredios = async () => {
    const options = {
      method: "GET",
      mode: "cors",

      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Token ${localStorage.getItem("sesion")}`,
      },
    };
    const response = await fetch(
      "https://suyoapi.herokuapp.com/propertys/",
      options
    );
    if (response.status === 200) {
      const text = await response.text();

      const predio = JSON.parse(text);
      setPredios(predio.results);
    }
  };

  const handleSearch = (e) => {
    if (e.target.value.length === 0) {
      allPredios();
    }
    const result = predios.filter((ele) => ele.owner === e.target.value);
    if (result.length > 0) {
      setPredios(result);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("sesion");
    setLocal("");
    setIsLoggedIn(false);
  };

  const handlelogin = async () => {
    const options = {
      method: "POST",
      mode: "cors",

      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ email: username, password }),
    };
    const response = await fetch(
      "https://suyoapi.herokuapp.com/users/login/",
      options
    );
    if (response.status === 201) {
      const text = await response.text();

      const user = JSON.parse(text);
      localStorage.setItem("sesion", user.access_token);
      setLocal(user.access_token);
      setIsLoggedIn(true);
    }
  };
  return (
    <div>
      <Menu
        handleSearch={handleSearch}
        user={local}
        logout={handleLogout}></Menu>
      {isLoggedIn ? (
        <>
          <Predio predios={predios} setPredio={setPredios}></Predio>
        </>
      ) : (
        <Login
          username={username}
          setusername={setUsername}
          password={password}
          setpassword={setPassword}
          HandleLogin={handlelogin}></Login>
      )}
    </div>
  );
}

export default App;
