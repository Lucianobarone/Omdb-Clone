import React from "react";

export default ({favoritos, handleDestroy}) => {
  console.log(favoritos)
 
  
  return (
    <div className="container" >
      <div  style={{padding:'40px', width:"420px"}}>
     
      
      <h1 className="badge-warning" style={{borderRadius:'5px'}}> &nbsp; &#10148; &nbsp;Tus Favoritos</h1> 
      </div>
       <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {favoritos.map(fav =>(
          <div 
          className="card"
          style={{ width: "18rem", margin: "20px", backgroundColor: "#202020" ,heigh: '900px' }}
          key={fav.id}
          
          
          >

            <img
              src={fav.Poster}
              className="card-img-top"
              alt="..."
              style={{ height: "300px" }}
            />
            <div style={{height:'70px'}}>
            <h5 style={{ textAlign: "center", color: "white" , margin:'20px', alignItems:'center'}} >
              
                  <h6 className=" text-uppercase">{fav.Title}</h6>
            </h5>

            </div>
           
            
            <button onClick={()=> handleDestroy(fav.id)} type="button" className="btn btn-outline-danger">Eliminar</button>
             
            
            
         
           
          
        </div>



      ))}
    </div>
    </div>
  );
  
};


