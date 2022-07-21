import React, { useEffect, useState } from 'react'
import List from '../../Components/List/List'
import Listitem from '../../Components/ListItem/ListItem'
import Wrapper from '../../UI/Wrapper/Wrapper'



export const FuntSterling = () => {

const [funt, setFunt] = useState({});
const [isFetched, setIsFetched] = useState(false);

useEffect(()=> {
   fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
   .then(data => data.json())
   .then(result => {
    setFunt(result.bpi.GBP);
    setIsFetched(true);
    console.log(result.bpi.GBP);
   });
},[]);

  return (
     <Wrapper>
        <List>
         {
         isFetched &&  <Listitem>
           code: "{funt.code}" <br></br>
              rate: "{funt.rate}" <br></br>
              rate_float: {funt.rate_float} <br></br>
              symbol: "{funt.symbol}" <br></br>
              description: {funt.description}
              </Listitem>
         }
        </List>
     </Wrapper>
  );
}
