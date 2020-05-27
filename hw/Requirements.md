### Requirements - Donaid

#### Accessibility
- All images will include alternate text **(complete)**
- Text will be tagged as H1, H2, body text, etc. respectively **(complete)**
- Color contrast will be WCAG double AA compliance meaning a contrast ratio of at least 4:5:1 **(complete)**
- Our target devices are desktop screens. Mobile responsiveness is not a priority for the scope of this project **(complete)**

#### Landing page (Reference Image 1)
- The landing page will contain the “Top Nav Bar” which contains navigation to pages specific in Top Nav Bar section below **(complete)**
- Section one
    - The hero image will be high resolution with min 1280x1084. **(revised - not found appropriate image, replaced with text)**
    - The landing page will contain two cards, “Create Campaign” and “Browse Campaigns”. **(complete)**
    - The titles of the cards will be H2 titles, “Create Campaign”  and “Browse Campaigns” respectively. **(revised - changed to h3 titles to fit reading hierarchy of text)**
    - Each of the cards will contain 1 descriptive image.**(complete)**
    - Each of the cards will contain 1 description text of 200 max char.**(complete)**
    - Each of the cards will contain 1 button to the respective action. (browse or create) **(complete)**
- Section Two [Footer] reference **image 9** **(complete)**
    - Aligned to the let of the footer
        - This footer Includes a non clickable Donaid logo image
        - Below is non clickable text of Seattle, WA and an all Rights reserved text
    - Aligned to the right of the footer is the donaid email, donaid phone number and below three social media account buttons
        - Facebook icon linking to facebook.com
        - Twitter icon linking to twitter.com
        - Linkedin icon linking to linkedin.com

#### Top Nav Bar (Same across pages unless otherwise stated)
- Aligned to the left side of the bar in order: **(revised - aligned to the right side so that the buttons won’t overlap with the logo when user has a smaller screen size)**
  - The Logo image will route the user to the home page when the user clicks on it. **(complete)**
  - The navigation tabs will contain “Home” and “Browse” in order. **(complete)**
- Aligned to the right
  - The “Create Campaign” button will route the user to the “Create a Campaign” page. **(complete)**


#### Create a campaign page
- The “Create a Campaign” page will include the Top nav bar. **(complete)**
- Each of the following sections will be a full page. **(complete)**
- “What Type of Campaign” Section: **image 2**
  - 3 categories of campaigns, “Money”,”Supplies” and “Human Resource” will be presented as buttons to allow user selection. Reference **image 2** for button layout. **(complete)**
  - Each button will route the user to the respective category page. **(complete)**
  - The “Next” button will confirm input and move on to the next section page. **(complete)**
  - Error Handling: if the next button is clicked and required fields are empty the page will reload and the “Required” text and asterisks will turn red. **(revised)**
- “What is Your Campaign Title” Section: **image 3**
  - There will be an H1 header with the text ”What type of Campaign?” **(complete)**
  - The list and description in image 3 is not clickable and only text **(complete)**
  - Below is a text box field with a maximum of 30 characters inputted. **(complete)**
  - The “Next” button will confirm input and move on to the next section page. **(complete)**
  - Error Handling: if the next button is clicked and required fields are empty the page will reload and the “Required” text and asterisks will turn red. **(Revised) refer “Revision Error Handling”**
**
- “Explain the Purpose of the Campaign” Section: **image 4**
  - Insert campaign description
    - The text input box of campaign description will have no char limit. **(complete)**
    - The text input box of campaign description will allow lists. **(complete)**
    - The text input box of campaign description will not allow media input. **(complete)**
  - Insert Campaign goal
    - The text input box will take in any number **(complete)**
    - The “Next” button will confirm input and move on to the next section page. **(complete)**
    - Error Handling: if the next button is clicked and required fields are empty the page will reload and the “Required” text and asterisks will turn red. **(Revised) refer “Revision Error Handling”**
  - “Add Details” Section: **image 5**
    - The 3 form text fields will allow users to input information including location, email and phone number. **(complete)**
    - Uploading photos and videos in the Media input field will be optional.  **(revised - user can only upload photos because our use of firebase limits our ability to 1mb)**
    - The background of the Media input field will be a photo icon. **(complete)**
    - The Media input field will contain an upload button that prompts a computer file selector. **(complete)**
    - The “Submit” button will direct the user to the recently created campaign page **(complete)**
    - Error Handling: if the submit button is clicked and required fields are empty the page will reload and the “Required” text and asterisks will turn red. **(Revised) Revision Error Handling:** the required * are now static and used as a mitigation factor to prevent users from causing the error. Once the error is produced users are prompted by a pop up box to fix the issue. This will continue until the issue is fixed.


#### Browse campaigns page (**Image 6**)
- The “Browse Campaigns” Page will include Top nav bar. **(complete)**
- Section one
  - The drop down button next to “Type of campaign:” will allow users to filter campaigns available. **(complete)**
  - The filter options are campaign type options: money, supplies, human resources. **(complete)**
  - The drop down button next to “Sort By:” will allow users to sort campaigns available. **(complete)**
  - User will be able to sort campaigns by alphabetical order and date posted. **(complete)**
- Section two
  - View campaign result cards
    - The campaigns will be displayed in cards.**(complete)**
    - There will be 3 cards per row when the cards are displayed. **(complete)**
    - Each campaign card will include the campaign name. **(complete)**
    - Each campaign card will include a description text with 200 max char. **(complete)**
    - Each campaign card will include a “Learn more” button for user to view more details. **(complete)**
    - The “Learn more” button will route user to the corresponding campaign page. **(complete)**


#### Campaign page (**Image 7**)
- The Campaign Page will include the top nav bar. **(complete)**
- Section one In order
  - Section 1.1
    - The Campaign page will include the image uploaded from the user in Create a Campaign page Add Details section will be displayed. **(complete)**
    - If a user did not upload an image, a static general health care image will be displayed. **(complete)**
  - Section 1.2 left aligned to section 1.1
    - The view of current donations status/progress in view as a progress bar with 0 on the left and the goal number on the right of the bar. **(complete)**
    - Pledge action button
      - Button has text “Support” **(revised - change to “Donate to Campaign” to make a clearer call to action)**
- Section two
  - Section 2.1
    - The Campaign page will include the name of the campaign as a H1 title text.**(revised - changed to H2 title to fit reading hierarchy)**
    - The Campaign page will include a summary description text of the campaign.**(complete)**
  - Section 2.2 right aligned to section 2.1
    - Information about user, name as H2 text, title, body text **(revised no name to not collect users personal information)**
- Section three: Image 8 popup
  - One the donate button is clicked a window pops out to ask users to input how many items they're going to donate and the user's email address.**(complete)** **Image 8**
    - Clicking the submit action button increases the pledged amount on the campaign progress bar by the amount inputted **(revised - click the “Donate to Campaign” button to increase pledged amount on campaign progress bar)**


**image 1:**
![Landing page](../img/newLanding.png)
</br>

**image 2:**
![Pic of creating campaign](../img/Create_campaign_1.png) </br>

**image 3:**
![Pic of creating campaign](../img/Create_campaign_2.png) </br>

**image 4:**
![Pic of creating campagn](../img/Create_campaign_3.png) </br>

**image 5:**
![Pic of creating campagn](../img/Create_campaign_4.png) </br>

**image 6:**
![Pic of creating campagn](../img/newCreate.png) </br>

**image 7:**
![Pic of creating campagn](../img/newBrowse.png)

**image 8:**
![Pic of confirmation](../img/confirm.png)

**image 9:**
![Pic of footer](../img/footer.png)
