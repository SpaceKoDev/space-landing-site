import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import WebHeader from '../src/components/WebHeader'
import BackTopButton from '../src/components/BackTop'
import HomeSection from '../src/landingSite/home'
import ServicesSection from '../src/landingSite/services'
import ContactSection from '../src/landingSite/contact'
import MainLayout from '../src/layout/MainLayout'
import Navbar from '../src/layout/Navbar'
import Footer from '../src/layout/Footer'
import AboutUsSection from '../src/landingSite/about'
import style from '../styles/landingSite.module.css'
export default function LandingSite() {
  return (

    <>
      <WebHeader />
      {/* Navbar */}
      <Navbar id="home" />
      {/* Home section */}
      <section className={style.mx_05} >
        <HomeSection />
      </section>
      {/* Services section */}
      <section className={`${style.landingSiteSection} ${style.mx_1}`} id="services">
        <ServicesSection />
      </section>
      {/* About us section */}
      <section className={style.landingSiteSection} id="aboutUs">
        <AboutUsSection />
      </section>
      {/* Contact section */}
      <section className={style.landingSiteSection} id="contact">
        <ContactSection />
      </section>
      <Footer />
      {/* <BackTopButton /> */}
    </>

  )
}
