import { useContext } from "react";
import { PeopleContext } from "../App";

const Component2 = () => {
  const { people } = useContext(PeopleContext);
  return (
    <table style={{ width: "25%" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person) => (
          <tr>
            <td>{person.name}</td>
            <td>{person.surname}</td>
            <td>{person.birth}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Component2;
