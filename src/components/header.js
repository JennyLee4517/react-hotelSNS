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
        let root = this.props.root;
        let login = root + "login.do";
        let logout = root + "logout.do";
        let mypage = root + "mypage.do";
        let reviewlist = root + "reviewlist.do";
        let qnalist = root + "qnalist.do";
        let hotelroom = root + "hotelroom.do";
        let hotellist = root + "hotellist.do";
        let join = root + "joinagree.do";
        let booking = root + "booking.do";

        if(this.props.member_num === 0){
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
                <a className="navbar-brand my-navbar-brand" href={root}>
                    <img  width="70px" src={Logo} alt="logo"></img>
                </a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
  
                        <li><a href={login}><span className="glyphicon glyphicon-log-in"></span>&nbsp;로그인</a></li>
                        <li><a href={join}><span className="glyphicon glyphicon-user"></span>&nbsp;회원가입</a></li>
                                     
                    <li className="padding_li"></li>                                   
                    <li><a href={booking}>빠른예약</a></li>                
                    <li><a href={reviewlist}>리뷰게시판</a></li>
                    <li><a href={qnalist}>문의게시판</a></li>                   
                    <li className="padding_li"></li>                   
                    <li><a href={hotelroom}>객실안내</a></li>		
                    <li><a href={hotellist}>지점안내</a></li>
                                  
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
                <a className="navbar-brand my-navbar-brand" href={root}>
                    <img  width="70px" src={Logo} alt="logo"></img>
                </a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                
                        <li><a href={logout}><span className="glyphicon glyphicon-log-out"></span>&nbsp;로그아웃</a></li>		
                        <li><a href={mypage}><span className="glyphicon glyphicon-user"></span>&nbsp;마이페이지</a></li>		
                                      
                    <li className="padding_li"></li>                                   
                    <li><a href={booking}>빠른예약</a></li>                
                    <li><a href={reviewlist}>리뷰게시판</a></li>
                    <li><a href={qnalist}>문의게시판</a></li>                   
                    <li className="padding_li"></li>                   
                    <li><a href={hotelroom}>객실안내</a></li>		
                    <li><a href={hotellist}>지점안내</a></li>
                                  
                </ul>
                </div>                   
                </div>
                </nav>
            </header>
            )
            
           
        }

       
    }

}