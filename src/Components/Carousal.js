// import React from "react";

// const Carousal = ({ setSearch, search }) => {
//   return (
//     <div>


//       <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
//         <div className="carousel-indicators" id="carousal">

//           <div className="carousal-caption" style={{ zIndex: "10" }}>


//             <form className="d-flex">
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//               <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
//             </form>
//           </div>



//           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//           <button
//             type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//         </div>
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{ filter: "brigghtness(30%)" }} alt="Burger" />
//           </div>
//           <div className="carousel-item">
//             <img src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{ filter: "brigghtness(30%)" }} alt="Second" />
//           </div>
//           <div className="carousel-item">
//             <img src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{ filter: "brigghtness(30%)" }} alt="Third " />
//           </div>
//         </div>
//         <button
//           className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousal;

// import React from "react";

// const Carousal = ({ setSearch, search }) => {
//   return (
//     <div>
//       <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
//         <div className="carousel-indicators" id="carousal">
//           <div className="carousal-caption" style={{ zIndex: "10" }}>
//             <form className="d-flex">
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//               <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
//             </form>
//           </div>
//           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//         </div>
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 carousel-image" alt="Burger" />
//           </div>
//           <div className="carousel-item">
//             <img src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 carousel-image" alt="Second" />
//           </div>
//           <div className="carousel-item">
//             <img src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 carousel-image" alt="Third " />
//           </div>
//         </div>
//         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousal;






import React from "react";

const Carousal = ({ setSearch, search }) => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel"   style={{objectFit:"contain  !important"}}>
        <div className="carousel-indicators" id="carousal">
          <div className="carousal-caption" style={{ zIndex: "10" }}>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
            </form>
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
  );
};

export default Carousal;
