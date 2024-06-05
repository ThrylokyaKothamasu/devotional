import './Home.css';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../Images/Krishna and Arjuna.jpg';
import img2 from '../Images/ramsita.png';
import img3 from '../Images/radha.png';
import r1 from '../Images/rs.jpg';
import r2 from '../Images/ramashabari.jpeg';
import r3 from '../Images/sitahanuman.jpeg';
import r4 from '../Images/rama.jpg';
import k1 from '../Images/krishna3.jpg';
import k2 from '../Images/yashodakrishna.jpg';
import k3 from '../Images/krishna2.jpg';
import k4 from '../Images/krishnarjuna.jpg';



function Home() {

    const slidesRef = useRef(null);
    let slideIndex = 0;
    useEffect(() => {
        const slides = document.querySelector(".slides");
        let slideIndex = 0;

        function showSlide(index) {
            slides.style.transform = `translateX(-${index * 100}%)`;
        }

        function nextSlide() {
            slideIndex = (slideIndex + 1) % slides.children.length;
            showSlide(slideIndex);
        }

        const intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds  

        return () => clearInterval(intervalId);
    }, []); // Empty dependency array to run only once on component mount


    return (
        <div>
            <h2 className='top'><marquee>"Discover the Depths of Spiritual Devotion"</marquee></h2>


            <div className="slider">
                <div className="slides" ref={slidesRef}>
                    <div className="slide"><img src={r1} alt="Image1" /></div>
                    <div className="slide"><img src={k1} alt="Image2" /></div>
                    <div className="slide"><img src={r2} alt="Image3" /></div>
                    <div className="slide"><img src={k2} alt="Image3" /></div>
                    <div className="slide"><img src={r3} alt="Image3" /></div>
                    <div className="slide"><img src={k3} alt="Image3" /></div>
                    <div className="slide"><img src={r4} alt="Image3" /></div>
                    <div className="slide"><img src={k4} alt="Image3" /></div>

                </div>
            </div>




            <div className='section' style={{marginTop:'550px'}}>
                <div className='home-style'>
                    <div className='banner'>
                        <img src={img1} alt="banner" width="500px" height="500px" className='image-1' />
                    </div>
                    <div className='content-1'>
                        <div className='box'>
                            <h3 style={{ textAlign: "center" }}>The Bhagavad Gita</h3>
                            <p style={{ textAlign: "justify" }}>The Bhagavad Gita, a sacred Hindu text, is a dialogue between Lord Krishna and the warrior prince Arjuna, taking place on the battlefield of Kurukshetra. It addresses the moral dilemma Arjuna faces about fighting in a righteous war against his own kin. Krishna imparts wisdom on duty, righteousness, and the path to spiritual liberation, emphasizing selflessness, devotion, and the performance of one's duty without attachment to outcomes. The Gita teaches that true fulfillment comes from aligning one's actions with dharma (righteousness) and surrendering the ego to the divine will, ultimately leading to self-realization and inner peace.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section'>
                <div className='home-style'>
                    <div className='content'>
                        <div className='box'>
                            <h3 style={{ textAlign: "center" }}>The Ramayana</h3>
                            <p style={{ textAlign: "justify" }}>The Ramayana, one of Hinduism's major epics, narrates the life of Lord Rama, the seventh avatar of Vishnu, and his journey to rescue his wife Sita from the demon king Ravana. It explores themes of duty, righteousness, and the triumph of good over evil, showcasing Rama's adherence to dharma despite facing numerous trials and challenges. The epic also highlights the importance of familial bonds, loyalty, and the consequences of actions. Through its narrative, the Ramayana inspires devotion, moral reflection, and the pursuit of virtue.</p>
                        </div>
                    </div>
                    <div className='banner'>
                        <img src={img2} alt="banner" width="500px" height="500px" className='image' />
                    </div>
                </div>
            </div>
            <div className='section'>
                <div className='home-style'>
                    <div className='banner'>
                        <img src={img3} alt="banner" width="500px" height="500px" className='image-1' />
                    </div>
                    <div className='content-1'>
                        <div className='box'>
                            <h3 style={{ textAlign: "center" }}>The Mahabharata</h3>
                            <p style={{ textAlign: "justify" }}>The Mahabharata, another ancient Indian epic, chronicles the Kurukshetra War between the Pandavas and the Kauravas, two branches of the Kuru dynasty. It encompasses various philosophical and ethical discourses, including the Bhagavad Gita, which is a part of it. The Mahabharata delves into complex familial relationships, power struggles, and the consequences of greed and ego. It offers profound insights into duty, righteousness, and the eternal struggle between right and wrong. Despite its epic scale and diverse themes, the Mahabharata ultimately emphasizes the importance of dharma and the pursuit of truth and justice.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='myth'>Interested about Myths?---------<Link to="/Myths">Myths</Link></div>
        </div>
    );
}

export default Home;
