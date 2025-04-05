# Makola Online

Makola2.0 is an updated version of Makola Online web app. It is a web-based marketplace built with **Next.js (App Router) with TypeScript and TailwindCSS** for the frontend and **Express.js with TypeScript** for the backend. 
It provides a seamless shopping experience, allowing users to browse and purchase items efficiently.

## Features
- **Product Listings** – Users can browse various products.
- **Shopping Cart** – Add, update, and remove items from the cart.
- **Simulated Checkout** – No actual payment processing yet.
- **Responsive Design** – Works across all devices.
- **Local Storage Support** – Cart persists between sessions.
- **Product search**

## Tech Stack
### Frontend:
- **Next.js (App Router)** – React framework for server-side rendering.
- **TypeScript** – Statically typed JavaScript.
- **Tailwind CSS** – Utility-first CSS framework.

### Backend:
- **Express.js** – Lightweight Node.js framework.
- **TypeScript** – Ensures type safety.

  ### Database:
- **MongoDB** – NoSQL database for product storage.

 ### 🚀 Further Improvements
- **User Authentication**: Add login/signup with user accounts.
- **Admin Dashboard**: Manage products, orders, and users.
- **Real Payment Integration**: Connect with Paystack for mobile money payments
- **Product Filters**: Make browsing easier.
- **API Documentation**: Use Swagger or ReDoc for API docs
- **Unit & E2E Tests**: Use Jest and Playwright for more reliability.

## Getting Started
### Prerequisites
Make sure you have the following installed:
- **Node.js** (v18+)
- **Git**
- **MongoDB** (local or cloud instance)

### Installation
#### 1. Clone the repository
```bash
git clone https://github.com/yourusername/makola-online.git
cd makola-online
```
#### 2. Install dependencies
##### Frontend
```bash
cd frontend
npm install
```
##### Backend
```bash
cd backend
npm install
```
#### 3. Set up environment variables
Create a `.env` file in the **backend** directory with:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

#### 4. Run the application
##### Start the backend
```bash
cd backend
npm run dev
```
##### Start the frontend
```bash
cd frontend
npm run dev
```
Then, open **http://localhost:3000/** in your browser.

## Deployment
You can deploy the frontend on **Vercel** and the backend on **Render**.

## Contributing
Pull requests are welcome! Open an issue if you find a bug or have suggestions.

## License
MIT License. See `LICENSE` for details.

