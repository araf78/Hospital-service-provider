import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiFillInstagram,AiFillLinkedin  } from 'react-icons/ai';
import { ImYoutube } from 'react-icons/im';
import './Footer.css'

const Footer = () => {
    return (
        <div className="absolute left-0 right-0 bottom-0 footer bg-cyan-800 text-gray-50 p-14 flex justify-around items-center">
            <div className='text-2xl'>Copyright © 2022 ASK Project</div>
            <div className='flex justify-center items-center'>
               <span>Follow us</span>
               <span><FaFacebookSquare/></span>
               <span><AiFillInstagram/></span>
               <span><AiFillLinkedin/></span>
               <span><ImYoutube/></span>
            </div>
        </div>
    );
};

export default Footer;