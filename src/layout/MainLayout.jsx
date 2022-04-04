import React from 'react';
import style from '../styles/layout/MainLayout.module.scss';
const MainLayout = (props) => {
    return (
        <>
            <div className={style.mainLayoutContainer}>
                <div className={style.mainLayoutContent}>
                    {props.children}
                </div>
            </div>
        </>
    )
}
export default MainLayout;