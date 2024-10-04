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
     
        {/* Pass setSearch as a prop */}
      {/* <div><Carousal setSearch={setSearch} search={search} /></div>  */}

      <div> 
        
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel"   style={{objectFit:"contain  !important"}}>
        <div className="carousel-indicators" id="carousal">
          <div className="carousal-caption" style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center">
              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  value={search} onChange={(e)={setSearch(e.target.value) }}/> */}
              <input
  className="form-control me-2"
  type="search"
  placeholder="Search"
  aria-label="Search"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>

              {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
            </div>
          </div>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 carousel-image" alt="Burger" />
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 carousel-image" alt="Second" />
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 carousel-image" alt="Third " />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        </div>
        
        </div> 



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
                            <Card
                              foodName={filteredItem.name}
                              options={filteredItem.options[0]}
                              imgSrc={filteredItem.img} />
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
