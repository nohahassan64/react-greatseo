import React  from 'react';
import SwiperCore, { Navigation , Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import ImgServ1 from '../../../images/services/01.png'
import ImgServ2 from '../../../images/services/02.png'
import ImgServ3 from '../../../images/services/03.png'
import ImgServ4 from '../../../images/services/04.png'
import ImgServ5 from '../../../images/services/05.png'
import ImgServ6 from '../../../images/services/06.png'
import {SeoServicesSection , Title , DescTitle , Box , Image , TitleBox , Desc  }from './style.js';
import './main.css';

SwiperCore.use([Navigation , Autoplay]);
const  SeoServices = () =>  {  
  return (
    <SeoServicesSection className="section text-center">
       <Title>Seo Services</Title>
        <DescTitle>We offer unlimited solutions to all your business needs. in the installation package we prepare search engine optimization, social media<br/> support, we provide corporate identity and graphic design services. </DescTitle>
        <Swiper
       spaceBetween={5}
       slidesPerView={3}
       navigation
       loop={true}
       grabCursor={true}
       autoplay={{
         delay: 5000,
         disableOnInteraction: false}}
       onSlideChange={() => console.log('slide change')}
       onSwiper={(swiper) => console.log(swiper)}
     >
      <SwiperSlide>
        <Box className="box-shadow">
        <Image src={ImgServ1} alt=""/>
        <TitleBox>Search Engine Optimization</TitleBox>
        <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia optio repellat nisi eaque corrupti et nobis rem, dolorum harum libero ipsum dolor sit amet!</Desc>
        </Box>
      </SwiperSlide>

      <SwiperSlide>
        <Box className="box-shadow">
        <Image src={ImgServ2} alt=""/>
        <TitleBox>Email Marketing</TitleBox>
        <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia optio repellat nisi eaque corrupti et nobis rem, dolorum harum libero ipsum dolor sit amet!</Desc>
        </Box>
      </SwiperSlide>

      <SwiperSlide>
        <Box className="box-shadow">
        <Image src={ImgServ3} alt=""/>
        <TitleBox>Pay Per Click</TitleBox>
        <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia optio repellat nisi eaque corrupti et nobis rem, dolorum harum libero ipsum dolor sit amet!</Desc>
        </Box>
      </SwiperSlide>

      <SwiperSlide>
        <Box className="box-shadow">
        <Image src={ImgServ4} alt=""/>
        <TitleBox>Website Development</TitleBox>
        <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia optio repellat nisi eaque corrupti et nobis rem, dolorum harum libero ipsum dolor sit amet!</Desc>
        </Box>
      </SwiperSlide>

      <SwiperSlide>
        <Box className="box-shadow">
        <Image src={ImgServ5} alt=""/>
        <TitleBox>Reporting</TitleBox>
        <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia optio repellat nisi eaque corrupti et nobis rem, dolorum harum libero ipsum dolor sit amet!</Desc>
        </Box>
      </SwiperSlide>

      <SwiperSlide>
        <Box className="box-shadow">
        <Image src={ImgServ6} alt=""/>
        <TitleBox>Social Media Marketing</TitleBox>
        <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia optio repellat nisi eaque corrupti et nobis rem, dolorum harum libero ipsum dolor sit amet!</Desc>
        </Box>
      </SwiperSlide>
    </Swiper>
    </SeoServicesSection>
   );
 };
export default SeoServices;
