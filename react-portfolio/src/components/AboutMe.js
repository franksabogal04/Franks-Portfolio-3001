import React from 'react';

const AboutMe = () => {
    return (
        <section>
            <h1 style={{ color: 'white' }}>
                HI,
            </h1>
            <h2 style={{ color: 'white' }}>
                MY NAME IS FRANK SABOGAL.
            </h2>
            <div style={{ overflow: 'auto' }}>
                <img
                    src={process.env.PUBLIC_URL + '/portfolio-img2.png'}
                    alt="My Photo"
                    style={{ float: 'right', width: '200px', height: 'auto', marginRight: '10px', marginBottom: '10px' }}
                />
                <p style={{ color: 'white', marginBottom: '10px' }}>As a new web developer, I am excited to join a forward-thinking company that will provide me
                    with opportunities to grow and enhance my skills. With a solid foundation in Front-End and Back-End, I am eager to contribute to projects and collaborate with talented teams. I can't wait
                    to showcase my portfolio and demonstrate the results of my hard work and dedication. Let's build something
                    amazing!</p>
            </div>
        </section>
    );
};

export default AboutMe;








