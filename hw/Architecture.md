## Homework 4: Architecture

All views are located under info442project/homeowork/src/components

#### Views:
HTML, Javascript,  WebSQL, React
- **Header.js**
  - This components ontains the logo branding image, and directs users to the other html files
  - Resides on the client side only
  - Does not communicate with other controllers
- **LandingPage.js**
  - This page displays a brief summary of what Donaid is and what can be done with it
  - Resides on client-side only
  - Does not communicate with other components
- **CampaignType.js**
  - This page prompts the user to select what type of campaign they want to create and route user to campaignTitle.js
  - Resides on client-side only
  - Communicates the information to the local storage
- **CampaignTitle.js**
  - This page prompts the user to input a title and and description for the campaign that they are creating and route user to campaignPurpose.js
  - Resides on client-side only
  - Communicates the information to the local storage
- **CampaignPurpose.js**
  - This page prompts the user to input the purpose of the campaign that they are creating and route route user to campaignDetails.js
  - Resides on client-side only
  - Communicates the information to the local storage
- **CampaignDetails.js**
  - This page prompts the user to input additional details of the campaign such as location, upload a photograph
  - Resides on client-side only
  - Communicates with the local storage by extracting the stored information and store them into web SQL
- **CampaignsBrowsing.js**
  - This page displays all available campaigns in card views
  - Resides on client-side only
  - Communicates with web SQL
- **Campaign.js**
  - This page displays information of a specific campaign
  - Resides on client-side only
  - This view communicates with web SQL
- **Footer**
  - This component displays contact information.
  - Resides on client-side only
  - Does not communicate with other components



#### Model:
Javascript, WebSQL
- **WebSQL**
  - Saves locally stored variables from campaignType, campaignTitle, campaignPurpose, campaignDetails, and sends locally stored information to Campaign page.
  - Resides on server-side only
  - We will not develop this ourselves and will be utilizing webSQL
  - Source: https://developers.google.com/web/tools/chrome-devtools/storage/websql


#### Controller:
HTML, Javascript,  WebSQL, React
- **Next button in campaignType.js**
  - This button stores the user input and saves it to localStorage in Browser and route user to campaignTitle.js
  - Resides on client-side only
  - Communicates with localstorage in browser
- **Next button in campaignTitle.js**
  - This button stores the user input and saves it to localStorage in Browser and route user to campaignPurpose.js
  - Resides on client-side only
  - Communicates with localstorage in browser
- **Next button in campaignPurpose.js**
  - This button stores the user input and saves it to localStorage in Browser and route user to campaignDetails.js
  - Resides on client-side only
  - Communicates with localstorage in browser
- **Submit button in campaignDetails.js**
  - This button stores the user input and the image that they upload and saves it to localStorage in Browser
  - Resides on client-side only
  - Communicates with localstorage in browser
