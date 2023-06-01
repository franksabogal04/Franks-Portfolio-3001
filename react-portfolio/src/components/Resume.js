import React from 'react';

const Resume = () => {
    return (
        <section>
            <h2 className="text-center" style={{ color: 'white' }}>Resume</h2>
            <div className="d-flex justify-content-center">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                    Download Resume
                </a>
            </div>
            <ul className="text-center">
                {/* Add more proficiencies */}
            </ul>
        </section>
    );
};

export default Resume;

