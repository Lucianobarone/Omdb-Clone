import React from 'react';
import { Link } from 'react-router-dom';



export default({handleClick, estado, nombre, handleClickFav}) => {
return (
  
  <div >
 <nav className="navbar navbar-expand-lg navbar navbar-dark bg-black" style={{height:"60px" , backgroundColor: "#121212" }} >
 <Link to="/" className="navbar-brand" > <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/640px-IMDB_Logo_2016.svg.png" alt="OMDB"  width="60" height="30" style={{borderRadius:"5px" , marginLeft:'20px'}}/></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
          
 {!estado ? (<ul className="navbar-nav mr-auto">

<li className="nav-item">
  <Link className="nav-link" to="/login">Ingresar</Link>
</li>
<li className="nav-item" ><p className="nav-item" style={{ position:'relative' , top:'6px' , color:'grey' }}>|</p></li>
  


<li className="nav-item">
  <Link className="nav-link" to="/register">Registrarse</Link>
</li>

</ul>) : null  } 

      
      {estado? (<li className="nav-item" >
        <Link className="nav-link" to="/search">Buscador</Link>
      </li>) : null }

     

    </ul>
  </div>
  <ul className="navbar-nav mr-auto" >

  {estado? (  <li className="nav-item dropdown" style={{marginRight:'15px'}}>
        <a onClick={handleClickFav} className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Cuenta
        </a>
        <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-left" aria-labelledby="navbarDropdown">
        <p className="dropdown-item">Hola {nombre}!</p>
        <div className="dropdown-divider"></div>
        <Link className="dropdown-item" to="/favoritos" >Favoritos</Link>
    
          <a className="dropdown-item" href="#">Configuracion</a>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" to="#" onClick={handleClick}  >Salir</Link>
        </div>
      </li>) : null }

    
    
      <li className="nav-item" style={{marginRight:'30px'}}>
    <Link className="nav-link" to="#">Ayuda</Link>
      </li>
      
  </ul>
      
  
</nav>
  </div>
)




}

























/* import React from 'react';
import { Link } from 'react-router-dom';

export default ({ playlists }) => (
  <div className="col-xs-2">
      <section className='sidebar'>
        <img src="/juke.svg" className="logo" />
        <section>
          <h4 className="menu-item active">
            <Link to="/albums">ALBUMS</Link>
          </h4>
        </section>
        <section>
          <h4 className="menu-item active">
            <Link to="/artists">ARTISTS</Link>
          </h4>
        </section>
        <section>
          <h4 className="menu-item active">
            <Link to="/lyrics">LYRICS</Link>
          </h4>
        </section>
        <section>
          <h4 className="menu-item active">
            <Link to="/stations">STATIONS</Link>
          </h4>
        </section>
        <hr />
        <section>
          <h4 className="text-muted">PLAYLISTS</h4>
          <ul className="list-unstyled">
            {
              playlists.map(playlist => {
                return (
                  <li key={playlist.id} className="playlist-item menu-item">
                    <Link to={`/playlists/${playlist.id}`}>{playlist.name}</Link>
                  </li>
                );
              })
            }
          </ul>
          <h4>
            <Link className="btn btn-primary btn-block" to="/playlists/new">
              <span className="glyphicon glyphicon-plus"></span> PLAYLIST
            </Link>
          </h4>
        </section>
      </section>
    </div>
);
 */