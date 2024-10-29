chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "scrape") {
        // Log to console to check if the message is received
        console.log("Scraping data...");

        // Attempt to scrape all the text from <p> tags
        const paragraphs = Array.from(document.querySelectorAll('p')).map(p => p.innerText);

        // Log the scraped paragraphs for debugging
        console.log(paragraphs);

        // Check if any paragraphs were found
        if (paragraphs.length > 0) {
            sendResponse({ data: paragraphs.join('\n') });
        } else {
            sendResponse({ data: "No data found." });
        }
    }
});
