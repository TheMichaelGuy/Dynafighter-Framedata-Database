# Dynafighter-Framedata-Database

This project was made for a Database Management Class with the help of another classmate.

Getting MySQL  

Download MySQL (latest version or 8.0.39 if it is available)  
https://dev.mysql.com/downloads/installer/  
Create a new connection and either put “H3x4Cy^nRed” as the password or locate “H3x4Cy^nRed” inside of the app.js and replace it with the password you want to use.  

Import the Database Dumps
●	Open MySQL Workbench and select your connection  
●	Server > Data Import   
●	Import from Disk > Import from Dump Project Folder  
●	Paste the directory of the project’s dump folder. It should end in “dffddb2\Dump_MySQL”  
●	Make sure it is going to import “dffddb2” in the Select Database Objects to import section (you may have to remove some tiles to make the menu completely visible)  
 
●	Hit “Import” and then once it is complete, close and reopen MySQL Workbench  

Getting the Javascript Trio  

Download NodeJS  

There are multiple ways to install Node.js. I used the package manager and installed the most recent version of node at the time.  
https://nodejs.org/en/download/package-manager  
My input: “Install [23.1.0 (Current)] on [Windows] using [Chocolatey]”  
But this project might be able to be run with different versions installed in different ways  
https://nodejs.org/en/download/prebuilt-installer  

Afterwards, install the rest of the dependencies (including angular and express) with the following command while inside of the project directory in terminal:  
npm install  

Running the Project  

●	When everything is properly set up, open terminal (either on VSCode or not), go to the project directory “...\dffddb2” and enter the command “node app.js”  
●	Open the link “localhost” in a new tab  
●	When you want to stop the program, go to terminal and hit “Ctrl + C” to stop  
●	If there is a problem starting the project and the error is on line 32 on app.js, open task manager, go to Services, find MySQL, right click and then hit Start to start the server  

Instructions  
Admin  

●	Attributes can be edited and then changed with the update button on the right of the data  
●	Attributes can be deleted with the delete button on the right side  
●	Attributes can be added with the “Add Move” sections on the bottom of each table. Empty values are not accepted, but can be removed by editing the table afterwards.  

Move Search  

●	Type a SELECT query in the text box and press Search to show the results. The “READMETOO” file contains a set of examples  

Frame Data Display  

●	Select a character and scroll through the data charts  

Battle Graphing Calculator  

●	Select a character and play around with the variables to recreate in game scenarios  

Knockback  
●	Select a move from the left column before pressing the “Graph Knockback” button  

FollowUp  
●	Select a move from the right column before pressing the “Graph FollowUp” button  

Variables  
●	Target % - changes target’s percentage, this causes the most change  
●	X Position - changes x positioning  
●	Y Position - changes y positioning  
●	Base Knockback - multiplier to BK  
●	Rising Knockback - multiplier to RK  
●	Base Hitstun - multiplier to BH  
●	Rising Hitstun - multiplier to RH  
●	Damage - multiplier to DMG  
●	Left or Right - Determines which direction the line is graphed  

Other Buttons  
●	Switch to - loads the page in   
