import React, {Component} from 'react';

class Header extends Component {
    render(){
        return(
            <div className="container-fluid" id="header">
                <div className="row align-items-center">
                    <div className="col-sm-6 text-center">
                        <h1>Choose Your Own Adventure!</h1>
                    </div>
                    <div className="col-sm-3 d-flex justify-content-center">
                        <button type="button" className="btn btn-danger" id="restartButton">
                            <a href="#" className="nav-item nav-link">Start Over</a>
                        </button>
                    </div>
                    <div className="col-sm-3 d-flex justify-content-center">Logo goes here!</div>
                </div>
            </div>
        );
    }
}

export default Header