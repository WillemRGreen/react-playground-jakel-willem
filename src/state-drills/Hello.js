import React, {Component} from 'react';

class  HelloWorld extends Component{
    state = {
        who:'world!'
    };
    handleButtonClicked(message){
        this.setState({who:message})
    };
    render() {
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={() =>this.handleButtonClicked('world!')}>World</button>
                <button onClick={() =>this.handleButtonClicked('friend!')}>Friend</button>
                <button onClick={() =>this.handleButtonClicked('react!')}>React</button>
            </div>
            
        )
    }
}

export default HelloWorld