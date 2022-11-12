import React ,{useEffect , useState} from "react";
import styled from "styled-components";
import Movie from "./Movie";



const CardContainer = styled.div `
      display:flex;
      flex-direction:row;
      flex-wrap:wrap;
      justify-content:center;
      width:100%;
      margin:0 auto;
    


 `
function MoviesList({searchValue}){
    const [moviesList,setMoviesList]= useState([])
  

    useEffect (()=>{
        async function FetchMovieData(){
           try{
              const response = await fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=b3fe5d9b`)
              const resp= await response.json()
              setMoviesList (resp.Search)
              console.log(searchValue)
           }
           catch(err){
              console.log(err)
           }

        }
        FetchMovieData()
    },[searchValue])
      return (

        <>
          
            { moviesList &&
                <CardContainer>
                {console.log(moviesList)}
                {moviesList.map( movie =>(
                    <Movie 
                    title={movie.Title}
                    year={movie.Year}
                    poster={movie.Poster}
                    id={movie.imdbID}
                
                    />
                ))}
                    
                
                
            </CardContainer>
            
            }
        </>
         
       
      
        )
}
export default MoviesList