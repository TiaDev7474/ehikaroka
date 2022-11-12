import React from "react";
import styled from "styled-components";
const MovieCard= styled.div`
    display: flex;
    flex-direction: column ;
    padding: 18px;
    align-items:center;
    justify-content:space-around;
    width:300px;
    height:300px;
    margin:1em;
    transition:200ms;
    border-radius:30px;
    &:hover{
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
    
`
const MovieImg = styled.img`
     height:150px;
     width:150px;
`
const MovieTitle= styled.h1`
    font-size:16px;


`
function Movie({title,year,poster,id}){
   return(
       <MovieCard key={id}>
            <MovieImg src={poster} alt={title}/>
            <MovieTitle>{title}</MovieTitle>
            <span>{year}</span>
       </MovieCard>
      
   )
}
export default Movie