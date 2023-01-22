import react, {useEffect, useState} from 'react'
import {Button, Descriptions, message} from 'antd';
import {GoodsInfoApi} from "../request/goods";
import '../assets/goods.less'
import {Link} from "react-router-dom";
import {CartCreateApi} from "../request/cart";

function GoodsInfo(params){
    let [dataSource, setDataSource] = useState({});
    let id = params.id;
    let [bossId, setBossId] = useState(0);
    let [productId, setProductId] = useState(0);
    let [num, setNum] = useState(0);

    const getGoodInfo =()=>{
        GoodsInfoApi({
            id:id
        }).then(res=>{
            if (res.status === 200){
                dataSource = res.data
                setBossId(dataSource.boss_id)
                setProductId(dataSource.id)
                setNum(dataSource.num)
                setDataSource(dataSource)
            }else{
                message.error(res.msg).then()
            }
        })
    }

    useEffect(()=>{
        getGoodInfo()
    },[])

    const addCard=()=>{
        console.log(bossId, productId,num)
        CartCreateApi({
            boss_id:bossId,
            product_id:productId,
            num:num
        }).then(res=>{
            console.log("res add card",res)
            if(res.status===200){
                message.success("添加购物车成功！")
            }else{
                message.error(res.msg).then()
            }
        })
    }

    return(
        <div className='goodsInfoOutlay'>
            <Descriptions
                title={dataSource.title} size="default"
            >
                <Descriptions.Item label="商品信息">{dataSource.info}</Descriptions.Item>
                <Descriptions.Item label="剩余数量">{dataSource.num}</Descriptions.Item>
                <Descriptions.Item label="店家名字">{dataSource.boss_name}</Descriptions.Item>
                <Descriptions.Item label="商品价格">{dataSource.discount_price}</Descriptions.Item>
                <Descriptions.Item label="发货地址">
                    上海,中国
                </Descriptions.Item>
                <Descriptions.Item label="店主图片">
                    <img src={dataSource.boss_avatar} className='goodBossAvatar' />
                </Descriptions.Item>
            </Descriptions>
            {/*<Link to='/card'>*/}
                <Button onClick={addCard} type="primary" className='goodsInfoCard'>
                    加入购物车
                </Button>
            {/*</Link>*/}

            <Link to='/payment'>
                <Button type="primary" className='goodsInfoBug'>
                    立即购买
                </Button>
            </Link>
        </div>
    )
}

export default GoodsInfo;
