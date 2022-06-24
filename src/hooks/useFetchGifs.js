import { useEffect, useState } from "react"
import { searchGif } from "../helpers/getGifs"

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() =>{
        const newImages = await searchGif(category);
        setImages(newImages)
        setIsLoading( false )
    }

    useEffect( () => {
        getImages();
    }, [])

    return {
        images: images,
        isLoading
    }
}