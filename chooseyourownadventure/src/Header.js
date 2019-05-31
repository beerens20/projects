import React, {Component} from 'react';

class Header extends Component {
    clearLocal = (e) => {
        localStorage.clear();
    }

    render(){
        return(
            <div className="container-fluid" id="header">
                <div className="row align-items-center">
                    <div className="col-sm-6 text-center">
                        <h1>Choose Your Own Adventure!</h1>
                    </div>
                    <div className="col-sm-3 d-flex justify-content-center">
                        <button type="button" className="btn btn-danger" id="restartButton" onClick={this.clearLocal}>
                            <a href="#" className="nav-item nav-link">Start Over</a> {/*Set this to clear local storage instead of a link*/}
                        </button>
                    </div>
                    <div className="col-sm-3 d-flex justify-content-center">Logo goes here!</div>
                </div>
            </div>
        );
    }
}

export default Header

