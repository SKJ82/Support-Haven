import React from 'react';

const About = () => {
    return (
        <div className="text-white py-10">
            <div className="max-w-4xl mx-auto px-8 md:px-4">
                <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
                <p className="text-lg mb-6">
                    Welcome to our platform, where creativity meets funding! We are dedicated to empowering creators by providing them with a space to connect with their fans and receive the support they need to bring their ideas to life. 
                </p>
                <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                <p className="mb-6">
                    Our mission is to foster a community where creators can thrive through the support of their fans. We believe that everyone deserves the opportunity to pursue their passion and turn their creative dreams into reality.
                </p>
                <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
                <p className="mb-6">
                    Creators can set up their profiles, showcase their work, and receive funding directly from fans through various support options. Fans can choose to contribute based on their interests, whether through one-time donations or ongoing subscriptions. 
                </p>
                <h2 className="text-3xl font-semibold mb-4">Benefits for Creators</h2>
                <ul className="list-disc list-inside mb-6">
                    <li>Receive direct financial support from fans.</li>
                    <li>Build a community of dedicated followers.</li>
                    <li>Share exclusive content and updates with supporters.</li>
                    <li>Gain exposure and grow your audience.</li>
                </ul>
                <h2 className="text-3xl font-semibold mb-4">Benefits for Fans</h2>
                <ul className="list-disc list-inside mb-6">
                    <li>Support your favorite creators directly.</li>
                    <li>Access exclusive content and rewards.</li>
                    <li>Be part of a community that shares your interests.</li>
                    <li>Help shape the future of creative projects.</li>
                </ul>
                <h2 className="text-3xl font-semibold mb-4">Join Us!</h2>
                <p>
                    Whether you’re a creator looking for support or a fan wanting to make a difference, we invite you to join our community. Together, we can inspire creativity and innovation!
                </p>
            </div>
        </div>
    );
};

export default About;
