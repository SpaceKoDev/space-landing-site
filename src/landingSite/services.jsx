import React from 'react';
import style from '../styles/layout/Services.module.scss';
import { BiCalendarStar } from 'react-icons/bi';
import { BiCustomize } from 'react-icons/bi';
import MainLayout from '../layout/MainLayout';
const ServicesSection = (props) => {
    return (
        <>
            <MainLayout>
                <h1 className={style.serviceTitle}>{'Los mejores servicios para tus engreidos'}</h1>
                <p className={style.serviceDescription}>
                    {'Te ayudamos a cuidar bien de tu mascota. Nuestros expertos y red de apoyo está a la alerta de nuevos descubrimientos, recomendaciones de moda, y de lo más relevante para la buena salud y mejor vida de tu engreido.'}
                </p>
                <div className={style.serviceCards}>
                    <div className={style.serviceCardItem}>
                        <div className={style.serviceCardItemIcon}>
                            <BiCustomize size={45} color="rgb(112	189	172	)" />
                        </div>
                        <div className={style.serviceCardItemLabel}>
                            <h1>{'Atencion personalizada'}</h1>
                        </div>
                        <div className={style.serviceCardItemDescription}>
                            {'Tenemos a disposición todo tipo de baño que requiera tu mascota, como los basicos, medicados y/o antipulgas.'}
                        </div>
                    </div>
                    <div className={style.serviceCardItem}>
                        <div className={style.serviceCardItemIcon}>
                            <BiCalendarStar size={45} color="rgb(22	52	119	)" />
                        </div>
                        <div className={style.serviceCardItemLabel}>
                            <h1>{'Agenda tus citas'}</h1>
                        </div>
                        <div className={style.serviceCardItemDescription}>
                            {'Puedes recervas tus atenciones personalizadas'}
                        </div>
                    </div>
                    <div className={style.serviceCardItem}>
                        <div className={style.serviceCardItemIcon}>
                            <BiCalendarStar size={45} color="rgb(112	189	172	)" />
                        </div>
                        <div className={style.serviceCardItemLabel}>
                            <h1>{'Agenda tus citas'}</h1>
                        </div>
                        <div className={style.serviceCardItemDescription}>
                            {'Puedes recervas tus atenciones personalizadas'}
                        </div>
                    </div>
                    <div className={style.serviceCardItem}>
                        <div className={style.serviceCardItemIcon}>
                            <BiCalendarStar size={45} color="rgb(22	52	119	)" />
                        </div>
                        <div className={style.serviceCardItemLabel}>
                            <h1>{'Agenda tus citas'}</h1>
                        </div>
                        <div className={style.serviceCardItemDescription}>
                            {'Puedes recervas tus atenciones personalizadas'}
                        </div>
                    </div>
                </div>
                <p className={style.serviceOptional}>
                    {'Todos Los Baños Incluyen: Corte Y Limado De Uñas + Limpieza De Glándulas y Orejas + Colonia (Si Desean) + Lazo'}
                </p>
            </MainLayout>
        </>
    )
}
export default ServicesSection;