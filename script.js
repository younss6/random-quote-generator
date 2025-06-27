const quotes = [
  "I don’t know the future. I didn’t come here to tell you how this is going to end. I came here to tell you how it’s going to begin.",
  "Pirates are evil? The Marines are righteous?... Justice will prevail, you say? But of course it will! Whoever wins this war becomes justice!",
  "The richest of the rich is the one who is not a prisoner to greed.",
  "Dream big and dare to fail.",
  "Action is the foundational key to all success."
];

function newQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[index];
}
