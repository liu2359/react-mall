import React from 'react';
import {Card} from 'antd';
import '../assets/goods.less'
import {Link} from "react-router-dom";

const { Meta } = Card;

function GoodCard(props) {
    const {goodsList} = props;
    return (
        goodsList.map((item)=>(
            <Link className='goods' to={`${item.id}`}  target="_blank">
                <Card hoverable
                    cover={<img alt="example" src={`${item.img_path}`} />} >
                    <Meta title={`${item.title}`} description={`${item.price}`} />
                </Card>
            </Link>
        ))
    )
}

export default GoodCard;