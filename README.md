# ScholarNoYome

# Project Description

## What is the Project?
This project is a **Scholarship Management Portal**, which facilitates role-based access for **Students** and **Admins** to manage and apply for scholarships. Students can log in to view and apply for scholarships, while Admins can manage and oversee the scholarship applications.

### Features:
- **Role-Based Dashboards**:
  - Admin Dashboard: Manage scholarships and applications.
  - Student Dashboard: View and apply for scholarships.
- **Authentication**:
  - Secure login for Admin and Student roles.
- **Responsive UI**:
  - A user-friendly and visually appealing interface.
- **Backend API**:
  - Provides endpoints for login, fetching scholarships, and managing applications.
- **Database Integration**:
  - Stores user details, roles, scholarships, and applications in a relational database.

---

## Why Use This Project?
- **Streamlined Scholarship Management**: Simplifies the process of managing and applying for scholarships.
- **Secure Role-Based Access**: Ensures that only authorized users can access specific resources.
- **Responsive and Easy to Use**: Designed to provide a smooth user experience across devices.
- **Modern Technologies**: Built using React for the frontend and Spring Boot for the backend.

---

## How to Clone and Run the Project

### Prerequisites:
1. **Frontend**:
   - Node.js and npm installed on your machine.
2. **Backend**:
   - Java Development Kit (JDK 11 or higher).
   - MySQL database.
3. **General**:
   - Git for cloning the repository.

### Steps to Clone:

#### 1. Clone the Repository:
```bash
# Clone the repository
git clone <repo-url>
```

### Running the Frontend:
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open your browser and go to `http://localhost:3000` to view the app.

---

### Running the Backend:
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Configure the database connection in `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://<your-database-url>
   spring.datasource.username=<your-username>
   spring.datasource.password=<your-password>
   ```
3. Build the project:
   ```bash
   ./mvnw clean install
   ```
4. Run the application:
   ```bash
   ./mvnw spring-boot:run
   ```
5. The backend will start running on `http://localhost:8080`.

---

### Testing Credentials (For Testing Purposes Only):
#### Admin Access:
- **Email**: admin@admin
- **Password**: admin

#### Student Access:
- **Email**: kumar@s
- **Password**: Kumar@18
- **Student ID**: 82
- **Name**: Kumar

---

### Endpoints Overview (Backend):
- **Login**: `/api/login`
- **Get All Applications**: `/api/applications/all`
- **Add Scholarship**: `/api/scholarships/add`
- **View Scholarships**: `/api/scholarships/all`

---

## Additional Notes:
1. **Frontend and Backend Integration**:
   - Ensure the `BACKEND_URL` in the frontend is set correctly to match the backend URL.
2. **Database Setup**:
   - Import the provided SQL file to create the necessary database tables and seed data.
3. **Deployment**:
   - Use hosting platforms like **Railway** for the backend and **Vercel** for the frontend.

---

### Summary:
This Scholarship Management Portal is a complete solution for managing scholarships efficiently. It is designed with modern web technologies and ensures a great user experience while providing essential functionality for both students and administrators.

