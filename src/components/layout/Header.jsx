import React from 'react';

const Header = () => {
    return (
        <header className="text-center text-white" style={headerStyle}>
            <h1>Employee Directory</h1>
            <p>Click on carrots to filter by heading or use the search box to narrow your results.</p>
        </header>
    );
};

const headerStyle = {
    background: '#204064',
    padding: '20px',
    borderBottom: "4px solid red"
}

export default Header;