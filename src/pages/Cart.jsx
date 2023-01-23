import react, {useEffect} from "react";
import {CartGetApi} from "../request/cart";
import { ProList } from '@ant-design/pro-components';
import {Badge, Button, message} from 'antd';
import React, { useState } from 'react';
import Notification from "../components/Notification";
import '../assets/base.less'


const dataSource = [{
    id:0,
    name:"",
    desc:"",
    content:[]
}]

const renderBadge = (count, active = false) => {
    return (<Badge count={count} style={{
        marginBlockStart: -2,
        marginInlineStart: 4,
        color: active ? '#1890FF' : '#999',
        backgroundColor: active ? '#E6F7FF' : '#eee',
    }}/>);
};

function Cart(){
    const [activeKey, setActiveKey] = useState('tab1');
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    let [cartData,setCartData] = useState([])

    const rowSelection = {
        selectedRowKeys,
        onChange: (keys) => setSelectedRowKeys(keys),
    }

    const getCartInfo=()=>{
        CartGetApi({
        }).then(res =>{
            if(res.status === 200){
                let newArr = JSON.parse(JSON.stringify(res.data));
                let arr = []
                newArr.map((t)=>{
                    const arrayTmp = dataSource
                    let obj = {
                        id:t.id,
                        name:t.name,
                        content:[{
                            label:"数量",
                            value:t.num,
                        },{
                            label: "金额",
                            value: t.discount_price,
                        }]
                    }
                    arr.push(obj)
                })
                setCartData(arr)
            }else{
                message.success(res.msg)
            }
        })
    };

    useEffect(()=>{
        getCartInfo()
    },[]);

    return (
        <div className='cartBox'>
            <ProList rowKey="id"
                     rowSelection={rowSelection}
                     dataSource={cartData}
                     metas={{
                title: {
                    dataIndex: 'name',
                },
                description: {
                    dataIndex: 'desc',
                },
                id:{
                    dataIndex:'id'
                },
                content: {
                    dataIndex: 'content',
                    render: (text) => (<div key="label" style={{ display: 'flex', justifyContent: 'space-around' }}>
                        {text.map((t) => (<div key={t.label}>
                            <div style={{ color: '#00000073' }}>{t.label}</div>
                            <div style={{ color: '#000000D9' }}>{t.value}</div>
                        </div>))}
                    </div>),
                },
                actions: {
                    render: (text, row) => [
                        <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="link">
                            编辑
                        </a>,
                        <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="view">
                            删除
                        </a>,
                    ],
                },
            }} toolbar={{
                menu: {
                    activeKey,
                    items: [
                        {
                            key: 'tab1',
                            label: <span>我的购物车{renderBadge(99, activeKey === 'tab1')}</span>,
                        },
                    ],
                    onChange(key) {
                        setActiveKey(key);
                    },
                },
                search: {
                    onSearch: (value) => {
                        alert(value);
                    },
                }
            }}/>

            <div className='cartPayment'>
                <Button type="primary">去结算</Button>
            </div>

        </div>
    )
}

export default Cart;