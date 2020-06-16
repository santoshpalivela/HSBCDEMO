# HSBCDEMO
Sample POC to show Login  screen followed by Social networking posts with some Mockdata

# Login Screen
Added a simple login screen to signin to the application 
 following restriction are applied 
Username should be minimum 5 characters 
password should be minimum 8 character with the combination of small ,upper case,numnber

Allowing only the following credentials 

USERNAME: admin  PASSWORD : Admin123    (Hardcoded )

Storing the username in the sessions storage to maintain the userinformation 


# Posts Screen

Fetching the Posts from the https://jsonplaceholder.typicode.com/posts url 

 Applied the sorting based on id to disply in the descending order 
Showing the only one post per second .(total 100 posts so it will take 100s to render all the posts  )
Searching is applied when user enters some text on the search field and resetting the filters when text box was cleared.
When click on any of the tile navigating to the details page and showing the corresponding details 
Logout button navigates to the Login page.

# Details Screen 

Showing the spinner inorder to give better experiance to the user while fetching the data from the API 
GoBack button is navigation to the Posts page.


# Not Found Page 

when user enters invalid route in the url we are navifation to the Not Found page. Where we have a link to Login page

# Routing

Implemented the Routing mechanisam 
Handled the browser back and front buttons to not move to the previous page when not logged in 


# Search


search will be applied on all the available posts on the screen .

Not Handled the case When Post list page started rendering and mean while tried to search the content it will leads to inappropriate behaviour

Ex: after rendering 20 posts if we apply search it will filter the result with in 20 records . But rest of the 80 records will be rendered irrespective of search term 

# Styles

Used Bootstrap styles in the login page 
Followed the mobile first approach 
All the pages are  designed wiht responsiveness (Mobile ,Tab,Laptop)

Used SCSS stylings (only variables are used ) Mixins ,Inheritance are not included

Followed the design based on the wireframe provided.

# Unit testing 
Added unit tests with Jest &Enzyme  for few screens 
Code coverage is upto 30% 


