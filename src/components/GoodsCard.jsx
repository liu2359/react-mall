import React, {useState} from 'react';
import {Card, Col, Row} from 'antd';
import '../assets/goods.less'
import {Link} from "react-router-dom";

const { Meta } = Card;

function GoodCard(props){
    const {goodsList} = props;
    return (
        goodsList.map((item)=>(
            <div className='goods'>
                <Card
                    hoverable
                    style={{
                        // width: 240,
                    }}
                    cover={<img alt="example" src={`${item.img_path}`} />} >
                    <Meta title={`${item.title}`} description={`${item.price}`} />
                    <Link to={`${item.id}`}></Link>
                </Card>
            </div>
        ))
    )
}

export default GoodCard;