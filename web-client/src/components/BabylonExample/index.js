import React from 'react';
import testRendering from '../../rendering/testRendering'

import './BabylonExample.css';

class BabylonExample extends React.Component {
    componentDidMount(){
        testRendering('BabylonExample-render-target');
    }

    render(){
        return (
            <div>
                <h1>BABYLON EXAMPLE</h1>
                <canvas id='BabylonExample-render-target' />
            </div>
        )
    }
}

export default BabylonExample;