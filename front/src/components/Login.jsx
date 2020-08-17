import React from "react";

export default ({handleSubmit ,handleEmail,handlePassword  }) => (
  <div className="container">
   
      <div className="col-md-12 min-vh-100 d-flex flex-column justify-content-center">
     
          <div className="col-lg-6 col-md-8 mx-auto">
            <div className="card rounded shadow shadow-sm">
              <div className="card-header">
                <h3 className="mb-0">Cuenta</h3>
              </div>
              <div className="card-body">
                <form
                  className="form"
                  onSubmit={handleSubmit}
                >
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control form-control-lg rounded-0"
                      name="uname1"
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

                  <button
                    type="submit"
                    className="btn btn-warning btn-lg float-right"
                    
                  >
                    Entrar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  
);
