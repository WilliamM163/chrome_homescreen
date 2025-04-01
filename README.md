# Chrome Homescreen
A fully customizable homescreen for Google Chrome (and other browsers).

## Description
Chrome Homescreen is a project aimed at providing users with a completely personalized homescreen experience within
their web browser. It allows for basic customization, enabling users to tailor their start page to their specific
needs and preferences.  
For more customization users can fork the repo and edit the code.

## Technologies Used
-   ReactJS
-   localStorage API

## Installation
1.  **Clone the repository**
    ```bash
    git clone https://github.com/WilliamM163/chrome_homescreen
    cd chrome_homescreen
    ```

2. **Installing Dependencies**
    ```bash
    npm install
    npm run dev
    ```

## Installation as a Chrome Extension

1.  **Build the Extension:**
    ```bash
    npm run build
    ```
    This command compiles the extension's source code and places the output in the `dist` folder.

2.  **Open Chrome Extensions Page:**
    * Open Google Chrome.
    * In the address bar, type `chrome://extensions/` and press Enter.

3.  **Enable Developer Mode:**
    * In the top right corner of the Extensions page, toggle the "Developer mode" switch to the "on" position.

4.  **Load Unpacked Extension:**
    * Click the "Load unpacked" button.
    * Navigate to your project directory.
    * Select the `dist` folder and click "Select Folder" (or "Open").

5.  **Verify Installation:**
    * When you open a new tab you should be greeted by an option to keep extension as the prefered option for new tabs

## Current Status
![Current Screenshot](./public/current%20screenshot.png)

## Still todo
- [x] Select Font
- [x] Save and Update Font Style
- [x] Change Background
- [x] Alter special character for url search parameters
- [ ] Change Search Box and Clock Transparency