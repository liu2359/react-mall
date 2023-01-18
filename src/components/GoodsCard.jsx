import React, {useState} from 'react';
import {Card, Col, Row} from 'antd';
const { Meta } = Card;

function GoodCard(props){
    const {goodsList} = props;
    console.log("goodsList",goodsList)
    return (
        <div className='goods'>
            <Row gutter={16}>
            <Col span={8}>
            {
                goodsList.map((item)=>(
                        <Card
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="example" src={`${item.img_path}`} />}
                        >
                            <Meta title={`${item.title}`} description={`${item.price}`} />
                        </Card>
                ))
            }
            </Col>
            </Row>
        </div>

    )
}

export default GoodCard;