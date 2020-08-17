import React from "react";
import { Link } from "react-router-dom";

export default ({ movies }) => {

return (
 
  <div className="container" >
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        margin: "10px",
      }}
    >
      {movies && movies.map(movie => (
        <div
          className="card"
          style={{ width: "18rem", margin: "20px", backgroundColor: "#e9ecef" }}
          key={movie.imdbID}
        >
          <div className="thumbnail" >
            <img
              src={movie.Poster}
              className="card-img-top"
              alt="..."
              style={{ height: "300px" }}
            />
            <div style={{height:'100px'}}> 
            <h5 style={{ textAlign: "center", color: "black" ,padding:'20px'}}>
            <h6 className=" text-uppercase">{movie.Title}</h6>
            </h5>

            
            </div>
            <hr className="solid"></hr>
            <div style={{ textAlign: "center" , margin:'15px'}}>
            <Link to={`/movies/${movie.imdbID}`} > <button type="button" className="btn btn-outline-dark">Mas Info</button>     </Link>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  </div>
);
      }