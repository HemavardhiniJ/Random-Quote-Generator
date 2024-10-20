async function getRandomQuote() {
  try {
      const response = await fetch('https://dummyjson.com/quotes/random');
      const quote = await response.json();

      // Display the quote and author
      document.getElementById('quoteText').innerText = `"${quote.quote}"`;
      document.getElementById('quoteAuthor').innerText = `- ${quote.author}`;
  } catch (error) {
      console.error('Error fetching quote:', error);
      document.getElementById('quoteText').innerText = "Failed to fetch quote.";
      document.getElementById('quoteAuthor').innerText = "";
  }
}

// Fetch a quote when the page loads
document.addEventListener('DOMContentLoaded', getRandomQuote);
