import React, {useEffect, useState} from 'react';
import {Carousel, message} from 'antd';
import {CarouselListApi} from "../request/carousel";
import {TaskListApi} from "../request/api";
import moment from "moment/moment";
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

function MallCarousel () {
    let [dataSource, setDataSource] = useState([]);

    const getList =()=>{
        CarouselListApi({
        }).then(res=>{
            if (res.status === 200){
                dataSource = res.data.item
                setDataSource(dataSource)
            }else{
                message.error(res.msg).then()
            }
        })
    }

    useEffect(()=>{
        getList()
    },[])


    return (
            <Carousel >
            {
                dataSource.map((item) => (
                    <img key={`${item.id}`} src={`${item.img_path}`} alt=""/>
                ))
            }
            </Carousel>
        )
}

export default MallCarousel;