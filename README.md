# Fitness-App



* Project Overview *

This project is a Fitness Application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Docker for containerization. 
The application allows users to create accounts, watch workout videos, view diet plans, view articles and sen message if you have any query or complaint.

User Sign-Up and Login

    Sign-Up: Users must provide a username, email, password, and weight during the registration process.
    Login: Upon logging in, users are redirected to a route customized according to their weight:
        Light Weight: For users below 60 kg.
        Medium Weight: For users between 60-90 kg.
        Heavy Weight: For users above 90 kg.

Personalized Routes

    Light and Medium Weight Routes: Users have the option to choose between gaining or losing weight.
    Heavy Weight Route: Users are directed to weight loss content only.

Content Customization

    After selecting a goal (gain or loss), users are redirected to a section containing:
        Workouts: Tailored exercise videos.
        Diet Plans: Customized diet recommendations.
        Articles: Informative content aligned with the user's fitness goals.
    The content within these sections varies according to the user’s weight category.

Additional Pages

    About Us: Provides an overview of the website’s purpose and features.
    Contact Us: Users can send messages for queries or complaints, which are visible to the admin.
    Logout: Securely log out from the application.

Premium Content Access

    Normal Users: Limited content access with a "View More" button to redirect to premium subscription.
    Subscription: Normal users can upgrade to premium for full access. After selecting a subscription plan, users are prompted to log in again, gaining premium status with unrestricted content access.

Admin Features

    Admin Signup: Admins sign up manually by navigating to localhost:3000/admin-signup.
    Admin Login: Admins can log in through the normal login route.
    Admin Dashboard: The dashboard allows admins to:
        Add, edit, and delete diet plans and articles.
        Upload workout videos.
        View and manage messages sent through the Contact Us page.


Technologies Used
 
Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB
Containerization: Docker

Getting Started

  1.Clone the Repository
  2.Docker Setup
      docker-compose up --build
  3.Accessing the Application
      Once the containers are up and running, you can access the application at:localhost:3000


 Note  

    1. Json files needed to be imported to to the mongodb compass so as to view existing files.
    2. Videos is not pushed to git hub due to size issues, so wont be able to watch it. 
    3. A bug in admin navbar needs to be fixed. After logging in as admin needs to refresh once to get the exact navbar containing admin dashboard


