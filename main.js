const quotes = [
    "All our dreams can come true, if we have the courage to pursue them.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Show me a person who has never made a mistake and I'll show you someone who has never achieved much.",
    "Failure is the condiment that gives success its flavor.",
    "Success means doing the best with what we have. Success is the doing, not the getting; in the trying, not the triumph. Success is a personal standard, reaching for the highest that is in us, becoming all that we can be.",
    "In a moment of decision, the best thing you can do is the right thing to do, the next best thing is the wrong thing, and the worst thing you can do is nothing.",
    "Amateurs sit and wait for inspiration, the rest of us just get up and go to work.",
    "Take the first step in faith. You don't have to see the whole staircase, just take the first step.",
    "Don't wait. The time will never be just right.",
    "Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength."
]

const generateMessage = () => {
    const randomQuote = Math.floor(Math.random() * quotes.length);

    return quotes[randomQuote];
}

console.log(generateMessage());
