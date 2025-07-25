# 🪂 Paragliding Quiz

[Try it now!](https://piochelepiotr.github.io/paragliding-quiz/)

An interactive quiz application for paragliding students based on the USHPA Pilot Proficiency Program questions. The quiz features adaptive questioning that focuses more on questions you've struggled with while still reviewing previously answered questions.

## Answers are not absolute truth

Although Cursor was very good at doing the website (nearly no manual changes required) it was far worse at answering the questions. So the answers are mine and maybe not all correct. If you see errors, let me know and I will fix them!

Here is ChatGPT explaining why the wind shadow is downwind of the lake:
<img width="852" height="847" alt="image" src="https://github.com/user-attachments/assets/2d2f68b2-9062-487d-ba40-b6342cc3460a" />

So yes, I guess we no longer need coders, but still need paraglider instructors :D


## Features

- **Adaptive Learning**: Questions you've answered incorrectly appear more frequently
- **Progress Tracking**: Real-time statistics showing your performance
- **Multiple Question Types**: Support for both single-choice and multiple-choice questions
- **Persistent Progress**: Your quiz history is saved locally in your browser
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, intuitive interface with smooth animations

## Deployment on GitHub Pages

### Option 1: Simple Deployment (Recommended)

1. **Create a new repository** on GitHub
   - Go to [github.com](https://github.com) and click "New repository"
   - Name it something like `paragliding-quiz`
   - Make it public
   - Don't initialize with README (we'll upload our files)

2. **Upload the files**
   - Upload these files to your repository:
     - `index.html`
     - `styles.css`
     - `script.js`
     - `README.md` (this file)

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

4. **Access your quiz**
   - Your quiz will be available at: `https://yourusername.github.io/paragliding-quiz`

### Option 2: Using GitHub CLI

```bash
# Clone this repository or create a new one
git clone https://github.com/yourusername/paragliding-quiz.git
cd paragliding-quiz

# Add the files
git add .
git commit -m "Initial commit"
git push origin main

# Enable GitHub Pages (if not already done through web interface)
gh repo edit --enable-pages
```

## How It Works

### Adaptive Questioning Algorithm

The quiz uses a weighted selection system that considers:
- **Accuracy**: Questions you've answered incorrectly get higher priority
- **Time Since Last Seen**: Older questions get higher priority
- **Attempt Count**: New questions get higher priority

### Question Types

- **Single Choice**: Radio buttons for questions with one correct answer
- **Multiple Choice**: Checkboxes for questions with multiple correct answers

### Progress Persistence

Your quiz progress is automatically saved to your browser's local storage, including:
- Total questions answered
- Correct answers
- Individual question statistics
- Last seen timestamps

## File Structure

```
paragliding-quiz/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # Quiz logic and adaptive algorithm
└── README.md           # This file
```

## Customization

### Adding More Questions

To add more questions, edit the `script.js` file and add to the `additionalQuestions` array:

```javascript
{
    id: 26,
    question: "Your question text here?",
    type: "single", // or "multiple"
    options: [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
    ],
    correct: [0], // Array of correct option indices (0-based)
    explanation: "Explanation of the correct answer."
}
```

### Styling

The quiz uses a modern design with CSS custom properties. You can customize colors, fonts, and layout by editing `styles.css`.

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Local Development

To run the quiz locally:

1. Download all files to a folder
2. Open `index.html` in your web browser
3. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

## Contributing

Feel free to:
- Add more questions
- Improve the adaptive algorithm
- Enhance the UI/UX
- Fix bugs or typos

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Questions based on USHPA Pilot Proficiency Program
- Built with vanilla JavaScript, HTML, and CSS
- Icons from Unicode emoji 
