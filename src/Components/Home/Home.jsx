import React from 'react';

const Home = () => {
    return (
        <div className="absolute top-0 grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
            <div className="banner-text ml-10">
                <h2 className="text-8xl font-bold text-cyan-700">writing for your success.</h2>
                <p className="mt-16 text-stone-500"> I seemed to be doing well, my career progress didn’t make me happy. I was losing connection with my self-identity. I merely pretended to be happy, with a smile painted on my face.I can help readers and clients find their writing voice, share their ideas, and discover the joy of writing. I feel happy when I find the right balance between work and relaxation, when I can take care of myself.</p>
            </div>
            <div>
                <img className="rounded-l-large h-4/6 ml-12" src="http://askproject.net/wryter/wp-content/uploads/sites/36/2021/10/illustration_3_2.png" alt="" />
            </div>
        </div>
    );
};

export default Home;