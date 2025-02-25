## Search With Gemini
A Chrome extension that uses Google's Gemini AI to explain selected text on any webpage.


## Features

Right-click any selected text and choose "Explain for me" to get a simplified explanation powered by Google's Gemini AI language model \
Works on any webpage 


## Installation

Manual Installation \
Download or clone this repository \
Go to https://aistudio.google.com/apikey and generate a Gemini API for yourself and replace it in line 33 of background.js file (javascriptCopyconst apiKey = "YOUR_API_KEY_HERE";) \
Open Chrome and navigate to chrome://extensions  \
Enable "Developer mode" using the toggle in the top-right corner \
Click "Load unpacked" and select the directory containing the extension files \
The extension icon should now appear in your browser toolbar

## Usage

Select any text on a webpage that you want explained \
Right-click on the selection \
Choose "Explain for me" from the context menu \
A popup will appear with a simplified explanation of the selected text 


## Development
To modify or extend this extension: \
Edit the source files as needed \
For testing, reload the extension in chrome://extensions/ by clicking the refresh icon \
Make sure to test your changes on various websites

## Privacy
This extension sends selected text to Google's Gemini API for processing. No user data is stored by the extension itself, but be aware of Google's privacy policy regarding the Gemini service.
