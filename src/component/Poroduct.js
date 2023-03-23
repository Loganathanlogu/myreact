import React, { useState, useEffect } from "react";
import Table from "./Table";
import "./Table.css";
import { useDispatch, useSelector } from "react-redux";
import * as userAction from "../redux/store/action/action";
import { API } from "aws-amplify";
import { useNavigate } from "react-router-dom";

function Product() {
  const [product, setProducts] = useState([
    {
      id: "",
      name: "",
      price: "",
    },
  ]);

  const dispatch = useDispatch();

  const products = useSelector((state) => {
    return state.products;
  });

  const addProducts = async () => {
    dispatch(userAction.addProducts(product));

    setProducts({
      id: "",
      name: "",
      price: "",
    });
  };
  const fetchdata = async () => {
    const data = await API.get("MyreactApi", "/api/get");
    setProducts(data.Items);
    console.log(data.Items);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const navigate = useNavigate();
  const addPro = () => {
    navigate("/add");
  };
  return (
    <div>
      <div className="button">
        <button onClick={addPro}>Add</button>
      </div>
      <Table props={product} setProduct={setProducts} products={products} />
    </div>
  );
}

export default Product;
