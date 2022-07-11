import React,{useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { MainBtn, MainContent, MainElements, MainH1, MainItems, MainP } from './MainContainerElement'


const MainContainer = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <MainElements>
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <MainContent>
        <MainItems>
          <MainH1>Greatest Food Delivery Ever</MainH1>
          <MainP>Ready in 15 mins</MainP>
          <MainBtn>Place Order</MainBtn>
        </MainItems>
      </MainContent>
    </MainElements>
  )
}

export default MainContainer