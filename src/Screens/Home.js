import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import Carousal from "../Components/Carousal";

const Home = () => {
  const [foodItem, setFoodItem] = useState([]);
  const [foodCat, setFoodCat] = useState([]);
  const [search, setSearch] = useState("");

  const loadData = async () => {
    try {
      let data = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      });
      data = await data.json();
      setFoodItem(data[0] || []);
      setFoodCat(data[1] || []);
      console.log(data[0], data[1]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Call the loadData function when the component mounts
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div><Navbar /></div>
      <div><Carousal setSearch={setSearch} search={search}/></div>   {/* Pass setSearch as a prop */}
      <div className="container">
        {
          Array.isArray(foodCat) && foodCat.length > 0
          ? foodCat.map((data) => {
              return (
                <div className="row mb-3" key={data._id}>
                  <div className="fs-3 m-3">{data.CategoryName}</div>
                  <hr />
                  {
                    Array.isArray(foodItem) && foodItem.length > 0
                    ? foodItem
                        .filter((item) => 
                          item.CategoryName === data.CategoryName && 
                          item.name.toLowerCase().includes(search.toLowerCase())
                        )
                        .map((filteredItem) => (
                          <div key={filteredItem._id} className="col-12 col-md-6 col-lg-3">
                            <Card foodItem={filteredItem} options={filteredItem.options[0]} />
                          </div>
                        ))
                    : <div>No such data found</div>
                  }
                </div>
              )
          })
          : <div>No categories found</div>
        }
      </div>
      <div><Footer /></div>
    </div>
  );
};

export default Home;
