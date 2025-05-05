# 🛍️ Online Store Project – React + Redux

This is a basic implementation of an online store built using pure React, Redux for state management, and Bootstrap for styling. The app includes product browsing, a shopping cart, a checkout flow, and a responsive, modern UI — all without any backend or database.

---

## ✨ Main Features

- **🏠 Home Page**  
  Displays general information about the store, including name, tagline, and an intro description. Includes a navigation bar for switching between sections.

- **🛒 Products Page**  
  - Products are grouped by category.  
  - Each product displays an image, name, short description, and price.  
  - Products are stored in React state.  
  - Clicking a product opens a modal with full details.  
  - A button allows adding the product to the cart.

- **🛍️ Shopping Cart**  
  - Shows products added by the user, with quantities and individual prices.  
  - Supports updating quantities and removing items.  
  - Displays the total cost dynamically.

- **💳 Checkout Page**  
  - Contains a form to input name, address, and credit card details.  
  - Submitting the form shows a confirmation message (simulated, no real payment processing).

- **🔗 Persistent Navbar**  
  - Navigation links to Home, Products, Cart, and Checkout.  
  - Appears on all pages for easy access.

---

## ⚙️ Tech Stack

- 🧩 **React** (functional components with hooks)  
- 📦 **Redux** for global state management  
- 📚 **React Router** for page routing  
- 🎨 **Bootstrap** for responsive and styled UI components

---

## 🗂️ Project Structure


---

## 🧠 State Management with Redux

Redux is used to manage:
- Cart items and totals
- UI preferences (e.g. dark mode)
- Global data shared between components

Reducers and actions are modular and clearly organized.

---

## 🎁 Bonus Features

- **🌗 Dark/Light Theme Toggle**  
  Users can switch between light and dark modes via a button in the navbar. CSS variables are used for easy theme switching.

- **🧮 Sorting and Filtering by Category**  
  - Products can be **filtered** by category.  
  - Products can be **sorted** within a category by name or price.

---

## ▶️ Getting Started

To run the project locally:

```bash
npm install
npm start
