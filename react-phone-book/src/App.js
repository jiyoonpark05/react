import "./App.css";
import PhoneBookForm from "./components/PhoneBookForm";
import NumberTable from "./components/NumberTable";
import { useState } from "react";

const App = (props) => {
  const dataList = [];
  const [userData, setUserData] = useState(dataList);

  const addUserData = (data) => {
    data.id = userData.length + 1;
    setUserData([...userData, data]);
  };

  return (
    <div className="App">
      <main>
        <PhoneBookForm addUserData={addUserData} />
        <hr />
        <NumberTable userData={userData} />
      </main>
    </div>
  );
};

export default App;
