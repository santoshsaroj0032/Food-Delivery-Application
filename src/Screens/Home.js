import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import Carousal from "../Components/Carousal";

const Home = () => {
  const [foodItem, setFoodItem] = useState([]);
  const [foodCategories, setfoodCategories] = useState([]);
  const [search, setSearch] = useState("");

  const loadfoodItems = async () => {
    try {
      let foodItems = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      });
      foodItems = await foodItems.json();
      setFoodItem(foodItems[0] || []);
      setfoodCategories(foodItems[1] || []);
      console.log(foodItems[0], foodItems[1]);
    } catch (error) {
      console.error("Error fetching foodItems:", error);
    }
  };

  // Call the loadfoodItems function when the component mounts
  useEffect(() => {
    loadfoodItems();
  }, []);

  return (
    <div>
      <div><Navbar /></div>
      <div><Carousal setSearch={setSearch} search={search}/></div>   {/* Pass setSearch as a prop */}
      <div className="container">
        {
          Array.isArray(foodCategories) && foodCategories.length > 0
          ? foodCategories.map((foodItems) => {
              return (
                <div className="row mb-3" key={foodItems._id}>
                  <div className="fs-3 m-3">{foodItems.CategoryName}</div>
                  <hr />
                  {
                    Array.isArray(foodItem) && foodItem.length > 0
                    ? foodItem
                        .filter((item) => 
                          item.CategoryName === foodItems.CategoryName && 
                          item.name.toLowerCase().includes(search.toLowerCase())
                        )
                        .map((filteredItem) => (
                          <div key={filteredItem._id} className="col-12 col-md-6 col-lg-3">
                            <Card foodItem={filteredItem} options={filteredItem.options[0]} />
                          </div>
                        ))
                    : <div>No such foodItems found</div>
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
