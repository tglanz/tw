import React from 'react';
import { Route } from 'react-router-dom';

import BabylonExample from '../BabylonExample';

export default props => (
    <div className="Route-container">
        <Route path="/babylon-example" component={BabylonExample} />
    </div>
)