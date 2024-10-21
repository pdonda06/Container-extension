
# Container Extension

This is a Chrome extension that allows users to fill in their personal details, such as their name, social media profiles, and other common form fields automatically on websites. It's designed to save time by automatically filling forms on websites such as GitHub, LinkedIn, Twitter, etc.

## Features
- Automatically fills out user details in forms.
- Saves user details such as name, address, mobile number, and social media links.
- Uses Chrome's storage to save and sync data across sessions.
- Supports forms on different websites with common fields.

## Installation

### Step 1: Clone the Repository

```bash
git clone <repository-url>
```

### Step 2: Load the Extension in Chrome

1. Open Chrome and go to `chrome://extensions/`.
2. Enable **Developer Mode** by clicking the toggle switch in the upper-right corner.
3. Click **Load Unpacked** and select the folder where you cloned the repository.

### Step 3: Save Your Details

1. After installing the extension, click the extension icon in the Chrome toolbar.
2. A popup will appear where you can enter your personal information (name, address, phone number, social media links).
3. Click **Save Details** to store the information in Chrome's local storage.

## Usage

1. Visit any website with common form fields like first name, last name, social media URLs, and so on.
2. The extension will detect these fields and automatically fill them with the saved information.
3. You can update your details anytime by clicking on the extension icon in the toolbar.

## Project Files

- **manifest.json**: Contains metadata about the Chrome extension.
- **popup.html**: The form that appears when the extension icon is clicked, allowing users to enter and save their details.
- **popup.js**: Handles saving user input in Chrome's local storage.
- **style.css**: Custom styling for the form in the popup.

## How It Works

1. **popup.js**: This script saves the details entered by the user into Chrome's storage.
## Permissions

- **Storage**: Allows the extension to store user details.
- **ActiveTab**: Allows the content script to access and modify web pages.
  
## License

This project is licensed under the MIT License.

