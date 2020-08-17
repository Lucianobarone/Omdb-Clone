import React from "react";



export default ({handleName,handleEmail,handlePassword ,handleSubmit, error}) =>{



return (
  <div className="container">
    <div className="row">
      <div className="col-md-12 min-vh-100 d-flex flex-column justify-content-center">
        <div className="row">
          <div className="col-lg-6 col-md-8 mx-auto">
          <h4>{error? (<div className="alert alert-danger" role="alert" style={{position:"relative" ,left:"15px", width:'500px'}} > {error} </div>) : ""}</h4>
            <div className="card rounded shadow shadow-sm">
            
              <div className="card-header">
                <h3 className="mb-0">Nueva Cuenta</h3>
              </div>
              <div className="card-body">
                <form className="form" onSubmit={handleSubmit} >
                     <div className="form-group">
                    <label>Nombre</label>
                    <input
                      type="text"
                      className="form-control form-control-lg rounded-0"
                      name="name"
                      placeholder="Ingrese su Nombre"
                      onChange={handleName}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control form-control-lg rounded-0"
                      name="email"
                      placeholder="Ingrese su Email"
                      onChange={handleEmail}
                    />
                  </div>
                  <div className="form-group">
                    <label>Contraseña</label>
                    <input
                      type="password"
                      className="form-control form-control-lg rounded-0"
                      placeholder="Ingrese su Contraseña"
                      onChange={handlePassword}
                      
                    />
                  </div>

                  <button type="submit" className="btn btn-warning btn-lg float-right" >
                    Registrarse
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);





} 