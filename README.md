## Project Overview

Lead Manager is a full-stack web application designed to help sales teams efficiently manage and track potential customers (leads). It allows users to add new leads, view lead details, update lead information, manage lead statuses, and delete leads when they are no longer needed.

The application provides search and filtering functionality to make lead management easier. It also includes a dashboard that displays the total number of leads and their distribution across different statuses, helping users monitor their sales pipeline.

The frontend is developed using React.js and Bootstrap, while the backend is built with Java Spring Boot and MySQL for data storage. The application follows a RESTful API architecture and implements validation on both the frontend and backend to ensure data accuracy.

Technologies used for frontend: React js, Bootstrap
Technologies used for backend: Springboot, Java
Database used: MySQL

To run the project in frontend, use this command in command prompt/ terminal :  <strong>npm run dev</strong>

To run backend, Ensure that you are using your MYSQL password in <strong> application.properties </strong> file. Replace <strong> ${DB_PASSWORD} </strong> with your mysql password. Also replace root with your mysql username (if it is not root).

In this file, you should see a localhost address 3306 with LeadManager . you can also replace this with your database name.
