import React from 'react';
import { Container , Row , Col  } from 'react-bootstrap';
import { ClientsImages , Image } from './style.js'

const Clients = () => {
    return(
        <ClientsImages className="section">
            <Container>
              <Image src="images/clientImages/logo_01.png"/>
              <Image src="images/clientImages/logo_02.png"/>
              <Image src="images/clientImages/logo_03.png"/>
              <Image src="images/clientImages/logo_04.png"/>
              <Image src="images/clientImages/logo_05.png"/>
              <Image src="images/clientImages/logo_06.png"/>
            </Container>
        </ClientsImages>
    );
} 
export default Clients;