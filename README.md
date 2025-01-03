E-Commerce Website
This project is a full-stack e-commerce application designed to provide an efficient and seamless shopping experience. The project includes a feature-rich React front-end integrated with a robust Node.js back-end and a MongoDB database.

🚀 Features
Front-End (React):
Responsive Design:
Built using React and styled with Tailwind CSS for modern, responsive UI.
Dynamic Pages:
Home Page with a hero section displaying the latest offers, Best Sellers, and Latest Collection.
Product Page showcasing detailed product information, including size, description, reviews, and add-to-cart functionality.
Cart Page for managing items, updating quantities, and proceeding to checkout.
Place Order Page with a form for user details and payment method selection.
About Page and Contact Page styled for simplicity.
Components:
Reusable components like Navbar, Footer, Search Bar, Newsletter, Our Policy, ProductItem, and more.
Search functionality filters products dynamically based on user input.
Filtering and Sorting:
Products can be filtered by price, type, and gender on the Collection Page.
Dynamic rendering of Latest Collection and Best Sellers using filter() and map().
Back-End (Node.js):
Server Setup:
Configured with Express.js for efficient routing.
CORS enabled for seamless API communication.
Database Management:
MongoDB Atlas for cloud-based database storage.
Product and user schemas created using Mongoose.
Image Storage:
Integrated with Cloudinary to store and retrieve product images securely.
User Authentication:
Password hashing using bcrypt for secure login and registration.
Email and password validation using Validator.js.
Product Management:
Admin features to add products, upload images, and store metadata.
Middleware:
Custom middleware for error handling and request validation.
Environment Variables:
Managed with dotenv to secure API keys and sensitive data.
📂 Project Structure
Front-End:
src
context/: Global state management using ShopContext.
assets/: Images and icons exported via assets.js.
components/: Reusable UI components.
pages/: Organized pages for routing.
Back-End:
config/: MongoDB and Cloudinary configurations.
models/: Mongoose schemas for users and products.
controllers/: Functions for handling user and product logic.
routes/: API routes for users and products.
middleware/: Middleware for authentication and validation.
server.js: Entry point for setting up the server.
🛠️ Tech Stack
Front-End:
React.js
Tailwind CSS
React Router Dom
Back-End:
Node.js
Express.js
MongoDB (via Mongoose)
Cloudinary for media storage
bcrypt for password encryption
Validator.js for input validation
📄 How to Run
Front-End:
Clone the repository.
Navigate to the client folder.
Run npm install to install dependencies.
Start the front-end with npm start.
Back-End:
Navigate to the server folder.
Run npm install to install dependencies.
Configure your .env file with MongoDB Atlas URI, Cloudinary credentials, etc.
Start the back-end with nodemon server.js.
💡 Features in Development
Advanced search with auto-suggestions.
Admin dashboard for managing users and orders.
Payment gateway integration.
🎉 Contributions
Feel free to fork this repository and submit pull requests. Contributions are welcome!

