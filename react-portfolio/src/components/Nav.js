import React from 'react';
import { Nav } from 'react-bootstrap';

const Navigation = ({ currentSection, handleSectionChange }) => {
    return (
        <Nav
            className="justify-content-end bg-dark"
            activeKey={currentSection}
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/background-img2.jpg)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                color: 'white',
                fontSize: '1.2rem',
                padding: '15px'
            }}
        >
            <Nav.Item>
                <Nav.Link onClick={() => handleSectionChange('About Me')}>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => handleSectionChange('Portfolio')}>Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => handleSectionChange('Contact')}>Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => handleSectionChange('Resume')}>Resume</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default Navigation;






