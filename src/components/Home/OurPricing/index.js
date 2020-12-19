import React from 'react';
import { Container , Row , Col } from 'react-bootstrap';
import { OurPricingSection , Title  , Desc , Box  , Head, Sup , SpanPrice , Span , TitleBox , Ul , Li , Link } from './style.js'


const OurPricing = ({data}) => {
        return (
            <OurPricingSection className="section text-center">
                <Container>
                    <Title>Our Pricing</Title>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et tincidunt risus, vitae sollicitudin tellus. Sed a nulla nisl. Aenean a lacus eget nibh dignissim molestie in quis magna. Sed vel euismod ligula. Mauris vitae suscipit velit, in vestibulum elit. In sed tellus nec metus consectetur iaculis et vitae tellus.</Desc>
                    <Row>
                        {data.map( (priceItem , index ) => {
                            return(
                                <Col md={4} sm={12} key={index}>
                                <Box className="border-r6 box-shadow">
                                 <Head className="transition border-rTop">
                                     <Sup>$</Sup>
                                     <SpanPrice>{priceItem.price}</SpanPrice>
                                     <Span>/mo</Span>
                                     <TitleBox>{priceItem.title}</TitleBox>
                                     </Head>
                                     <Ul>
                                         <Li>{priceItem.li1}</Li>
                                         <Li>{priceItem.li2}</Li>
                                         <Li>{priceItem.li3}</Li>
                                     </Ul>
                                     <Link href="#">Choose Plan</Link>
                                </Box>
                             </Col>
                            )
                        })}
                    </Row>

                </Container>
            </OurPricingSection>
          );
}

export default OurPricing;
