import React from 'react';
import {useParams} from "react-router-dom";


function GoodsDetail(){
    const params = useParams()
    console.log('id',params)
    return(
        <div>
            GoodsDetail
        </div>
    )
}

export default GoodsDetail;
