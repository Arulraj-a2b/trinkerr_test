import "./App.css";
import axios from "axios";
import { userApi } from "./apiRoutes";
import { useEffect } from "react";
import Search from "./module/Search/Search";

function App() {
  axios.defaults.baseURL = "http://3.109.141.224:5000/";
  useEffect(() => {
    axios.get(userApi).then((res) => {
      if (res.data && res.data.token) {
        localStorage.setItem("token", res.data.token);
      }
    });
  }, []);

  const getTocken: any = localStorage.getItem("token");
  axios.defaults.headers.common["user-access-token"] = getTocken;

  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;
