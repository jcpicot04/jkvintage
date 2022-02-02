import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { MdNavigateNext } from 'react-icons/md';
import { Button } from '@material-ui/core';

var cont = 0;

const Background = styled.div`
position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    height: 100%;
    width:100%;
    display: flex;
    flex-direction: column;
    z-index: 1000;
`;

const ModalWrapper = styled.div`
  background: #D1C5DA;
  height: 100%;
  display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "foto text"; 
  z-index: 10;

  img{
    width: 600px;
    max-height: 600px; 
    filter: drop-shadow(0 0 0.75rem black);
    margin-top: 200px;
    left: 100px; 
    position: absolute;
    grid-area: foto;
    object-fit: cover;

  }

`;

const ModalContent = styled.div`
  grid-area: text;
  left: 60%;
  top: 30%;
  line-height: 1.2;
  position: absolute;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 7%;
  left: 87%;
  width: 44px;
  height: 20%;
  padding: 0;
  z-index: 10;
`;

const NavigateNext = styled(MdNavigateNext)`
  cursor: pointer;
  top: 800px;
  left: 380px;
  font-size: 2em;
  position: absolute;
`;

const Modal = ({showModal,setShowModal, product, onAddToCart, setBlurBackground, myRef}) => {
    const modalRef = useRef();
    const [load, setLoad] = useState(false);
      function createMarkup() {
        return { __html: product.description };
      }
  const animation = useSpring({
    config: {
      duration: 650
    },
    height: '100%',
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  const setScroll = () => {
    document.body.style.overflow = "scroll";
    const blockBack = document.getElementsByClassName('MuiCard-root');

    for (var i=0; i<blockBack.length; i++) {
        blockBack[i].style.pointerEvents = "all";
    }
  };

  const setHeight = () => {

    const blockBack = document.getElementsByClassName('MuiCard-root');
    for (var i=0; i<blockBack.length; i++) {
        blockBack[i].style.display='block';
    }
  }
  const setImage = () => {
    cont += 1;
    const ProductImage = document.getElementById('imageProduct');
    
    if(cont < product.assets.length){
      ProductImage.src = product.assets[cont].url;
    }else if(cont === product.assets.length){
      ProductImage.src = product.assets[0].url;
      cont = 0;
    }
  }

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress],
  );
  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef} id="modal">
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal} ref={myRef} id="modalWrapper">
              <img src={product.assets[0].url} alt='img' id="imageProduct"/>
              <NavigateNext 
              aria-label='Siguiente imagen'
              onClick={() => {setImage();}}
              />
              <ModalContent>
                <h1 style={{marginRight: '150%'}}>{product.name}</h1>
                <p dangerouslySetInnerHTML={createMarkup()}></p>
                <Button component={Link} to="/cart" variant="outlined" disabled={load} onClick={() => {setScroll(); setLoad(true); onAddToCart(product.id, 1).then(() => setLoad(false))}} style={{cursor: "pointer"}}>Comprar</Button>
              </ModalContent>
            </ModalWrapper>
            <CloseModalButton
                aria-label='Cerrar detalles'
                onClick={() => { setShowModal(prev => !prev); setBlurBackground(prev => !prev); setScroll(); setHeight();}}
              />
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default Modal
