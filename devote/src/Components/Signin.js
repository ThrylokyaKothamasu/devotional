// import React, { useState } from 'react';
// import { useSpeechSynthesis } from 'react-speech-kit';

// const SpeakOutText = () => {
//   const [text, setText] = useState('');
//   const { speak } = useSpeechSynthesis();

//   const handleChange = (event) => {
//     setText(event.target.value);
//   };



//   const speakText = () => {
//     speak({ text, lang: 'te-IN' }); // Set the language to Telugu (India)
//   };

//   return (
//     <div>
//       <textarea value={text} onChange={handleChange} />
//       <button onClick={speakText}>Speak</button>
//     </div>
//   );
// };

// export default SpeakOutText;

// import React from "react";
// import Translate from "../Components/Translate";

// function Signin() {
//   return (
//     <>
//       <Translate />
//     </>
//   );
// }

// export default Signin;


import React, { useState } from 'react';

const Signin = () => {
    const [inputText, setInputText] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('te-IN'); // Default language is Telugu

    const speakText = () => {
        if (inputText.trim() !== '') {
            const speech = new SpeechSynthesisUtterance();
            speech.text = inputText;
            speech.lang = selectedLanguage;
            speech.volume = 1;
            speech.rate = 1;
            speech.pitch = 1;

            window.speechSynthesis.speak(speech);
        } else {
            alert('Please enter some text to read.');
        }
    };

    return (
        <div className="container">
            <h1>Text-to-Speech</h1>
            <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter text here..."
            ></textarea>
            <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
            >
                <option value="te-IN">Telugu (India)</option>
                <option value="en-US">English (United States)</option>
                <option value="es-ES">Spanish (Spain)</option>
                <option value="fr-FR">French (France)</option>
                {/* Add more languages as needed */}
            </select>
            <img
                src="speaker-icon.png"
                alt="Speaker Icon"
                className="speaker-icon"
                onClick={speakText}
            />
        </div>
    );
};

export default Signin;
