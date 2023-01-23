import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd';
import Header from './components/Header'
import {Footer} from "antd/es/layout/layout";
import MallCarousel from "./components/Carousel";
import './assets/base.less'
import './assets/goods.less'

function App() {
  return (
      <Layout id='app'>
        <Header />
          <MallCarousel />
          <div className='container'>
              <div className='container_box'>
                <div className="container_content">
                    <Outlet />
                </div>
          </div>
        </div>
        <Footer className='footer_content'>FanMall | Copyright &copy; 2023 Author FanOne</Footer>
      </Layout>
  )
}



export default App

