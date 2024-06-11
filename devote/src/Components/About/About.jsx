import './About.css';
import g from '../Images/girl.avif';

export default function About() {
    return (
        <div className='box1'>
            <h2 className='head'>About Us</h2>
            <div>
                Welcome to Spiritual Stories, your dedicated platform for exploring the timeless epics of Ramayana, Mahabharata, and the sacred text of Bhagavad Gita. Our mission is to make these ancient scriptures accessible, understandable, and enjoyable for people of all ages and backgrounds.
                At Spiritual Stories, we believe in the profound wisdom and enduring relevance of India's ancient texts. Our vision is to bring the timeless stories, teachings, and values of Ramayana, Mahabharata, and Bhagavad Gita to a global audience, fostering a deeper understanding and appreciation of this rich cultural heritage.</div>
            <h3 className='subhead'>What We Offer</h3>
            <div>
                <h4>Comprehensive Story Narratives</h4>
                <p>Dive into the epic tales of Ramayana and Mahabharata, meticulously crafted to provide you with a comprehensive understanding of these legendary stories. Our detailed narratives bring the characters and events to life, capturing the essence of their journeys and the moral lessons they impart.</p>
                <h4>Slokas and Translations</h4>
                <p>Explore the profound slokas from Ramayana, Mahabharata, and Bhagavad Gita. Each sloka is presented in its original Sanskrit form, accompanied by precise translations in multiple languages. This feature allows you to grasp the true meaning and significance of these ancient verses.</p>
                <h4>Voice Over of Slokas</h4>
                <p>Experience the beauty of slokas through our voice-over feature. Listen to the melodious recitation of these sacred verses, enhancing your connection with the text. Whether you are a student, a spiritual seeker, or simply someone who appreciates the rhythmic cadence of Sanskrit, our voice-over feature is designed for you.</p>
            </div>
            <h3 className='subhead'>Our Features</h3>
            <div className='con'>
                <p><strong>User-Friendly Interface</strong>: Navigate through our platform with ease, thanks to our intuitive design and user-friendly interface.<br /></p>
                <p><strong>Multilingual Support</strong>: Access translations of slokas in various languages, making the wisdom of texts accessible to a wider audience.<br /></p>
                <p><strong>Voice Over</strong>: Enjoy the auditory experience of listening to slokas, aiding in better understanding and memorization.<br /></p>
                <p><strong>Regular Updates</strong>: Stay engaged with regular updates and additions to our content, ensuring a continuously enriching experience.</p>
            </div>
            <h3 className='subhead'>Contributers</h3>
            
            <div className='contri'><img src={g} alt="logo" className="i"/><br />
                    <strong>Name</strong>: XXXXXXXXX<br />
                    <strong>Email Id</strong>: abcd@gmail.com<br/>
                   <strong> Contact No</strong>: xxxxxxxxxx
            </div>
            <div className='contri'><img src={g} alt="logo" className="i"/><br />
                    <strong>Name</strong>: XXXXXXXXX<br />
                    <strong>Email Id</strong>: abcd@gmail.com<br/>
                   <strong> Contact No</strong>: xxxxxxxxxx
            </div>
            <div className='contri'><img src={g} alt="logo" className="i"/><br />
                    <strong>Name</strong>: XXXXXXXXX<br />
                    <strong>Email Id</strong>: abcd@gmail.com<br/>
                   <strong> Contact No</strong>: xxxxxxxxxx
            </div>


        </div>
    )
}