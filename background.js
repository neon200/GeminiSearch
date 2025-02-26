chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "getDetailedSummary",
        title: "Explain for me",
        contexts: ["selection"]
    });
});

// Optional: Add an action for when the extension icon is clicked
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            alert("Select text and right-click to use the 'Explain for me' feature.");
        }
    });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    if (info.menuItemId === "getDetailedSummary") {
        const prompt = info.selectionText || "Please provide text to explain.";
        const response = await fetchGeminiResponse(prompt);

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: (msg) => alert(msg),
            args: [response]
        });
    }
});

async function fetchGeminiResponse(prompt) {
    const apiKey = "YOUR_API_KEY_HERE"; // Replace with your Google Gemini API key
    try {
       const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [{ 
                    role: "user", 
                    parts: [{ 
                        text: `Please explain in simple terms: ${prompt}` 
                    }] 
                }]
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        if (data.candidates && data.candidates.length > 0) {
            return data.candidates[0].content.parts[0].text.trim();
        } else {
            return "Error: Unable to process the response. Please try again.";
        }
    } catch (error) {
        console.error("Error fetching Gemini response:", error.message);
        return "An error occurred while connecting to Gemini AI. Please try again later.";
    }
}
