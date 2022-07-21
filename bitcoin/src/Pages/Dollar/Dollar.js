
import React, { useEffect, useState } from 'react';
import Wrapper from '../../UI/Wrapper/Wrapper';
import List from "../../Components/List/List";
import ListItem from "../../Components/ListItem/ListItem";


export const Dollar = () => {

const [usd, setUsd] =  useState({});
const [isFetched, setIsFetched] = useState(false);
 

useEffect(()=> {
  fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
 .then(data => data.json())
 .then(result => {
   
   setUsd(result.bpi.USD)
   setIsFetched(true)
   console.log(result.bpi.USD)
 });

},[]);


  return (
    <Wrapper>
       <List>
        {
       isFetched && <ListItem>
       code: "{usd.code}" <br></br>
       rate: "{usd.rate}" <br></br>
       rate_float: {usd.rate_float} <br></br>
       symbol: "{usd.symbol}" <br></br>
       description: {usd.description}
       </ListItem>
}
       </List>
    </Wrapper>
  )
}
