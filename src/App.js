import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://api.github.com/repos/HacOkars/Hacktoberfest-2021/contributors");
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setAllUsers(userData);
      setUsers(userData);
    })();
  }, []);

  const filterCards = event => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(user => (`${user.login}`.toLowerCase().includes(value)));
    setUsers(filteredUsers);
  }

  return (
    <div className="App">
      <a href="https://hacktoberfest.digitalocean.com/"><img src="https://hacktoberfest.digitalocean.com/_nuxt/img/logo-hacktoberfest-full.f42e3b1.svg" id="hacktober"></img></a>
      <h1>Contributors Cards :</h1>
      <input className="search-box" onInput={filterCards} placeholder="Search..." />
      <div className="cards-container">

        {users.map((user, index) => (
          <Card key={index} userData={user} />
        ))}
      </div>
      <img src="https://github.githubassets.com/images/spinners/octocat-spinner-64.gif"></img>
      <footer>
        &copy; Designed by: <a href="http://riturajgupta.rf.gd/">&nbsp; Rituraj Gupta</a>
      </footer>
    </div>
  );
}

export default App;
