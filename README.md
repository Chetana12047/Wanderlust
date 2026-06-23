WanderLust 🌍

WanderLust is a full-stack travel rental web application inspired by Airbnb, where users can explore, create, review, and manage vacation rental listings such as villas, resorts, apartments, and unique stays.

The platform provides secure authentication, image uploads, geolocation support, reviews, and complete CRUD functionality with a clean and responsive user interface.

⸻

🚀 Features

* 🔐 User Authentication & Authorization
    * Secure Signup/Login/Logout
    * Session-based authentication using Passport.js
    * Password hashing and user authentication with Passport Local Mongoose
* 🏡 Property Listings
    * Create, edit, and delete listings
    * Add title, description, price, images, location, and country
    * Only owners can manage their own listings
* 📸 Image Uploads
    * Cloudinary integration for cloud image storage
    * Multer used for handling image uploads
* 🗺️ Maps & Geolocation
    * Mapbox Geocoding API integration
    * Dynamic location coordinates stored in MongoDB
* ⭐ Reviews System
    * Users can add and manage reviews
    * Listings display user-generated reviews dynamically
* ⚡ Flash Messages & Error Handling
    * Success and error notifications
    * Custom error handling middleware
* 🧩 MVC Architecture
    * Organized and scalable backend structure

⸻

🛠️ Tech Stack

Frontend

* HTML
* CSS
* JavaScript
* Bootstrap
* EJS

Backend

* Node.js
* Express.js

Database

* MongoDB
* Mongoose

Authentication & Security

* Passport.js
* Passport Local
* Passport Local Mongoose
* Express Session
* Connect Flash

Cloud & APIs

* Cloudinary
* Multer
* Mapbox Geocoding API

⸻

⚙️ Environment Variables

Create a .env file in the root directory and add:

CLOUD_NAME=
CLOUD_API_KEY=
CLOUD_API_SECRET=
MAP_TOKEN=
ATLASDB_URL=
SECRET=

⸻

🧑‍💻 Installation & Setup

Clone the repository

git clone https://github.com/your-username/WanderLust.git

Navigate to project folder

cd WanderLust

Install dependencies

npm install

Start the server

node app.js

⸻

🌐 Live Demo

https://wanderlust-qjee.onrender.com

⸻

🔮 Future Enhancements

* Online booking system
* Payment gateway integration
* Wishlist/Favorites feature
* Search and filter functionality
* Improved responsive design
* Admin dashboard

⸻

👩‍💻 Author

Chetana Ingle

⸻

📜 License

This project is developed for educational and learning purposes.
