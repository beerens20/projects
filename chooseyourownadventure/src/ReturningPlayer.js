import React, {Component} from 'react';
import './returningPlayer.css';

class ReturningPlayer extends Component {
    state = {
        name: ''
    }
    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }
    handleSubmit = (e) => {
        localStorage.setItem("name", this.state.name);
    }

    render () {
            let playerName = localStorage.getItem('name');

            

            if (playerName != null || playerName != undefined) {
                return(
                    <div className="container-fluid">
                        <div className="row">
                            <h1>Welcome {playerName}!</h1>
                        </div>
                    </div>
                );
            } else {
                return(
                    <div className="container-fluid">
                        <div className="row">
                            <h1>Welcome, what is your name?</h1>
                        </div>
                        <div className="row">
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" onChange={this.handleChange}/>
                                <button>Submit</button>
                            </form>
                        </div>
                    </div>
                );
            }
    }
}

export default ReturningPlayer
