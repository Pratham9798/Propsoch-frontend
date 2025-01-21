Propsoch Frontend Assignment
A responsive frontend web application with interactive features such as a product wishlist, image sliders, infinite scrolling, and Google Maps integration. Built with React.js and styled using CSS.

Features -
Responsive Design: Fully optimized for mobile, tablet, and desktop views.
Infinite Scrolling: Load more products as you scroll.
Wishlist Functionality: Add/remove products to/from a wishlist by clicking the heart icon.
Image Slider: Slide through product images within the designated box.
Product Detail Page:
View detailed product information.
Interact with a pan-able map using two-finger gestures (on touch devices).
Map Integration: Google Maps or OpenStreetMap embedded using react-leaflet.


Tech Stack -
Frontend: React.js
Styling: CSS (No Tailwind CSS used)
Map Integration: React Leaflet with OpenStreetMap tiles
Icons: React Icons (FontAwesome)


Prerequisites
Node.js (v14 or later)
npm (v6 or later) or yarn

Installation

Clone the repository:
git clone https://github.com/your-username/propsoch-frontend.git  
cd propsoch-frontend  

Install dependencies:
npm install  

Start the development server:
npm start  

Open your browser and navigate to:
http://localhost:3000/  
Project Structure

propsoch-frontend/
├── src/
│   ├── components/
│   │   ├── ProductCard.js       # Product Card with wishlist and slider functionality
│   │   ├── ProductDetail.js     # Product detail page with map integration
│   ├── pages/
│   │   ├── HomePage.js          # Homepage with infinite scrolling
│   ├── App.js                   # Main application component
│   ├── index.js                 # Entry point
├── public/
│   ├── index.html               # HTML template
├── package.json                 # Project dependencies and scripts

Scripts
Start the development server:
npm start  
Build for production:
npm run build  

This project is licensed under the MIT License
