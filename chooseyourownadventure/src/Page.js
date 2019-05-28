import React, {Component} from 'react';

class Page extends Component {
    render(){
        return(
            <div className="container" id="storyPanel">
                <div className="row">
                    <div className="col-sm-8" >
                        <h4 className="text-center h4">109</h4>
                        <p>You spend a great deal of time preparing yourself, pacing up and down the cell, while Shan looks on, mystified. When you feel you have reached the correct mental state, you focus your attention on the door. Your initial exertion of will has little effect and you gradually increase the strength of the spell. You have already used up 2 WILLPOWER points when the door begins to creak on its hinges, the thick wood warping. With a surge of effort you throw enough power at the door to use up 3 WILLPOWER points. The timbers snap and the joists squeal, but still the lock will not give. A last desperate attempt produces 4 WILLPOWER points of energy that splinters the door. A mighty noise echoes down the corridor as the door crashes to the ground. You have used 4 WILLPOWER points and lost 1 ENDURANCE point due to the prolonged strain.</p>
                        <p>You and Shan rush to the top of the steps and out into the corridor. Already, further down the passage to your right you can hear someone shouting. You recognize the voice of the jailer and the sound of his clanking keys.</p>
                    </div>
                    <div className="col-sm">Display of current attributes</div>
                </div>
                <div className="row">
                    <div className="col-sm" id="choices">
                        <p>If you wish to confront the jailer, turn to 243.</p>
                        <p>if you wish to go in the opposite direction, turn to 333.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page