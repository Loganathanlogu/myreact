import React, { useState, useEffect } from "react";
import "./Table1.css";
import { API } from "aws-amplify";
import { useNavigate } from "react-router-dom";

function Table1() {
  const [data, setData] = useState([
    {
      id: "",
      name: "",
      price: "",
    },
  ]);

  // Define functions to handle API requests

  const onHandler = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const addRow = async () => {
    try {
      const response = await API.post("MyreactApi", "/api/add", { body: data });
      console.log(response);
      setData({
        id: "",
        name: "",
        price: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  const Goback = () => {
    navigate("/");
  };

  return (
    <div>
      <table>
        <tbody className="table-body ">
          <tr style={{ borderBottom: "1px solid black" }}>
            <td style={{ borderRight: "1px solid black" }}>
              <input
                name="id"
                placeholder="enter id"
                onChange={onHandler}
                value={data.id}
              />
            </td>
            <td style={{ borderRight: "1px solid black" }}>
              <input
                name="name"
                placeholder="enter name"
                onChange={onHandler}
                value={data.name}
              />
            </td>

            <td style={{ borderRight: "1px solid black" }}>
              <input
                name="price"
                placeholder="enter price"
                onChange={onHandler}
                value={data.price}
              />
            </td>
            <td>
              <button type="submit" onClick={addRow}>
                Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="back-button">
        <button onClick={Goback}>Back</button>
      </div>
    </div>
  );
}

export default Table1;
{
  /*
   <form onSubmit={addRow}>
        <label className="full-width ">
          ID:{" "}
          <input type="text" name="id" value={data.id} onChange={onHandler} />
        </label>

        <label className="full-width ">Name:</label>
        <input type="text" name="name" value={data.name} onChange={onHandler} />

        <label className="full-width ">Price:</label>
        <input
          type="text"
          name="price"
          value={data.price}
          onChange={onHandler}
        />

        <button type="submit">Submit</button>
      </form>
      <div>
        <button onClick={Goback}>Back</button>
      </div>
  */
}
