import React, { Component } from 'react';
import { Container , Row , Col } from 'react-bootstrap';
import { Desc , Box  , Head, Sup , SpanPrice , Span , TitleBox , Ul , Li , Link } from './../../Home/OurPricing/style';
import { PricingInfoSection , Title } from './style.js';


const PricingInfo = ({data}) => {
        return (
            <PricingInfoSection className="section text-center">
                <Container>
                    <Title>Pricing</Title>
                    <Desc>Get the red carpet treatment just $39 per month! It is estimated that 3.5 million established by personal blogs.<br/>From each other, we share paid WordPress themes WP Service...</Desc>
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
            </PricingInfoSection>
          );
}

export default PricingInfo;
