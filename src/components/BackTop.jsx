import React, { useEffect, useState } from 'react';
import { IoArrowUp } from 'react-icons/io5'

const BackTopButton = (props) => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);
    const handlerTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    }
    if (showButton) {
        return (
            <>
                <div onClick={handlerTop} style={{ position: 'fixed', right: 10, bottom: 60, zIndex: 900 }}>
                    <IoArrowUp size={40} color={'#000'} />
                </div>
            </>
        )
    }
}
export default BackTopButton;