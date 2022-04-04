import React from "react";
import Image from "next/image";
import style from "../styles/layout/Home.module.scss";
const HomeSection = (props) => {
    return (
        <>
            <div className={`${style.heroContainer}`}>
                <div className={`${style.containerBig}`}>
                    <div className={`${style.heroSectionWrap}`}>
                        <div className={`${style.heroBackground}`}></div>
                        <div className={`${style.heroCustomText}`}>
                            <div className={`${style.heroCustomCaption}`}>
                                <h4>
                                    <p>
                                        15
                                        <em>%</em>
                                        <strong>off</strong>
                                    </p>
                                </h4>
                                <h5>{'Por apertura'}</h5>
                                <p>
                                    {'Obten un 15% de descuento en tu primer corte o baño.'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.heroContainerOptions}>
                <div className={style.heroOptions}>
                    <div className={style.heroOption}>
                        <div className={style.heroOptionImg}>
                            <Image
                                style={{ width: 50, height: 50, minHeight: 50, minWidth: 50 }}
                                src={"/icons/beauty-saloon.png"}
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className={style.heroOptionText}>
                            <p>
                                <strong>{"Groomer Profesional"}</strong>
                            </p>
                            <p>
                                {"Corte de pelo profesional para cada una de tus mascotas."}
                            </p>
                        </div>
                    </div>
                    <div className={style.heroOption}>
                        <div className={style.heroOptionImg}>
                            <Image
                                style={{ width: 50, height: 50, minHeight: 50, minWidth: 50 }}
                                src={"/icons/dog.png"}
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className={style.heroOptionText}>
                            <p>
                                <strong>{"Baños "}</strong>
                            </p>
                            <p>
                                {"Baños con productos eco amigables, para todo tipo de piel."}
                            </p>
                        </div>
                    </div>
                    <div className={style.heroOption}>
                        <div className={style.heroOptionImg}>
                            <Image
                                style={{ width: 50, height: 50, minHeight: 50, minWidth: 50 }}
                                src={"/icons/star.png"}
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className={style.heroOptionText}>
                            <p>
                                <strong>{"Atencion Personalizada"}</strong>
                            </p>
                            <p>{"Sabemos que cada mascotita es unica y especial."}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default HomeSection;
