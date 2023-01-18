import React, {useEffect, useState} from "react";
import {GoodsListApi} from "../request/goods";
import {message} from "antd";
import GoodCard from "../components/GoodsCard";

function GoodsList(){
    let [goodsList,setGoodsList]=useState([])

    const getList=()=> {
        GoodsListApi().then(res=>{
            console.log(res)
            if(res.status === 200){
                goodsList = res.data.item
                setGoodsList(goodsList)
            }else{
                message.error(res.msg).then()
            }
        })
    }

    useEffect(()=>{
        getList()
    },[])

    return(
        <div className='goodList'>
            <GoodCard goodsList={goodsList}/>
        </div>
    )

}

export default GoodsList;
