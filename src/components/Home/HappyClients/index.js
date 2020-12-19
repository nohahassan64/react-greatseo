import React from 'react';
import { Container } from 'react-bootstrap';
import SwiperCore, { Navigation , Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import imgClient1 from '../../../images/client/testi_01.png'
import imgClient2 from '../../../images/client/testi_02.png'
import imgClient3 from '../../../images/client/testi_03.png'
import { Title , Desc , BoxPerson , Image , Name , Job , Testim , Icon , TitleTestim , DescTestim  }from './style.js';
import './main.css'

SwiperCore.use([Navigation , Autoplay]);

const HappyClients = () => {
    return(
        <div className="section text-center">
            <Container>
            <Title>Happy Client </Title>
            <Desc>We thanks for all our awesome testimonials! There are hundreds of our happy customers! Let's see what others say about Landigoo website template!</Desc>
            <Swiper
                spaceBetween={5}
                slidesPerView={1}
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
                    <BoxPerson>
                        <Image src={imgClient1} alt=""/>
                        <Name>James Fernando </Name>
                        <Job>- Manger Of Racer</Job>
                    </BoxPerson>
                    <Testim>
                        <Icon className="fas fa-quote-left"></Icon>
                        <TitleTestim>Wonderful Support</TitleTestim>
                        <Icon className="fas fa-quote-right"></Icon>
                        <DescTestim>They have got my project on time with the competition with a sed highly skilled, and experienced & professional team.</DescTestim>
                    </Testim>
                    </SwiperSlide>

                    <SwiperSlide>
                    <BoxPerson>
                        <Image src={imgClient2} alt=""/>
                        <Name>Jacques Philips </Name>
                        <Job>- Designer</Job>
                    </BoxPerson>
                    <Testim>
                    <Icon className="fas fa-quote-left"></Icon>
                        <TitleTestim>Awesome Services! </TitleTestim>
                        <Icon className="fas fa-quote-right"></Icon>
                        <DescTestim>Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you completed.</DescTestim>
                    </Testim>
                    </SwiperSlide>

                    <SwiperSlide>
                    <BoxPerson>
                        <Image src={imgClient3} alt=""/>
                        <Name>Venanda Mercy </Name>
                        <Job>- Newyork City</Job>
                    </BoxPerson>
                    <Testim>
                    <Icon className="fas fa-quote-left"></Icon>
                        <TitleTestim>Great & Talented Team! </TitleTestim>
                        <Icon className="fas fa-quote-right"></Icon>
                        <DescTestim>The master-builder of human happines no one rejects, dislikes avoids pleasure itself, because it is very pursue pleasure.</DescTestim>
                    </Testim>
                    </SwiperSlide>

                    <SwiperSlide>
                    <BoxPerson>
                        <Image src={imgClient1} alt=""/>
                        <Name>James Fernando </Name>
                        <Job>- Manger Of Racer</Job>
                    </BoxPerson>
                    <Testim>
                    <Icon className="fas fa-quote-left"></Icon>
                        <TitleTestim>Wonderful Support</TitleTestim>
                        <Icon className="fas fa-quote-right"></Icon>
                        <DescTestim>They have got my project on time with the competition with a sed highly skilled, and experienced & professional team.</DescTestim>
                    </Testim>
                    </SwiperSlide>

                    <SwiperSlide>
                    <BoxPerson>
                        <Image src={imgClient2} alt=""/>
                        <Name>Jacques Philips </Name>
                        <Job>- Designer</Job>
                    </BoxPerson>
                    <Testim>
                    <Icon className="fas fa-quote-left"></Icon>
                        <TitleTestim>Awesome Services! </TitleTestim>
                        <Icon className="fas fa-quote-right"></Icon>
                        <DescTestim>Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you completed.</DescTestim>
                    </Testim>
                    </SwiperSlide>

                    <SwiperSlide>
                    <BoxPerson>
                        <Image src={imgClient3} alt=""/>
                        <Name>Venanda Mercy </Name>
                        <Job>- Newyork City</Job>
                    </BoxPerson>
                    <Testim>
                    <Icon className="fas fa-quote-left"></Icon>
                        <TitleTestim>Great & Talented Team! </TitleTestim>
                        <Icon className="fas fa-quote-right"></Icon>
                        <DescTestim>The master-builder of human happines no one rejects, dislikes avoids pleasure itself, because it is very pursue pleasure.</DescTestim>
                    </Testim>
                    </SwiperSlide>
      </Swiper>
            </Container>
    </div>
    )
}
export default HappyClients;

