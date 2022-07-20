
import React, { useEffect, useState } from 'react';
import Wrapper from '../../UI/Wrapper/Wrapper';
import List from "../../Components/List/List";
import ListItem from "../../Components/ListItem/ListItem";
export const Dollar = () => {

const [bitcoin, setBitcoin] =  useState({});

useEffect(()=> {
  setBitcoin()
},[bitcoin]);


  return (
    <Wrapper>
       <List>
        <ListItem>

        </ListItem>
       </List>
    </Wrapper>
  )
}
