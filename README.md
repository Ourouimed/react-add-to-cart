# Add To Cart React Application 

This is a dynamic and responsive "Add to Cart" application built with `React.js` and `Vite` for a fast development experience. The application is styled using `tailwindcss`

## Key Features
- **Cart Management:** Users can add, remove, and clear items from their cart.
- **Local Storage Persistence:** Each user's cart is saved locally in their browser's storage, ensuring their selections are remembered.
- **Coupon Discount System:** Users can apply discount coupons using codes like `red30`, `summer20`, `blackfriday`, `2025`, etc.
- **Responsive Design:** The application adapts seamlessly to various screen sizes, providing a consistent user experience across devices.

## Tech Stack
*   **Frontend Framework:** React.js
*   **Build Tool:** Vite
*   **Styling:** Tailwindcss
*   **State Management:** React Hooks (useState, useEffect, useContext)


## Installation

To run this project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ourouimed/react-add-to-cart.git
   cd react-add-to-cart
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. Open your browser and visit: `http://localhost:5173`


## Project Structure
```
react-add-to-cart/
├── src/
│   ├── components/ 
│   │   ├── Cart.jsx 
│   │   ├── CartItem.jsx 
│   │   ├── Product.jsx 
│   │   └── ProductsList.jsx 
│   ├── context.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── products.js
│   └── index.css 
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
``` 

## Live Demo

[Demo Application](https://ourouimed.github.io/react-add-to-cart)

## Contributing 
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
