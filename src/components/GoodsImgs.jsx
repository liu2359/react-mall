import React, {useEffect, useState} from 'react';
import {Carousel, message} from 'antd';
import '../assets/goods.less'
import {GoodsImgsListApi} from "../request/goods";


const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

function GoodsImgs (params) {
    let [dataSource, setDataSource] = useState([]);
    let id = params.id;

    const getList =()=>{
        GoodsImgsListApi({
            id:id
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
        <div className='goodsImgs'>
            <Carousel autoplay>
                {
                    dataSource.map((item) => (
                        <img key={`${item.id}`} src={`${item.img_path}`} alt=""/>
                    ))
                }
            </Carousel>
        </div>
        )
}

export default GoodsImgs;