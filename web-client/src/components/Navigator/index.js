import React from 'react';
import { Link } from 'react-router-dom';

import './Navigator.css';

export default props => (
    <ul className="Navigator-list">
        <li>
            <Link to="/babylon-example">Babylon Example</Link>
        </li>
        <li>
            <Link to="/hexagonals-test">Hexagonals Test</Link>
        </li>
    </ul>
)