import { useRef } from "react"

function Search({setSearchValue}){
    const searchRef= useRef()
    const handleSubmit= (e)=>{
        e.preventDefault()
        setSearchValue(searchRef.current.value)
    }
    return (
         <form onSubmit={(e)=>handleSubmit(e)}>
           
            <input 
               placeholder="search a movie by name .."
               type="text"
               ref={searchRef}

            />
             <input type="submit" value="search"  />

         </form>
    )

}
export default Search