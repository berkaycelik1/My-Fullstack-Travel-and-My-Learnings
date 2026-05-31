<img width="608" height="782" alt="screenshot" src="https://github.com/user-attachments/assets/d5f2c164-e3ef-4774-8c72-9f89c8657e6b" />
# 🌍 Travel Journal - Data-Driven React

This project is a dynamic travel journal built with React. It transitions from static, hard-coded HTML structures to a fully **data-driven architecture** using reusable components and JavaScript array methods.

## 📸 Project Screenshot
![Travel Journal Desktop View](./images/screenshot.png)
<img width="608" height="782" alt="screenshot" src="https://github.com/user-attachments/assets/264d0e35-6cd3-4b56-ba82-20ae8521e68a" />

---

## 🧠 Core Concepts Learned & Applied

### 1. Component Reusability
Instead of manually typing out HTML for every single travel destination, the UI was broken down into modular, reusable building blocks (e.g., `<Entry />`, `<Header />`). This "template" approach ensures scalability and easier maintenance.

### 2. Props (Data Passing)
Implemented React `props` to pass data dynamically from a parent component (`App.jsx`) to child components (`Entry.jsx`). 
* Transformed static elements into dynamic JSX portals `{}`.
* Utilized **Object Destructuring** for cleaner, more readable component code.
* Handled various data types (Strings, Numbers, Booleans) correctly using JSX syntax.

### 3. Array Mapping (`.map()`)
Automated the component rendering process. Instead of hardcoding `<Entry />` instances, a raw data array (`data.js`) acts as the single source of truth. 
* Used the JavaScript `.map()` method to iterate over the data and return an array of JSX components.
* Implemented the `key` prop securely using unique IDs to ensure React efficiently tracks and updates the DOM elements.

---

## 🛠️ Tech Stack
* **React** (Functional Components, Props, JSX)
* **Vite** (Build Tool & Development Server)
* **JavaScript (ES6+)** (Destructuring, Array Methods)
* **CSS3** (Flexbox, Responsive Layouts)
