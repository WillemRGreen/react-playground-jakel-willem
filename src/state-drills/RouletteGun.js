import React, {Component} from 'react';

class RouletteGun extends Component{

    state = {
        chamber:null,
        spinningTheChamber: false
    }

    handleButtonClicked = () => {
        this.setState({spinningTheChamber: true});
        this.timeout = setTimeout(() => {
            this.setState({chamber: Math.ceil(Math.random() * 8)});
            this.setState({spinningTheChamber: false})
            console.log(this.state.chamber, this.props.bulletInChamber)
        }, 3000)
    }

    componentWillUnmount(){
        clearTimeout(this.timeout)
    }

    render(){
        let message= '';
        if(this.state.spinningTheChamber === true){
            message = 'spinning the chamber and pulling the trigger! ...'
        }
        if(this.state.chamber === this.props.bulletInChamber){
            message = 'Bang!'
        }
        if(this.state.chamber != this.props.bulletInChamber && this.state.chamber != null && this.state.spinningTheChamber === false){
            message = `You're safe!`
        }
        return(
            <div>
                <p>
                    {message}
                </p>
                <button onClick={() => this.handleButtonClicked()}>
                    Trigger
                </button>
            </div>
        )
    }
}

export default RouletteGun