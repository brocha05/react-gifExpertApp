import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category)
    
    return (
        <>
            <h3>Results from { category }</h3>
            {isLoading ? <h3>Cargando...</h3> : null}
            <div className="card-grid">
                { images.map( (image) => {
                    return (
                    <GifItem 
                    key={image.id}
                    title={image.title}
                    url={image.url}
                    />
                    )
                   
                })}
                
            </div>
                
      
        </>
    )
}