import React from "react";
import "./Table.css";
import { useDispatch } from "react-redux";
import * as userAction from "../redux/store/action/action";
import { API } from "aws-amplify";

function Table({ props, setProduct, products, postApi }) {
  const inputhandler = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...props,
      [name]: value,
    });
  };

  const dispatch = useDispatch();
  const removeProduct = async () => {
    const response = await API.del("MyreactApi", "/api/delete/:id");

    console.log("Deleted:", response);
  };
  return (
    <div className="App">
      <table className="table-h">
        <thead>
          <tr>
            <th>ID</th>
            <th>productName</th>
            <th>price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="App">
          {props.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={removeProduct}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
{
  /**<tr style={{ borderBottom: "1px solid black" }}>
            <td style={{ borderRight: "1px solid black" }}>
              <input
                name="id"
                placeholder="enter id"
                onChange={inputhandler}
                value={props.id || ""}
              />
            </td>
            <td style={{ borderRight: "1px solid black" }}>
              <input
                name="productName"
                placeholder="enter name"
                onChange={inputhandler}
                value={props.productName || ""}
              />
            </td>

            <td style={{ borderRight: "1px solid black" }}>
              <input
                name="price"
                placeholder="enter price"
                onChange={inputhandler}
                value={props.price || ""}
              />
            </td>
            <td>
              <button type="submit" onClick={postApi}>
                Add
              </button>
            </td>
          </tr> */
}
