//import { render } from '@testing-library/react';
import React, {Component} from 'react';

class Bomb extends Component{
    state = {
        count:0,
        message:''
    };
    
        textMessage=()=>{
        if(this.state.count %2 === 0){
            this.setState({message:'Tick!'})
        }else{
            this.setState({message:'Tock!'})
        }
        if(this.state.count >= 8){
            this.setState({message:'Boom!'})
            
        }
    }
   
    render(){
        console.log(this.state.count)
        return(
            <div>
                <p>
                   {this.state.message}
                </p>
            </div>
        )
    }

   componentDidMount(){
    let intervalId = setInterval(this.textMessage,1000)
    let currentCount = this.state.count +1;
    this.setState({ count: currentCount });
    console.log('DidMount')
   }

   componentWillUnmount(){
    clearInterval(this.state.intervalId)
    console.log('DidwillunMount')
   }
//   timer=()=>{
//     // setState method is used to update the state
//     this.setState();
//  }

   
}

export default Bomb