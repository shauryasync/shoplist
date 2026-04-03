# 🛍️ ShopList – Product Explorer App

## 🔗 Live Demo


## 📌 Project Overview

ShopList is a responsive web application that displays a list of products fetched from a public API.
Users can browse products, search for specific items, and filter them by category.

The goal of this project was to practice working with APIs, component-based architecture, and building a clean, responsive UI using React and Tailwind CSS.

---

## 🚀 Features

* Fetch and display products from an API
* Responsive product grid layout
* Search functionality (filter products by title)
* Category-based filtering (beauty, fragrances, furniture, groceries)
* Loading and error handling states
* Clean and minimal UI using Tailwind CSS

---

## 🛠️ Tech Stack

* **React (Vite)** – Frontend framework for building UI
* **Tailwind CSS** – Styling and responsive design
* **JavaScript (ES6+)** – Logic and functionality
* **Fetch API** – For making API requests

---

## 🌐 API Used

* DummyJSON API
* Endpoint: `https://dummyjson.com/products`

This API provides product data including title, price, rating, category, and images.

---

## ⚙️ Setup Instructions

1. Clone the repository:

```bash
git clone <your-repo-link>
```

2. Navigate to the project folder:

```bash
cd shoplist
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

5. Open in browser:

```
http://localhost:5173
```

---

## 🧠 Key Architectural Decisions

### 1. Component-Based Structure

The application is divided into reusable components:

* `ProductCard` – displays individual product
* `ProductList` – renders product grid
* `SearchBar` – handles search input
* `CategoryFilter` – handles filtering
* `Home` – manages main logic and state

This makes the code easier to maintain and scale.

---

### 2. State Management (useState + useEffect)

React hooks were used for managing state:

* `products` → currently displayed products
* `allProducts` → original data for filtering
* `loading` → handles loading state
* `error` → handles error state

Local state was sufficient since the app is small and does not require global state management.

---

### 3. Client-Side Filtering

Filtering (search and category) is done on the client side instead of making multiple API calls.

Reason:

* Faster response
* Simpler logic
* Better user experience for small datasets

---

### 4. Responsive Design

Tailwind CSS grid system is used to make the layout responsive across:

* Mobile
* Tablet
* Desktop

---

## 🎯 Learning Outcomes

* Working with REST APIs in React
* Managing state and side effects using hooks
* Building reusable components
* Implementing responsive UI using Tailwind
* Handling real-world features like search and filtering

---



