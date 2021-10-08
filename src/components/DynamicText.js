import React from 'react';
import { useEffect } from 'react';

const DynamicText = () => {

        let array = ["Front-end", "Web", "Javascript", "Sympa"];
        let wordIndex = 0;
        let letterIndex = 0;

        useEffect(() => {

        const target = document.querySelector('#text-target');

        const createLetter = () => {
            const letter = document.createElement("span");
            target.appendChild(letter);

            letter.classList.add("letter");
            letter.style.opacity= "0";
            letter.style.animation = "anim 5s ease forwards";
            letter.textContent = array[wordIndex][letterIndex];

            setTimeout(() => {
                letter.remove();
            }, 2000);
        };

        const loop = () => {
            setTimeout(() => {
                if (
                    wordIndex >= array.length) {
                    wordIndex = 0;
                    letterIndex = 0;
                    loop();
                } else if (
                    letterIndex < array[wordIndex].length) {
                    createLetter();
                    letterIndex++;
                    loop();
                    } else {
                        letterIndex = 0;
                        wordIndex++;
                        setTimeout(() => {
                            loop();
                        }, 2000);
                    }
        }, 50);
    };
    loop();
},[]);
    return (
        <div>
            <span className="dynamic-text">
                <span className="fix-text">Développeur</span>
                <span id="text-target"></span>
            </span>
        </div>
    );
};

export default DynamicText;