import react, {useEffect, useState} from 'react'
import {Button, Descriptions, message} from 'antd';
import {GoodsInfoApi} from "../request/goods";
import '../assets/goods.less'

function GoodsInfo(params){
    let [dataSource, setDataSource] = useState({});
    let id = params.id;

    const getGoodInfo =()=>{
        GoodsInfoApi({
            id:id
        }).then(res=>{
            console.log("res get goods info",res)
            if (res.status === 200){
                dataSource = res.data
                setDataSource(dataSource)
            }else{
                message.error(res.msg).then()
            }
        })
    }

    useEffect(()=>{
        getGoodInfo()
    },[])

    return(
        <div className='goodsInfoOutlay'>
            <Descriptions
                title={dataSource.title} size="default"
                extra={<Button type="primary">Edit</Button>}
            >
                <Descriptions.Item label="商品信息">{dataSource.info}</Descriptions.Item>
                <Descriptions.Item label="剩余数量">{dataSource.num}</Descriptions.Item>
                <Descriptions.Item label="店家名字">{dataSource.boss_name}</Descriptions.Item>
                <Descriptions.Item label="商品价格">{dataSource.discount_price}</Descriptions.Item>
                <Descriptions.Item label="发货地址">
                    上海,中国
                </Descriptions.Item>
                <Descriptions.Item label="店主图片">
                    <img src={dataSource.boss_avatar} className='good_boss_avatar' />
                </Descriptions.Item>
            </Descriptions>
        </div>
    )
}

export default GoodsInfo;
