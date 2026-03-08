# Zerodha Clone – Full Stack Trading Platform

A full-stack trading dashboard inspired by Zerodha that allows users to manage their portfolio, track holdings, view watchlists, and place buy/sell orders.

This project demonstrates full-stack development using React, Node.js, Express, and MongoDB.

---

## Features

### Landing Platform
- Home page
- About page
- Pricing page
- Support page
- Signup page

### Trading Dashboard
- Watchlist management
- Holdings overview
- Positions tracking
- Buy / Sell order placement
- Portfolio visualization using charts

### Authentication
- User signup and login
- Password hashing using **bcrypt**
- Token-based authentication using **JWT**

---

## Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Bootstrap
- Chart.js

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt

### Tools
- Thunder Client (API testing)
- GitHub

---

## Project Architecture

The system follows a three-tier architecture.

```
User
 ↓
React Frontend
 ↓
Axios API Requests
 ↓
Node.js + Express Backend
 ↓
MongoDB Database
```

Frontend handles UI and user interaction.

Backend processes business logic and API requests.

MongoDB stores user data, orders, holdings, and positions.

---

## Project Structure

### Frontend

```
frontend/
 ├── components
 │   ├── Navbar
 │   ├── WatchList
 │   ├── Holdings
 │   ├── BuyActionWindow
 │   ├── Charts
 │
 ├── pages
 │   ├── Home
 │   ├── About
 │   ├── Pricing
 │   ├── Support
 │
 └── App.js
```

### Backend

```
backend/
 ├── models
 │   ├── OrdersModel.js
 │   ├── HoldingsModel.js
 │   ├── PositionsModel.js
 │
 ├── schemas
 │   ├── OrdersSchema.js
 │   ├── HoldingsSchema.js
 │   ├── PositionsSchema.js
 │
 └── index.js
```

---

## Installation

### Clone Repository

```
git clone https://github.com/yourusername/zerodha-clone.git
cd zerodha-clone
```

---

### Install Frontend

```
cd frontend
npm install
npm start
```

---

### Install Backend

```
cd backend
npm install
npm start
```

---

## Authentication Flow

Signup Process

```
User Signup
 ↓
POST /signup
 ↓
Password hashed using bcrypt
 ↓
User stored in MongoDB
```

Login Process

```
User Login
 ↓
POST /login
 ↓
Password verified
 ↓
JWT token generated
 ↓
Access to dashboard
```

---

## Order Placement Flow

```
User clicks BUY / SELL
 ↓
BuyActionWindow opens
 ↓
User enters quantity and price
 ↓
Axios POST request
 ↓
Backend API /newOrder
 ↓
Order saved in MongoDB
 ↓
Dashboard updates
```

---

## Charts

Charts are implemented using **react-chartjs-2**.

- Vertical Bar Chart for holdings
- Doughnut Chart for watchlist distribution

These charts help visualize portfolio data.

---

## API Testing

APIs were tested using Thunder Client.

Example APIs:

```
GET /allHoldings
GET /allPositions
POST /newOrder
POST /signup
POST /login
```

---

## Challenges Faced

- Integrating frontend with backend APIs
- Designing MongoDB schemas
- Formatting data for Chart.js
- Managing asynchronous data fetching in React

---

## Future Improvements

- Real-time stock prices using WebSockets
- Portfolio analytics
- Notifications for order updates
- Improved security and rate limiting
- Scalable architecture

---

## What I Learned

- Full-stack application architecture
- REST API development
- Authentication with JWT
- MongoDB schema design
- React state management
- Data visualization using Chart.js

---


Your Name

GitHub: https://github.com/yourusername
