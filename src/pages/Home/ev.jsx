import React from 'react'
import Promo from '../../components/Promo/Promo'
import Head from '../../components/Header/Head'
import Discount from '../../components/Discount'
import CardSlider from '../../components/CardSlider/CardSlider'
import Info from '../../components/Info'
import Offer from '../../components/Offer'
import TopSellers from '../../components/Sellers/TopSellers'
import Countdown from '../../components/Countdown'
import Feedback from '../../components/Feedback/Feedback'
import Company from '../../components/Company'
import Footer from '../../components/Footer/Footer'
import Modal from '../../components/Modal'
import Testmodal from "../../components/testmodal"
const Home = () => {
  return (
    <div className="Home">
      <Promo/>
      <Head/>
      <Discount/>
      <CardSlider/>
      <Info/>
      <Offer/>
      <TopSellers/>
      <Countdown/>
      <Feedback/>
      <Company/>
      <Footer/>
      <Testmodal/>

    </div>
  )
}

export default Home