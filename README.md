# Bitcoin Transaction System
A full-stack portfolio project that allows users to create accounts, authenticate securely, and perform simulated Bitcoin buy/sell transactions. All transaction records and user balances are stored in a PostgreSQL database.

This project demonstrates full-stack development, REST API architecture, authentication workflows, and secure data handling using modern web technologies.

---

## 📌 Features

### 🔐 User Authentication
- JWT-based login and authorization
- Secure password hashing using **bcrypt**
- Middleware-protected routes for authorized actions

### 💰 Bitcoin Transactions
- Simulated Bitcoin buy and sell functionality
- Balance checks and validation
- Transaction history stored in PostgreSQL
- Automatic calculation and update of user wallet balances

### 🌐 Full-Stack Application
- Frontend built with **React + Redux**
- Form validation with **Yup**
- Axios for API communication
- Backend built with **Node.js + Express**
- PostgreSQL database with **Knex** for migrations/seeds

---

## 🛠️ Tech Stack

### **Frontend**
- React  
- Redux  
- Axios  
- Yup  
- JavaScript  
- HTML5 / CSS3  

### **Backend**
- Node.js  
- Express.js  
- PostgreSQL  
- Knex.js  
- JSON Web Tokens (JWT)  
- bcrypt  

---

## 📂 Project Structure

 ```
root
├── rev-bts/                  # React application
│   ├── src/
│   │   ├── Assets/
│   │   ├── components/
│   │   ├── form-schemas/
│   │   ├── hooks/
│   │   ├── state/
│   │   └── styles/
│   └── package.json
│
├── bitcoin-transaction-system-be/                   # Node.js + Express API
│   ├── api/
│   │   ├── __tests__/
│   │   ├── auth/
│   │   ├── data/
│   │   ├── secrets/
│   │   └── users/
│   ├── knexfile.js
│   ├── package.json
│   └── server.js
│
└── README.md
```


---

## 🧪 API Endpoints (Backend)

### **Auth Routes**
| Method | Endpoint          | Description                |
|--------|-------------------|----------------------------|
| POST   | `/api/auth/signup`   | Register new user         |
| POST   | `/api/auth/login`    | Login & receive JWT token |

### **User: Client / Transaction Routes**
| Method | Endpoint                 | Description                      |
|--------|---------------------------|----------------------------------|
| GET    | `/api/users/latest`            | Get current price of Bitcoin     |
| POST   | `/api/users/portfolio`         | Retrieves portfolio              |
| GET    | `/api/users/orders`            | Retrieves orders made by user    |
| GET    | `/api/users/buy-bitcoin`       | Buy bitcoin                      |
| GET    | `/api/users/sell-bitcoin`      | Sell bitcoin                     |
| GET    | `/api/users/bitcoin-wallet`    | Get user bitcoin wallet          |
| POST   | `/api/users/transfer-money`    | Transfer money to trader         |

### **User: Trader / Transaction Routes**
| Method | Endpoint                 | Description                                                 |
|--------|---------------------------|--------------------------------------------------------------|
| GET    | `/api/users/trader-portfolio`                | Retrieves portfolio                           |
| POST   | `/api/users/trader-buy-bitcoin`              | Buy bitcoin  (behalf of client)               |
| POST   | `/api/users/trader-sell-bitcoin`             | Sell bitcoin (behalf of client)               |
| POST   | `/api/users/clients/search`                  | Get client information                        |
| GET    | `/api/users/cancel-log`                      | Retrieves cancel log                          |
| GET    | `/api/users/clients/:client_id/transactions` | Retrieves orders made by clients              |
| GET    | `/api/users/clients/:client_id/payments`     | Retrieves money transfers made by clients     |
| PUT    | `/api/users/cancel-payment-or-transfer`      | Cancel order or money transfer made by client |

### **Secret User: Manager (limited Admin type): Manager Routes**
| Method | Endpoint                 | Description                      |
|--------|---------------------------|----------------------------------|
| POST   | `/api/users/daily`             | Get total number of daily transactions     |
| POST   | `/api/users/weekly`            | Get total number of weekly transactions    |
| POST   | `/api/users/monthly`           | Get total number of monthly                |




All `/api/users/*` routes require a valid JWT.

---

The backend uses **Knex migrations and seeds** to create and populate tables.

---

## 🚀 Running the Project Locally

### 1️⃣ Clone Frontend and Backend Repositories
```bash
git clone <frontend-repo-url>
git clone <backend-repo-url>

(front end)
cd rev-bts

(back end)
cd bitcoin-transaction-system-be

### 2️⃣ Install Frontend Dependencies
cd rev-bts
npm install

### 3️⃣ Install Backend Dependencies
npm install

### 4️⃣ Configure Environment Variables

Backend .env example:
PORT=5000
NODE_ENV = development
DATABASE_URL=postgres://your-db-url
TESTING_DATABASE_URL = postgres://your-db-url
DEV_DATABASE_URL = postgres://your-db-url
JWT_SECRET=your-secret-key
CMC_API_KEY = your api key to retrieve latest price of bitcoin from coin market cap

### 5️⃣ Run the Backend
npm run server

### 6️⃣ Run the Frontend
cd ./rev-bts/
npm run start

### 📬 Contact

Stephen Aranda
Email: aranda.stephen88@gmail.com


LinkedIn: [![www.linkedin.com/in/stephen-aranda-9b9974205]](www.linkedin.com/in/stephen-aranda-9b9974205) 

### Bitcoin Transaction system README's

project-frontend/
   rev-bts/README.md                        <-- Full project overview
Link: [link to front end repo](https://github.com/OniWarrior/rev-bts)

project-backend/
   bitcoin-transaction-system-be/README.md  <-- Backend-only details
Link: [link to backend end repo](https://github.com/OniWarrior/bitcoin-transaction-system-be)


