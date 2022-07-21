import React, { useEffect, useState } from 'react';
import List from '../../Components/List/List';
import Listitem from '../../Components/ListItem/ListItem';
import Wrapper from '../../UI/Wrapper/Wrapper';



export const Euro = () => {

const [euro, setEuro] = useState({});
const [isFetched, setIsFetched] =  useState(false);

useEffect(() => {
fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
.then(data => data.json())
.then(result => {
  setEuro(result.bpi.EUR);
  setIsFetched(true);
  console.log(result.bpi.EUR);
});

},[]);


  return (
    <Wrapper>
      <List>
        {
          isFetched && <Listitem>
              code: "{euro.code}" <br></br>
              rate: "{euro.rate}" <br></br>
              rate_float: {euro.rate_float} <br></br>
              symbol: "{euro.symbol}" <br></br>
              description: {euro.description}
          </Listitem>
        }
       
      </List>
    </Wrapper>
  );
}
