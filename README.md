## Project Overview

Lead Manager is a full-stack web application designed to help sales teams efficiently manage and track potential customers (leads). It allows users to add new leads, view lead details, update lead information, manage lead statuses, and delete leads when they are no longer needed.

The application provides search and filtering functionality to make lead management easier. It also includes a dashboard that displays the total number of leads and their distribution across different statuses, helping users monitor their sales pipeline.

The frontend is developed using React.js and Bootstrap, while the backend is built with Java Spring Boot and MySQL for data storage. The application follows a RESTful API architecture and implements validation on both the frontend and backend to ensure data accuracy.

<strong> Technologies used for frontend: React js, Bootstrap </strong><br/>
<strong> Technologies used for backend: Springboot, Java </strong><br/>
<strong> Database used: MySQL </strong><br/>

To run the project in frontend, You will need to install axios, bootstrap, react-router-dom and react-hook-form , so use this command : <strong>npm i bootstrap axios react-router-dom react-hook form </strong> in command prompt after opening frontend folder in command prompt and then use this command in command prompt/ terminal :  <strong>npm run dev</strong>



To run backend, Open the backend folder in Eclipse IDE or any other IDE and Ensure that you are using your MYSQL password in <strong> application.properties </strong> file. Replace <strong> ${DB_PASSWORD} </strong> with your mysql password. Also replace root with your mysql username (if it is not root).

In this file, you should see a localhost address 3306 with LeadManager . you can also replace LeadManager with your database name or Create a database named LeadManager where leads will get stored.

In application.properties, there is server.port which defines port where backend is running. ( you can change the port number here if you want)</br>

Home Page / Dashboard: </br>

<img width="1535" height="688" alt="image" src="https://github.com/user-attachments/assets/c0bf32fb-ac37-4884-a56c-0d9e3fe98d96" />
</br>
Leads Page: </br>
<img width="1532" height="694" alt="image" src="https://github.com/user-attachments/assets/7624647c-9477-47b0-92aa-63a42a1782f5" />
</br>

Dashboard Mobile View: </br>
<img width="447" height="695" alt="image" src="https://github.com/user-attachments/assets/c310998f-beec-4cde-80a8-3e311a099201" />

Leads Page Mobile View: </br>
<img width="450" height="686" alt="image" src="https://github.com/user-attachments/assets/743863e1-8577-42ff-be24-7a73c1cc35d1" />





