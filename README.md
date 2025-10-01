# MERN User CRUD Application

## About

This is a full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that implements complete CRUD (Create, Read, Update, Delete) operations for user management. This project was developed as an assignment for the Full Stack Developer position at **Bits and Volts Pvt Ltd**.

## 🚀 Features

- **Create**: Add new users with comprehensive form validation
- **Read**: View all users in a responsive table/grid layout
- **Update**: Edit existing user information with inline editing
- **Delete**: Remove users with confirmation prompts
- **Search & Filter**: Find users quickly with advanced filtering options
- **Responsive Design**: Optimized for desktop and mobile devices
- **Type Safety**: Built with TypeScript for enhanced code reliability
- **Real-time Updates**: Live data synchronization across all clients

## 🛠️ Tech Stack

### Frontend
- **React.js** - Component-based UI library
- **TypeScript** - Type-safe JavaScript superset
- **CSS3** - Modern styling and responsive design
- **Axios** - HTTP client for API calls
- **Shadcn** - React UI / UX Library

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **TypeScript** - Server-side type safety

### Database
- **MongoDB** - NoSQL document database
- **Mongoose** - MongoDB object modeling

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v14.0 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local installation or MongoDB Atlas)
- **Git** for version control

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/alimunfed17/mern-user-crud.git
cd mern-user-crud
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd server

# Install dependencies
npm install

# Create environment variables file
cp .env.example .env

# Configure your environment variables in .env
# MONGODB_URI=mongodb://localhost:27017/user-crud
# PORT=5000
```

### 3. Frontend Setup
```bash
# Navigate to frontend directory
cd ../client

# Install dependencies
npm install

# Create environment variables file
cp .env.example .env

# Configure your environment variables in .env
# VITE_BASE_URL=http://localhost:5000/api
```

### 4. Database Setup
```bash
# Start MongoDB service (if running locally)
sudo systemctl start mongod

# Or use MongoDB Atlas cloud database
```

## 🚀 Running the Application

### Development Mode

1. **Start the Backend Server**
```bash
cd server
npm run dev
# Server runs on http://localhost:5000
```

2. **Start the Frontend Application**
```bash
cd client
npm start
# Application runs on http://localhost:3000
```

### Production Mode

1. **Build the Frontend**
```bash
cd client
npm run build
```

2. **Start the Production Server**
```bash
cd server
npm start
```

## 📁 Project Structure

```
mern-user-crud/
├── server/ # Backend API (Node.js + Express + TypeScript)
│ ├── src/
│ │ ├── controllers/ # Route handlers
│ │ ├── models/ # Database models
│ │ ├── routes/ # API routes
│ │ ├── middleware/ # Auth & validation middleware
│ │ ├── config/ # Database configuration
│ │ └── utils/ # Utility functions
  └── package.json
├── client/ # Frontend (React + TypeScript)
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # Page components
│ │ ├── hooks/ # Custom React hooks
│ │ ├── types/ # TypeScript type definitions
│ │ └── services/ # API service functions
  └── package.json
└── README.md
```

## 🔌 API Endpoints

### User Management
- `GET /api/getUsers` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/createUser` - Create new user
- `PUT /api/edit/:id` - Update user
- `DELETE /api/delete/:id` - Delete user
- `POST /api/getUsers` - Get users
- `GET /api/export` - export users csv

## 📊 Data Model

### User Schema
```typescript
interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  gender: "male" | "female" | "other"
  status: "active" | "inactive"
  resume: string;
}
```

## 🧪 Testing

### Backend Testing
```bash
cd server
npm test
```

### Frontend Testing
```bash
cd client
npm test
```

## 🚀 Deployment

### Using Heroku

1. **Backend Deployment**
```bash
cd server
heroku create server
git push heroku main
```

2. **Frontend Deployment**
```bash
cd client
npm run build
# Deploy build folder to your hosting service
```

## 🎯 Assignment Requirements Fulfilled

This project demonstrates proficiency in:

- ✅ **Full Stack Development** - Complete MERN stack implementation
- ✅ **Database Design** - Efficient MongoDB schema design
- ✅ **RESTful APIs** - Well-structured API endpoints
- ✅ **User Experience** - Intuitive and responsive UI/UX
- ✅ **Code Quality** - Clean, maintainable, and well-documented code
- ✅ **Modern Practices** - Latest industry standards and best practices

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check connection string in .env file

2. **CORS Issues**
   - Verify CORS configuration in backend
   - Check API URL in frontend environment variables

3. **Port Already in Use**
   ```bash
   # Kill process on port 5000
   lsof -ti:5000 | xargs kill -9
   ```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

- GitHub: [@alimunfed17](https://github.com/alimunfed17)
- Project: [MERN User CRUD](https://github.com/alimunfed17/mern-user-crud)

## 🎉 Acknowledgments

- **Bits and Volts Pvt Ltd** for providing this development opportunity
- MERN stack community for excellent documentation and resources
- TypeScript team for making JavaScript development more robust

---

*This project showcases modern full-stack development skills and represents a complete solution for user management with CRUD operations.*
