import React, {Component} from 'react'

// 상세 평점을 보여줄 컴포넌트. css부분이 아직 남아서 실제로 보여지지는 않게 처리해 뒀습니다.
// 쓰고 싶다면 li 의 review_rating_div 에 함수 만들어서 보여주면 됨!

export default class Main extends Component{

    constructor(props){
        super(props);
        this.state = {
            //state 초기화 
        }
    }



    //render함수 
    render(){
        let rate = this.props.rate;

        if(rate === 0){
            return(
                <div>
                    <i className='far fa-star'></i>
                    <i className='far fa-star'></i>
                    <i className='far fa-star'></i>
                    <i className='far fa-star'></i>
                    <i className='far fa-star'></i>
                    <div style={{clear:'both'}}></div>
                </div>
            )
        }else if(rate === 1){
            return(
                <div>
                    <i className='fas fa-star'></i>
                    <i className='far fa-star'></i>
                    <i className='far fa-star'></i>
                    <i className='far fa-star'></i>
                    <i className='far fa-star'></i>
                    <div style={{clear:'both'}}></div>
                </div>
            )
        }else if(rate === 2){
            return(
                <div>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='far fa-star'></i>
                    <i className='far fa-star'></i>
                    <i className='far fa-star'></i>
                    <div style={{clear:'both'}}></div>
                </div>
            )
        }else if(rate === 3){
            return(
                <div>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='far fa-star'></i>
                    <i className='far fa-star'></i>
                    <div style={{clear:'both'}}></div>
                </div>
            )
        }else if(rate === 4){
            return(
                <div>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='far fa-star'></i>
                    <div style={{clear:'both'}}></div>
                </div>
            )
        }else{
            return(
                <div>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <div style={{clear:'both'}}></div>
                </div>
            )
        }


    }

}