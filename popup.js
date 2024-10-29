document.getElementById('scrapeBtn').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
            const activeTab = tabs[0];

            // Adding a small timeout before sending the message
            setTimeout(() => {
                chrome.tabs.sendMessage(activeTab.id, { action: "scrape" }, (response) => {
                    if (chrome.runtime.lastError) {
                        document.getElementById('output').innerText = "Error: " + chrome.runtime.lastError.message;
                    } else if (response) {
                        document.getElementById('output').innerText = response.data;
                    } else {
                        document.getElementById('output').innerText = "No data found.";
                    }
                });
            }, 100); // 100 ms delay
        } else {
            document.getElementById('output').innerText = "No active tab found.";
        }
    });
});
