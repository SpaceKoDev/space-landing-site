import React, { useState, useEffect, Fragment } from "react";
import { useRouter } from 'next/router';
import Image from 'next/image'
import Link from 'next/link'
import style from '../styles/layout/Navbar.module.scss';
import { navBarList } from '../constants/navbar'
import { IoIosLogIn } from 'react-icons/io';
import { IoIosMenu } from 'react-icons/io';
import MainLayout from './MainLayout';

const Navbar = (props) => {
    const router = useRouter();
    const [showMenu, setShowMenu] = useState(true);
    const activeLink = (url, pathname) => {
        return pathname === url;
    };
    const handlerLogin = (props) => {
        console.log('Open WebApp');
    }
    useEffect(() => {
        setShowMenu(false);
    }, []);
    return (
        <>
            <MainLayout>
                <div className={`${style.navBarContainer} ${style.desktop}`}>
                    <div className={style.navBarContent}>
                        <div className={style.navBarLogo}>
                            <Image src={"/logo.jpeg"} width={120} height={80} />
                        </div>
                        <div className={style.navBarItemList}>
                            {
                                navBarList.map((item, index) => {
                                    return (
                                        <Link key={index} href={item.section} passHref shallow replace>
                                            <div className={`${style.colorDegree} ${style.navBarItem}`} >
                                                {item.name}
                                                <div className={`${style.navBarItemLine}`}></div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                        <div className={`${style.navBarItemList}`}>
                            <div key={'login'} className={style.navBarItem} onClick={handlerLogin}>
                                <div className={style.navBarLogin}>
                                    {/* <Image src={"/icons/login.png"} width={20} height={20} /> */}
                                    <IoIosLogIn />
                                    {'Login'}
                                </div>
                                <div className={style.navBarItemLine}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${style.navBarContainer} ${style.mobile}`}>
                    <div className={style.navBarContent}>
                        <IoIosMenu onClick={() => {
                            setShowMenu(true);
                        }} size={40} />
                        <div className={style.navBarLogo}>
                            <Image src={"/logo.jpeg"} width={100} height={60} />
                        </div>
                        {/* <div className={`${style.navBarItemList}`}>
                            <div key={'login'} className={style.navBarItem} onClick={handlerLogin}>
                                <div className={style.navBarLogin}>
                                    <IoIosLogIn />
                                    {'Login'}
                                </div>
                                <div className={style.navBarItemLine}></div>
                            </div>
                        </div> */}
                    </div>
                    <div
                        className={showMenu ?
                            `${style.navBarItemList} ${style.navBarItemListShow}` :
                            `${style.navBarItemList} ${style.navBarItemListHide}`}>
                        <div className={style.navBarLogo}>
                            {/* <Image src={"/images/cohete.png"} width={40} height={40} /> */}
                            <h1>{'Space Pet'}</h1>
                        </div>
                        {
                            navBarList.map((item, index) => {
                                return (
                                    <Link key={index} href={item.section} shallow replace>
                                        <div className={`${style.colorDegree} ${style.navBarItem}`} onClick={() => {
                                            setShowMenu(false);
                                        }} >
                                            {item.name}
                                            <div className={`${style.navBarItemLine}`}></div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                        <div key={'login'} onClick={handlerLogin}>
                            <div className={style.navBarLogin} >
                                <IoIosLogIn />
                                {'Login'}
                            </div>
                            <div className={style.navBarItemLine}></div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}
export default Navbar;