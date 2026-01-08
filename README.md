# Social Memory App (MERN)

## About

Social Memory App is a full-stack MERN (MongoDB, Express, React, Node.js) social media platform where users can create, share, and discover memories. Users can sign up (including Google OAuth), create posts with images and tags, comment, search by tags or creators, and enjoy a modern, responsive UI. The project is ready for deployment on Vercel and supports both frontend and backend hosting.

---

## Features

- User authentication (manual & Google OAuth)
- Create, edit, and delete memories (posts)
- Upload images with posts
- Tagging and search by tags/creators
- Comment on posts
- Responsive, modern Material-UI design
- Pagination for posts
- Dedicated create page
- Secure JWT-based authentication
- MongoDB Atlas or local MongoDB support
- Ready for Vercel deployment (vercel.json included)

---

## Tech Stack

**Frontend:**

- React 19
- Redux & Redux Toolkit
- React Router v7
- Material-UI v6
- Axios
- JWT Decode
- @react-oauth/google

**Backend:**

- Node.js 18+
- Express 5
- MongoDB (Atlas or local)
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- CORS

---

## Project Structure

```
project_mern_memories/
├── client/         # React frontend
│   └── src/
│       └── ...
├── server/         # Express backend
│   └── ...
├── README.md
└── ...
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/adrianhajdin/project_mern_memories.git
cd project_mern_memories
```

### 2. Setup environment variables

- In `client/.env.local`:
  - `REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id`
  - `REACT_APP_API_URL=your-backend-url`
- In `server/.env`:
  - `MONGO_URI=your-mongodb-uri`
  - `JWT_SECRET=your-jwt-secret`

### 3. Install dependencies

```bash
cd client && npm install
cd ../server && npm install
```

### 4. Run locally

```bash
# In one terminal
cd server && npm start
# In another terminal
cd client && npm start
```

### 5. Build for production

```bash
cd client && npm run build
```

---

## Deployment

This project is ready for deployment on Vercel. The `server/vercel.json` file is configured to serve the backend API and static frontend build.

---

## Screenshots

![Home Page](https://i.ibb.co/7CmVbCW/image.png)

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## License

This project is licensed under the MIT License.

---

## Topics (GitHub)

mern, react, nodejs, express, mongodb, social-media, memories, fullstack, material-ui, redux, oauth, vercel, jwt, authentication, comments, posts, responsive-design

## About (GitHub)

A modern full-stack MERN social media app for sharing and discovering memories. Features authentication, image uploads, tags, comments, search, and a beautiful responsive UI. Deployable on Vercel.
