import React from 'react';
import UploadPhoto from './components/UploadPhoto';
import VoteManager from './components/VoteManager';
import Home from './components/Home';
import { BrowserRouter, Route} from 'react-router-dom'

const Photos = () => (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/uploadPhoto" component={UploadPhoto}/>
            <Route path="/VoteManager" component={VoteManager}/>
        </div>
    </BrowserRouter>
);

export default Photos;
