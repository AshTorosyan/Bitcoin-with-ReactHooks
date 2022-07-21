
import {Routes ,Route , NavLink} from "react-router-dom"
import React from 'react'
import Wrapper from '../Wrapper/Wrapper'
import { Dollar } from '../../Pages/Dollar/Dollar'
import { Euro } from '../../Pages/Euro/Euro'
import { FuntSterling } from '../../Pages/FuntSterling/FuntSterling'
import { Header } from "../Header/Header"


 const Navlink = () => {
  return (
        <Wrapper>
        <Header>
          <NavLink to="/">USD</NavLink>
          <NavLink to="/usd">EUR</NavLink>
          <NavLink to="/gbp">GBP</NavLink>
      </Header>
 
      <Routes>
       <Route path ="/" element={<Dollar />}/>
       <Route path ="/usd" element={<Euro />}/>
       <Route path ="/gbp" element = {<FuntSterling />}/>
      </Routes>
      </Wrapper>
  );
}

export default Navlink;