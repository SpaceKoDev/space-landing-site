import React from 'react';
import Image from 'next/image';
import style from '../styles/layout/Footer.module.scss';
import MainLayout from './MainLayout';
const Footer = (props) => {
    const handlerWhatsapp = () => {
        window.open('https://wa.me/51950805514?text=Hola%20buen%20d%C3%ADa%2C%20me%20interesar%C3%ADa%20reservar%20un%20ba%C3%B1o%20y%2Fo%20corte%20para%20mi%20mascota%20gracias.', '_blank')
    }
    return (
        <>
            <div className={style.footerContainer}>
                <div className={style.footerReserveContainer}>
                    <MainLayout>
                        <div className={style.whatsContent}>
                            <span className={style.whatsText}>{'Reserva tu cita a nuestro whatsapp.'}</span>
                            <button className={style.whatsBtn} onClick={() => {
                                handlerWhatsapp()
                            }}>{'Whatsapp'}</button>
                        </div>
                    </MainLayout>
                </div>
                <div className={style.footerContent}>
                    <MainLayout>
                        <div className={style.personalInfo}>
                            <div className={style.infoLogo}>
                                <Image src={"/images/cohete.png"} width={40} height={40} />
                            </div>
                            <span className={style.infoAddress}>{'Coop. Victor Andres Belaunde b15 / Yanahuara'}</span>
                            <span className={style.infoTel}>{'+51950805514'}</span>
                            <span className={style.infoCopy}>{'SpaceKoDev'}</span>
                        </div>
                    </MainLayout>
                </div>
            </div>
        </>
    )
}
export default Footer;