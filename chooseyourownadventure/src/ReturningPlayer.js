import React, {Component} from 'react';
import './returningPlayer.css';

class ReturningPlayer extends Component {

    state = {
        user: ''
    };

    const user = localStorage.getItem('user')

    handleFormSubmit = () => {
        localStorage.setItem('user', user);
    }

    render () {
        return (
            <div className="container-fluid" id="newPlayerEntry">
                <div className="col-sm-12 d-flex justify-content-center">
                <form onSubmit={this.handleFormSubmit}>
                    <label>Hello, what is your name?</label>
                    <input name="user" value={this.state.user} onChange={this.handleChange}/>
                    <label>
                        <input name="rememberMe" checked={this.state.rememberMe} onChange={"this.handleChange} type="checkbox" /> Remember me
                    </label>
                    <button type="submit">Submit</button>
                </form>
                </div>
            </div>
        );
    }
}

export default ReturningPlayer