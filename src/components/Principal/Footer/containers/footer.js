import React from 'react'
import Footer from '../elements/footer'
import Icon from '../elements/icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>Sobre nosotros</Footer.Title>
                    <Footer.Link href="#">Quienes somos</Footer.Link>
                    <Footer.Link href="#">Qué ofrecemos</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Políticas</Footer.Title>
                    <Footer.Link href="#">FAQs</Footer.Link>
                    <Footer.Link href="#">Política de reembolso</Footer.Link>
                    <Footer.Link href="#">Terminos de servicio</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contacto</Footer.Title>
                    <Footer.Link href="mailto:jkvintageclothing@gmail.com">jkvintageclothing@gmail.com</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-tiktok" />TikTok</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}