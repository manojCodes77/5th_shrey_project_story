# Interactive Stories

A beautiful and interactive web application that displays stories in an Instagram-like format with profile pictures and full-screen story viewing.

## 🌐 Live Demo

🚀 **[View Live Demo](https://interactive-stories-wine.vercel.app/)**

Try the application live! Click on the profile pictures to view stories in full-screen mode and toggle between light and dark themes.

## ✨ Features

- **Story Preview**: Circular profile pictures that serve as story thumbnails
- **Full-Screen Story View**: Click on any profile picture to view the story in full-screen mode
- **Auto-Close Stories**: Stories automatically close after 3 seconds
- **Dark Mode Toggle**: Switch between light and dark themes
- **Responsive Design**: Optimized for various screen sizes
- **Smooth Animations**: Hover effects and transitions for better user experience
- **Beautiful Gradient Background**: Eye-catching gradient background design

## 🚀 Demo

The application displays a collection of interactive stories with:
- Profile pictures arranged in a horizontal scrollable container
- Smooth hover animations on story thumbnails
- Full-screen story viewing with automatic timeout
- Dark/light mode toggle in the header

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with gradients, transitions, and responsive design
- **Vanilla JavaScript**: Interactive functionality and DOM manipulation
- **Unsplash API**: High-quality images for stories and profile pictures

## 📁 Project Structure

```
5th_shrey_project_story/
├── index.html          # Main HTML structure
├── script.js           # JavaScript functionality
├── style.css           # Styling and animations
└── README.md           # Project documentation
```

## 🎯 How It Works

1. **Story Data**: Stories are stored in a JavaScript array with profile picture (`dp`) and story image (`story`) URLs
2. **Dynamic Rendering**: JavaScript dynamically generates HTML for each story thumbnail
3. **Click Interaction**: Clicking on a profile picture displays the full story with a background image
4. **Auto-Close**: Stories automatically close after 3 seconds using `setTimeout`
5. **Theme Toggle**: Dark mode can be toggled using the button in the header

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for loading images from Unsplash)

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start interacting with the stories!

### Local Development

```bash
# If you want to serve it locally (optional)
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Then open http://localhost:8000 in your browser
```

## 🎨 Customization

### Adding New Stories

Edit the `arr` array in `script.js`:

```javascript
let arr = [
    {
        dp: "profile_picture_url",
        story: "story_image_url"
    },
    // Add more stories here
];
```

### Styling

- Modify `style.css` to change colors, animations, or layout
- The gradient background can be customized in the `body` CSS rules
- Dark mode styles are defined with the `.dark-mode` class

### Functionality

- Change story display duration by modifying the timeout value in `script.js` (currently 3000ms)
- Add more interactive features by extending the JavaScript code

## 🎨 Color Scheme

- **Light Mode**: Vibrant gradient from orange to pink/purple
- **Dark Mode**: Dark gradient with subtle highlights
- **Card Background**: White (light) / Dark gray (dark)
- **Accent Color**: Blue for buttons and interactive elements

## 📱 Responsive Design

The application is fully responsive and works well on:
- Desktop computers
- Tablets
- Mobile devices

## 🤝 Contributing

Feel free to contribute to this project by:
1. Forking the repository
2. Creating a feature branch
3. Making your changes
4. Submitting a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Images provided by [Unsplash](https://unsplash.com/)
- Inspired by Instagram Stories UI/UX
- Built with modern web technologies

---

**Enjoy exploring the Interactive Stories! 🎉**
