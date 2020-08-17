import React from 'react'
 export default({handleSubmit,handleChange,value,error})=>{

return (

<div style={{backgroundColor:'black'}}>
<h1 className=' col-md-4 offset-md-5 p-4'style={{position:"relative" ,right:"50px"}}><span className="badge badge-warning">BUSCAR PELICULA</span></h1>

<div className='container' > 
    <form onSubmit={handleSubmit } className="form-inline my-6 my-lg-4" style={{position:"relative" ,left:"70px"}} >
      <input onChange={handleChange} autoFocus style={{width:'50rem'}} value={value} className="form-control mr-sm-2" type="text" placeholder="Ingresar Pelicula" aria-label="Search"/>
      <button className="btn btn-outline-warning" type="submit">Buscar</button>
    </form> 
    <p>{error? (<div className="alert alert-danger" role="alert" style={{position:"relative" ,left:"70px", width:'50rem'}} > {error} </div>) : ""}</p>
     </div>



</div>
    
)


 }