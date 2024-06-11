async function translateText() {
    const text = document.getElementById('translateInput').value;
    const targetLanguage = document.getElementById('targetLanguage').value;
    try {
        const response = await fetch('https://libretranslate.com/translate', {
            method: 'POST',
            body: JSON.stringify({
                q: text,
                source: 'en',
                target: targetLanguage,
                format: 'text'
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) {
            const errorBody = await response.text();
            console.error(`Error: ${response.statusText}, Body: ${errorBody}`);
            throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();
        document.getElementById('translationResult').innerText = result.translatedText;
    } catch (error) {
        console.error('Translation error:', error);
        document.getElementById('translationResult').innerText = 'Translation failed. Please try again later.';
    }
}
