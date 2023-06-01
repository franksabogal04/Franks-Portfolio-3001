import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <a href="https://github.com/your-github-profile" style={{ color: 'white', marginRight: '10px' }}>
                    GitHub
                </a>
                <a href="https://linkedin.com/your-linkedin-profile" style={{ color: 'white', marginRight: '10px' }}>
                    LinkedIn
                </a>
                <a href="https://your-third-platform-profile" style={{ color: 'white' }}>
                    Third Platform
                </a>
            </div>
        </footer>
    );
};

export default Footer;


