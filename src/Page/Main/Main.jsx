import React from 'react'
import { Link } from 'react-router-dom'
import './Main.css'
import { useState } from 'react'
import Receipt from './Receipt'
import Profile from './Profile'
import Calender from '../Content/Calender'
import Statistics from '../Content/Statistics'
import CustomFood from '../Content/CustomFood'
import SearchFood from '../Content/SearchFood'

const Main = () => {
    //메인메뉴 
    const [mainMenu, setMainMenu] = useState('m1');
    //서브메뉴 
    const [subMenu, setSubMenu] = useState('sm1');


    const changeMenu = (e) => {
        var name = e.target.id;
        setMainMenu(name !== mainMenu ? name : name);
        setSubMenu('sm1');
    }
    const changeSubMenu = (e) => {
        var name = e.target.id;
        setSubMenu(name !== subMenu ? name : name);
    }
    return (
        <div id='main'>
            <div className="wrap">
                <div className="header-box center">
                    <div className='menu-box'>
                        <div id='m1' className={`menu menu1 ${mainMenu === 'm1' ? 'on-m1' : ''}`} onClick={changeMenu}>칼로리 기록</div>
                        <div id='m2' className={`menu ${mainMenu === 'm2' ? 'on-m2' : ''}`} onClick={changeMenu}>칼로리 캘린더</div>
                    </div>

                    <div className='logo-box'><img src='/image/logo.svg' alt='로고이미지' /></div>
                </div>
                <div className="container">
                    <div className={`left-container ${mainMenu === 'm2' ? 'back-m2' : ''}`}>
                        {
                            mainMenu === 'm1' &&
                            <div className='sub-menu-box'>
                                <div id="sm1" className={`sub-menu ${subMenu === 'sm1' ? 'on-sm' : ''}`} onClick={changeSubMenu}>검색하기</div>
                                <span className='bar'>|</span>
                                <div id="sm2" className={`sub-menu ${subMenu === 'sm2' ? 'on-sm' : ''}`} onClick={changeSubMenu}>내가 등록한 칼로리</div>
                            </div>
                        }
                        {
                            mainMenu === 'm2' &&
                            <div className='sub-menu-box'>
                                <div id="sm1" className={`sub-menu ${subMenu === 'sm1' ? 'on-sm' : ''}`} onClick={changeSubMenu}>캘린더</div>
                                <span className='bar'>|</span>
                                <div id="sm2" className={`sub-menu ${subMenu === 'sm2' ? 'on-sm' : ''}`} onClick={changeSubMenu}>통계</div>
                            </div>
                        }
                        {/* 컨텐츠 */}
                        <div className='main-content center'>
                        <div className='center mini-img'><img src='./image/mini-cop.png' alt='경찰사이렌이미지'/></div>
                        {mainMenu === 'm1' && subMenu === 'sm1' && <SearchFood />}
                        {mainMenu === 'm1' && subMenu === 'sm2' && <CustomFood />}
                        {mainMenu === 'm2' && subMenu === 'sm1' && <Calender />}
                        {mainMenu === 'm2' && subMenu === 'sm2' && <Statistics />} 
                        </div>
                    </div>
                    <div className='spring'><img src="/image/spring.svg" alt="스프링" /></div>
                    <div className="right-container">
                        <Profile />
                        <Receipt />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Main