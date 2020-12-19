import React from 'react';
import { Container } from 'react-bootstrap';
import imgclient1 from '../../images/clientImages/logo_01.png'
import imgclient2 from '../../images/clientImages/logo_02.png'
import imgclient3 from '../../images/clientImages/logo_03.png'
import imgclient4 from '../../images/clientImages/logo_04.png'
import imgclient5 from '../../images/clientImages/logo_05.png'
import imgclient6 from '../../images/clientImages/logo_06.png'
import { ClientsImages , Image } from './style.js'

const Clients = () => {
    return(
        <ClientsImages className="section">
            <Container>
              <Image src={imgclient1}/>
              <Image src={imgclient2}/>
              <Image src={imgclient3}/>
              <Image src={imgclient4}/>
              <Image src={imgclient5}/>
              <Image src={imgclient6}/>
            </Container>
        </ClientsImages>
    );
} 
export default Clients;