function pronounceWord(word) {
    const wordInput = word || document.getElementById('wordInput').value;

    // Check if the browser supports the SpeechSynthesis API
    if ('speechSynthesis' in window) {
        // Create a new SpeechSynthesisUtterance object
        const utterance = new SpeechSynthesisUtterance(wordInput);

        // Set the language
        utterance.lang = 'en-US';

        // Speak the word
        speechSynthesis.speak(utterance);

        // Display phonetic transcription and syllables
        const { phoneticTranscription, syllables } = analyzeWord(wordInput);
        displayPhoneticTranscription(phoneticTranscription);
        displaySyllables(syllables);
    } else {
        // Fallback for browsers that do not support SpeechSynthesis API
        alert("Sorry, your browser doesn't support speech synthesis.");
    }
}

function displayPhoneticTranscription(phoneticTranscription) {
    const phoneticTranscriptionElement = document.getElementById('phoneticTranscription');
    phoneticTranscriptionElement.innerText = `/${phoneticTranscription}/`;
}

function displaySyllables(syllables) {
    const syllablesElement = document.getElementById('syllables');
    syllablesElement.innerText = `Syllables: ${syllables.join('-')}`;
}

// Function to analyze word and get phonetic transcription and syllables
function analyzeWord(word) {
    // Replace this with your own logic to analyze the word
    // Here's just a placeholder example
    const phoneticTranscription = getPhoneticTranscription(word);
    const syllables = getSyllables(word);
    return { phoneticTranscription, syllables };
}

// Function to get phonetic transcription
function getPhoneticTranscription(word) {
    // Replace this with your own logic to generate the phonetic transcription
    // Here's just a placeholder example
    // You can use an API or a dictionary database to fetch the phonetic transcription
    // For simplicity, let's just return the input word itself as the phonetic transcription
    return word;
}

// Function to get syllables
function getSyllables(word) {
    // Replace this with your own logic to syllabify the word
    // Here's a simple example of syllabification based on vowels and surrounding consonants
    const vowels = 'aeiouy';
    let syllables = [];
    let currentSyllable = '';

    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        const isVowel = vowels.includes(char.toLowerCase());

        if (isVowel) {
            // If the current character is a vowel, start a new syllable
            syllables.push(currentSyllable);
            currentSyllable = char;
        } else {
            // If the current character is a consonant, add it to the current syllable
            currentSyllable += char;
        }
    }

    // Add the last syllable
    syllables.push(currentSyllable);

    // Filter out empty syllables
    syllables = syllables.filter(syllable => syllable !== '');

    return syllables;
}
