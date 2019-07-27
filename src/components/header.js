import React, {Component} from 'react';
import Logo from './../resources/titleLogo2.svg';
import './../resources/mainStyle.css';

export default class Footer extends Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){

        if(this.props.member_num == 0){
            return(
                <header>
                <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    

            <div className="navbar-header my-navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>                        
                </button>
                <a className="navbar-brand my-navbar-brand" href="http://15.164.144.128:8080/HotelProject/">
                    <img  width="70px" src={Logo} alt="logo"></img>
                </a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
  
                        <li><a href="http://15.164.144.128:8080/HotelProject/login.do"><span className="glyphicon glyphicon-log-in"></span>&nbsp;로그인</a></li>
                        <li><a href="http://15.164.144.128:8080/HotelProject/joinagree.do"><span className="glyphicon glyphicon-user"></span>&nbsp;회원가입</a></li>
                                     
                    <li className="padding_li"></li>                                   
                    <li><a href="http://15.164.144.128:8080/HotelProject/booking.do">빠른예약</a></li>                
                    <li><a href="http://15.164.144.128:8080/HotelProject/reviewlist.do">리뷰게시판</a></li>
                    <li><a href="http://15.164.144.128:8080/HotelProject/qnalist.do">문의게시판</a></li>                   
                    <li className="padding_li"></li>                   
                    <li><a href="http://15.164.144.128:8080/HotelProject/hotelroom.do">객실안내</a></li>		
                    <li><a href="http://15.164.144.128:8080/HotelProject/hotellist.do">지점안내</a></li>
                                  
                </ul>
                </div>                   
                </div>
                </nav>
            </header>
            )
        }else{
            return(
                <header>
                <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    

            <div className="navbar-header my-navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>                        
                </button>
                <a className="navbar-brand my-navbar-brand" href="home.do">
                    <img  width="70px" src={Logo} alt="logo"></img>
                </a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                
                        <li><a href="http://15.164.144.128:8080/HotelProject/logout.do"><span className="glyphicon glyphicon-log-out"></span>&nbsp;로그아웃</a></li>		
                        <li><a href="http://15.164.144.128:8080/HotelProject/mypage.do"><span className="glyphicon glyphicon-user"></span>&nbsp;마이페이지</a></li>		
                                      
                    <li className="padding_li"></li>                                   
                    <li><a href="http://15.164.144.128:8080/HotelProject/booking.do">빠른예약</a></li>                
                    <li><a href="http://15.164.144.128:8080/HotelProject/reviewlist.do">리뷰게시판</a></li>
                    <li><a href="http://15.164.144.128:8080/HotelProject/qnalist.do">문의게시판</a></li>                   
                    <li className="padding_li"></li>                   
                    <li><a href="http://15.164.144.128:8080/HotelProject/hotelroom.do">객실안내</a></li>		
                    <li><a href="http://15.164.144.128:8080/HotelProject/hotellist.do">지점안내</a></li>
                                  
                </ul>
                </div>                   
                </div>
                </nav>
            </header>
            )
            
           
        }

       
    }

}