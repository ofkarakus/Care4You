import { useState, useContext } from "react";
import { PeopleContext } from "../App";

const Component1 = () => {
  const { addToTable } = useContext(PeopleContext);

  const [personInfo, setPersonInfo] = useState({
    name: "",
    surname: "",
    birth: "",
  });

  const handleChange = (prop) => (e) => {
    setPersonInfo({ ...personInfo, [prop]: e.target.value });
  };

  console.log(personInfo);

  return (
    <form>
      <label htmlFor="name">First Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={personInfo.name}
        onChange={handleChange("name")}
      />
      <br />
      <label htmlFor="surname">Surname</label>
      <input
        type="text"
        name="surname"
        id="surname"
        value={personInfo.surname}
        onChange={handleChange("surname")}
      />
      <br />
      <label htmlFor="birth">Date Of Birth</label>
      <input
        type="date"
        name="birth"
        id="birth"
        value={personInfo.birth}
        onChange={handleChange("birth")}
      />
      <br />
      <button
        type="button"
        onClick={() => {
          addToTable(personInfo);
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default Component1;
