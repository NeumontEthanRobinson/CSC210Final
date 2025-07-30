async function loadQuoteOfTheDay() {
    try {
        const proxy = 'https://api.allorigins.win/raw?url=';
        const target = encodeURIComponent('https://zenquotes.io/api/today');
        const response = await fetch(proxy + target);
        const data = await response.json();

        console.log("Fetched data: ", data);

        const quote = data[0];

        document.getElementById('quote-text').textContent = `"${quote.q}"`;
        document.getElementById('quote-author').textContent = `— ${quote.a}`;
    } catch (error) {
        console.log("An error happened:", error);
        return null;
    }
}

loadQuoteOfTheDay();