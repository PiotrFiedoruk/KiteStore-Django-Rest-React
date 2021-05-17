import { Spinner } from 'react-bootstrap'
import React from 'react';

function Loader() {
    return (
        <Spinner
            animation="border"
            role="status"
            variant="primary"
            style={{
                height: '100px',
                width: '100px',
                margin: '100px',
                display: 'block'
        }}>
            <span className="sr-only">Loading...</span>
        </Spinner>
    );
}

export default Loader;