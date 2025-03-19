### **Project Title**: **Online Learning Platform  ByteRise(MERN Stack)**  

---

### **Project Overview**:  
This project aims to develop a scalable and interactive online learning platform using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The application will allow users to browse courses, enroll in classes, and access learning materials. It will include essential features like user authentication, course recommendations, a progress tracker, and an admin dashboard for managing courses, instructors, and user accounts.  

---

### **Key Objectives**:  
1. **Backend**:  
   - Develop a RESTful API using Node.js and Express.js for handling user data, course management, and integration with third-party services like video hosting or email notifications.  
2. **Frontend**:  
   - Create a responsive, intuitive user interface using React.js, ensuring accessibility across devices.  
3. **Database**:  
   - Use MongoDB to manage data, including user profiles, course catalogs, enrollment data, and progress tracking.  
4. **Authentication**:  
   - Implement secure user authentication using JWT (JSON Web Tokens) with role-based access for students, instructors, and administrators.  
5. **Deployment**:  
   - Deploy a production-ready application using platforms like AWS, Heroku, or Vercel for backend and frontend hosting.  

---

### **Planned Features**:  
1. **User Features**:  
   - User registration and login.  
   - Browse and search for courses with dynamic filtering (e.g., by category, difficulty, instructor).  
   - Course details page with instructor information and video previews.  
   - Enroll in free or paid courses using secure payment integration.  
   - Track learning progress with progress bars and quizzes.  
   - Download resources (e.g., PDFs, presentations).  

2. **Instructor Features**:  
   - Instructor dashboard to create, edit, and manage courses.  
   - Upload course videos, descriptions, and resources.  
   - Track enrollment statistics and user feedback.  

3. **Admin Features**:  
   - Admin panel to manage user accounts, courses, and instructors.  
   - Review and approve courses submitted by instructors.  
   - View platform statistics (e.g., number of users, popular courses).  

4. **Optional Features**:  
   - Recommendation engine to suggest courses based on user preferences or learning history.  
   - Real-time Q&A for students to interact with instructors.  
   - Certification generation upon course completion.  

---

### **Development Workflow**:  
1. **Agile Methodology**:  
   - Use iterative sprints to prioritize and deliver features.  
2. **Version Control**:  
   - Maintain code quality and collaboration using GitHub.  
3. **Testing**:  
   - Ensure robust functionality through unit and integration testing.  

---

### **Milestone 1: Project Overview**  
#### **Objective**: Lay the foundation for the learning platform by setting up the development environment, project structure, and basic functionality for the backend and frontend.  

---

#### **Key Deliverables**:  
1. **Requirement Analysis**:  
   - Define core features such as authentication, course catalog, and enrollment system.  
2. **Environment Setup**:  
   - Initialize backend (Node.js/Express) and frontend (React.js) repositories.  
   - Configure dependencies and set up Git for version control.  
3. **Backend**:  
   - Create a basic Express server, connect to MongoDB, and set up a RESTful API structure.  
4. **Frontend**:  
   - Set up a React app with routing, a landing page, and basic UI components.  
5. **Documentation**:  
   - Provide a README file with project goals, setup instructions, and API endpoints.  

---

### **Success Criteria**:  
- Functional backend connected to MongoDB with basic API endpoints for users and courses.  
- Basic frontend with routing and UI design for the homepage and login/register pages.  
- Initial deployment for testing backend and frontend functionality.  

---

## *Milestone 20 - User Profile Endpoint *

- Implemented the /profile endpoint to fetch user data and store it in an object. 
- Created profile.jsx to dynamically display all user details.  
- Ensured proper data handling and integration between frontend and backend.
- Planned future improvements like profile editing, authentication, and UI enhancements.  

---

## Milestone 25: Order Creation

- Developed an endpoint to receive products, user details, and address details.
- Retrieved the user's _id from the database using their email.
- Created separate orders for each product, all linked to the same address.
- Stored order details in the MongoDB orders collection using the defined Order Schema.

---

## Milestone 26: Fetch User Orders

- Built an endpoint that accepts the user's email as input.
- Used the email to retrieve the corresponding user _id.
- Queried the database to fetch all orders associated with that user.
- Returned the user's order history in the response.

# Milestone 27: My Orders Page
We created a "My Orders" page for the frontend of the Ecommerce-Follow-Along project. This page displays all the orders placed by the user.

# Milestone 28 - Cancel Order Feature
Added a "Cancel Order" button in the My Orders page and created a backend endpoint to update order status to "Cancelled".  
Users can cancel their orders unless they are already marked as "Cancelled".

# Milestone 29 - PayPal Integration

In this milestone, we added an online payment option using the PayPal API. Users can now choose between COD and PayPal for payment. PayPal buttons will be displayed when the online payment option is selected. The next milestone will focus on implementing the payment functionality.