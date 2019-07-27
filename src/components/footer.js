import React, {Component} from 'react';

export default class Footer extends Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <footer>
                <div id="mainFooter">
                    <div id="footer_div">

                <div id="footer_menu_div">
                    <span>1:1문의</span>|
                    <span>법적고지 확인</span>|
                    <span>사이트맵</span>
                </div>
                <div id="footer_sns_div">
                    <span id="footer_sns_language"><i class="fa fa-globe"></i> Language &nbsp;&nbsp;<i class='fas fa-angle-down'></i>
                    </span>
                    
                    <span class="sns_icons">
                        <span class="sns_icon"><i class="fab fa-facebook-square"></i></span>
                        <span class="sns_icon"><i class="fab fa-instagram"></i></span>
                        <span class="sns_icon"><i class="fab fa-twitter"></i></span>
                    </span>
                </div>

                </div>
                    <div id="footer_copyright_div">
                        <span>COPYRIGHT (c) THE 1st HOTEL CO., LTD. ALL RIGHTS RESERVED.</span>
                    </div>
                </div>
            </footer>
        )
    }

}