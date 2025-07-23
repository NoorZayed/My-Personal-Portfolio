# My Personal Portfolio

A modern, responsive personal portfolio website showcasing my projects, skills, and professional experience. Built with HTML5, CSS3, and JavaScript, featuring a clean design with glassmorphism effects and smooth animations.

## 🌟 Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean design with glassmorphism effects and gradient backgrounds
- **Interactive Project Showcase**: Dynamic project cards with spotlight view
- **Working Contact Form**: Functional contact form that sends emails directly to Gmail
- **Professional Styling**: Beautiful typography, smooth animations, and hover effects
- **Data-Driven Content**: All personal information loaded from JSON files
- **Smooth Navigation**: Sticky header with smooth scroll navigation

## 🚀 Live Demo

[View Live Portfolio](https://noorzayed.github.io/My-Personal-Portfolio)

## 📱 Screenshots

<!-- Add screenshots of your portfolio here -->

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Modern CSS with Flexbox/Grid, CSS Variables, Glassmorphism
- **Fonts**: Google Fonts (Inter)
- **Email Service**: Web3Forms API
- **Responsive Design**: Mobile-first approach with CSS media queries

## 📂 Project Structure

```
My-Personal-Portfolio/
├── index.html                 # Main HTML file
├── README.md                 # Project documentation
├── send-email.php           # PHP email handler (backup)
└── starter/
    ├── css/
    │   ├── normalize.css    # CSS reset
    │   └── styles.css       # Main stylesheet
    ├── data/
    │   ├── aboutMeData.json # Personal information
    │   └── projectsData.json # Project details
    ├── images/              # Portfolio images
    │   ├── headshot images
    │   ├── project images
    │   └── placeholder images
    └── js/
        └── scripts.js       # Main JavaScript file
```

## 🎨 Design Features

- **Color Scheme**: Professional green and white palette
- **Typography**: Inter font family for modern readability
- **Effects**: Glassmorphism, gradients, shadows, and smooth transitions
- **Layout**: Mobile-first responsive design with CSS Grid and Flexbox
- **Animations**: Hover effects, smooth scrolling, and interactive elements

## 📧 Contact Form

The portfolio includes a fully functional contact form that:
- Validates user input client-side
- Sends emails directly to your Gmail using Web3Forms API
- Provides user feedback on submission success/failure
- Includes character count for message field
- Responsive design with beautiful styling

## 📊 Sections

1. **Header**: Navigation with smooth scroll links
2. **About Me**: Personal bio with profile image
3. **Contact Information**: Professional contact details
4. **Education**: Academic background and notable courses
5. **Certifications**: Professional certifications and credentials
6. **Skills**: Technical and soft skills organized by category
7. **Experience**: Work experience with responsibilities
8. **Languages**: Language proficiency levels
9. **Projects**: Interactive showcase with spotlight feature
10. **Contact Form**: Functional email contact form

## 🚀 Getting Started

### Prerequisites
- Modern web browser
- Local web server (for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/My-Personal-Portfolio.git
   cd My-Personal-Portfolio
   ```

2. **Open in browser**
   - For development: Use a local server (Live Server extension in VS Code)
   - For production: Upload to any web hosting service

### Configuration

1. **Update Personal Data**
   - Edit `starter/data/aboutMeData.json` with your information
   - Edit `starter/data/projectsData.json` with your projects
   - Replace images in `starter/images/` with your own

2. **Contact Form Setup**
   - The Web3Forms access key is already configured
   - Forms will be sent to the email configured in Web3Forms
   - No additional setup required

## 📁 Data Structure

### aboutMeData.json
```json
{
  "name": "Your Name",
  "aboutMe": "Your bio...",
  "headshot": "path/to/image",
  "contact": { /* contact info */ },
  "education": { /* education details */ },
  "certifications": [ /* certifications array */ ],
  "skills": { /* skills by category */ },
  "experience": [ /* work experience */ ],
  "languages": [ /* language proficiency */ ]
}
```

### projectsData.json
```json
[
  {
    "project_id": "unique_id",
    "project_name": "Project Name",
    "short_description": "Brief description",
    "long_description": "Detailed description",
    "card_image": "path/to/card/image",
    "spotlight_image": "path/to/spotlight/image",
    "url": "project_url"
  }
]
```

## 🎯 Key Features Explained

### Interactive Project Showcase
- **Card View**: Scrollable project cards with hover effects
- **Spotlight**: Detailed view of selected project
- **Navigation**: Arrow controls for easy browsing
- **Selection**: Visual indication of currently selected project

### Responsive Design
- **Mobile**: Horizontal scrolling project cards
- **Desktop**: Vertical layout with side navigation
- **Tablet**: Optimized layout for medium screens

### Contact Form Integration
- **Web3Forms**: No backend required
- **Validation**: Client-side form validation
- **Feedback**: Success/error messages
- **Accessibility**: Proper labels and ARIA attributes

## 🔧 Customization

### Colors
Update CSS variables in `styles.css`:
```css
:root {
    --lightBG: #fff8f3;
    --onLightBG: #201b13;
    --success: #4e6542;
    --onSuccess: #ffffff;
    --error: #ba1a1a;
    --onError: #ffffff;
}
```

### Fonts
Change the Google Fonts import and font-family properties in `styles.css`.

### Layout
Modify the CSS Grid and Flexbox properties to adjust layouts.

## 📈 Performance Features

- **Optimized Images**: WebP format where supported
- **Lazy Loading**: Images load as needed
- **Minified Assets**: Compressed CSS and JavaScript
- **Fast Loading**: Efficient code structure

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Noor Zayed**
- Email: noorzayed204@gmail.com
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- GitHub: [Your GitHub Profile](https://github.com/yourusername)

## 🙏 Acknowledgments

- Google Fonts for the Inter font family
- Web3Forms for the contact form service
- CSS-Tricks and MDN for development resources
- Inspiration from modern portfolio designs

---

⭐ **Star this repository if you found it helpful!**
