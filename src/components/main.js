import React, {Component} from 'react';
import Ul from './ul';
import Footer from './footer';
import Header from './header';


const Main = ({match}) => {
    let root = "http://localhost:9000/HotelProject/";
      return (
        <div>
            <Header member_num={match.params.member_num}></Header>
            <Ul member_num={match.params.member_num} root={root}></Ul>
            <Footer></Footer>
        </div>
     );
};

export default Main;

