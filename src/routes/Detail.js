import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function Detail() {
    // const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState([]);

    const {id} = useParams();
    const getMovie = async () =>{
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const data = await response.json();
        setDetail(data.data.movie);
    }
    console.log(detail);
    useEffect(()=>{
        getMovie();
    },[])
    return (
        <div>
            <h1>Detail</h1>
            <div>{detail.title}</div>
        </div>
    );
}
export default Detail;