//import { render } from '@testing-library/react';
import React, {Component} from 'react';

class Bomb extends Component{
    state = {
        count:0
    };
    
   componentDidMount(){
    this.intervalId = setInterval(() => {
        let currentCount = this.state.count +1;
        this.setState({ count: currentCount });
    },1000)
   }

   componentWillUnmount(){
    clearInterval(this.intervalId)
   }
   
   render(){
       let message = ''
       if(this.state.count %2 === 0){
            message = 'Tick!'
        }else{
             message = 'Tock!'
            }
        if(this.state.count >= 8){
            message = 'Boom!'
        }
    return(
        <div>
            <p>
               {message}
            </p>
        </div>
    )
}
   
}

export default Bomb