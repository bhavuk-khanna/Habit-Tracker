# How the Project works: 

The Project has two view:
	1. Home view: Displays all the habits of a user and provide option to add and delete habits
	
	2. Displays the 7 day status description of each habit and allows changing status of any of the last 7 days.


Project Structure:
assets: contains static files: CSS,Images,Front end Javascirpt
config: configuration files
	Mongoose.js -> configuration for connection to mongoose.
controllers: Responsible for serving webpages to end users and data handling
	home_controller: responsible for home page
	7days_controller: responsilble for weekly view
	
models: Contains DB schemas 
routes: files for routing the user request to the appropriate controllers
	index.js: routes for home view
	7days.js: routes for weekly view

index.js: The root file for the project


Starting the Project:

1. Download as zip and extract at your system
2. Open folder in VS code
3. Open terminal and make the project folder as your current directory
4. Input following commands:
	```
	npm install express
	npm install ejs
	npm install mongoose
	```
5. To start the server, use command: npm start
6. Go to https://localhost/8000 on your browser to use the application
7. Have Fun!! 

