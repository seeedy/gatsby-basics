import React from 'react';

export default ({ children }) => (
    <div style={{ margin: '3rem auto', maxWidth: 650, padding: '0 1rem' }}>
        <h3>Static website</h3>
        {children}
    </div>
);
