## Homework 4: Architecture

All views are located under info442project/homeowork/

#### Views:
HTML, Javascript,  WebSQL
- **Navbar**
  - Contains the logo branding image, and directs users to the other html files
  - Resides on the client side only
  - Does not communicate with other controllers
- **Index.html**
  - This page displays a brief summary of what Donaid is and what can be done with it
  - Resides on client-side only
  - Does not communicate with other components
- **campaignType.html**
  - This page prompts the user to select what type of campaign they want to create
  - Resides on client-side only
  - Communicates the information to the local storage
- **campaignTitle.html**
  - This page prompts the user to input a title and and description for the campaign that they are creating
  - Resides on client-side only
  - Communicates the information to the local storage
- **campaignPurpose.html**
  - This page prompts the user to input the purpose of the campaign that they are creating
  - Resides on client-side only
  - Communicates the information to the local storage
- **campaignDetails.html**
  - This page prompts the user to input additional details of the campaign such as location, upload a photograph
  - Resides on client-side only
  - Communicates with the local storage by extracting the stored information and store them into web SQL
- **campaignsBrowsing.html**
  - This page displays all available campaigns in card views
  - Resides on client-side only
  - Communicates with web SQL
- **campaign.html**
  - This page displays information of a specific campaign
  - Resides on client-side only
  - This view communicates with the local variable storage

#### Model:
Javascript, WebSQL
- **WebSQL**
  - Saves locally stored variables from campaignType, campaignTitle, campaignPurpose, campaignDetails, and sends locally stored information to Campaign page.
  - Resides on server-side only
  - We will not develop this ourselves and will be utilizing webSQL
  - Source: https://developers.google.com/web/tools/chrome-devtools/storage/websql


#### Controller:
HTML, Javascript,  WebSQL
- **Next button in campaignType.html**
  - This button stores the user input and saves it to localStorage in Browser
  - Resides on client-side only
  - Communicates with localstorage in browser
- **Next button in campaignTitle.html**
  - This button stores the user input and saves it to localStorage in Browser
  - Resides on client-side only
  - Communicates with localstorage in browser
- **Next button in campaignPurpose.html**
  - This button stores the user input and saves it to localStorage in Browser
  - Resides on client-side only
  - Communicates with localstorage in browser
- **Submit button in campaignDetails.html**
  - This button stores the user input and the image that they upload and saves it to localStorage in Browser
  - Resides on client-side only
  - Communicates with localstorage in browser
