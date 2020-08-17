import React from 'react';


export default ({movies ,handleClickFav , handleClickAll}) => (
    <div className="container-fluid" style= {{display:"flex" , flexDirection:"row" ,padding:'2%' , backgroundColor:'black'}}>
    
    
    <div className="card-body"  style={{padding:"0%" , width: '600px'}}>
    <img  src={movies.Poster} style={{width: '550px'}} />
    </div>

    <div className="jumbotron" style={{width: '2000px' , margin:"0%"}} >

  <h1 className="display-4">{movies.Title}</h1>
  <p className="lead"> {movies.Plot} </p>
  <hr className="my-4"/>
  
  <p> <b>AÑO: </b>{movies.Released}</p>
  <p> <b>TIPO: </b>{movies.Type}</p>
  <p> <b>GENERO: </b>{movies.Genre} </p>
  <p> <b>IDIOMA: </b>{movies.Language} </p>
  <p> <b>DURACION: </b>{movies.Runtime} </p>
  <p> <b>REPARTO: </b>{movies.Actors} </p>
  <p> <b>CLASIFICACION: </b>{movies.Rated}</p>
  <p> <b>RATING: </b>⭐{movies.imdbRating}</p>  

  <hr className="my-4"/>
  
  <a className="btn btn-outline-dark" href="https://cdn.memegenerator.es/imagenes/memes/full/19/8/19089860.jpg" role="button">Ver mas</a>   <button onClick={()=> {
    handleClickFav(movies.Title,movies.Poster)
    handleClickAll()
    }}  type="button" className="btn btn-info">Favorito</button> 
</div>
 
</div>

    
);


