# 🎨 CSS Changer

A fun, hands-on playground for learning HTML, CSS, and JavaScript by **visually tweaking CSS properties in real time** using sliders. Instead of memorizing values, drag a slider and instantly see how `width`, `height`, `blur`, `padding`, and `border-radius` affect an image.

## ✨ Features

- 🎚️ **Live Sliders** — adjust CSS values on the fly, no page reload needed
- 📦 **Width & Height Control** — resize a box and watch it change instantly
- 🌫️ **Blur Effect** — apply and control `filter: blur()` visually
- 📐 **Padding Adjuster** — see how spacing changes the box's look
- 🟢 **Border Radius Control** — morph sharp corners into smooth curves
- 👀 **Instant Visual Feedback** — every change is reflected immediately on a preview element
- 🧠 **Beginner-Friendly Code** — clean, readable HTML/CSS/JS meant for learning

## 🖥️ Demo Preview

```
┌─────────────────────────────┐
│   Width:      [====o=====]  │
│   Height:     [==o=======]  │
│   Blur:       [=====o====]  │
│   Padding:    [===o======]  │
│   Radius:     [=======o==]  │
│                              │
│        ┌────────────┐       │
│        │            │       │
│        │   Preview  │       │
│        │            │       │
│        └────────────┘       │
└─────────────────────────────┘
```

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML** | Structure of the sliders and preview box |
| **CSS** | Styling the UI and defining the properties being controlled |
| **JavaScript** | Reading slider input values and updating CSS in real time |

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/css-changer.git
   ```
2. **Navigate into the project folder**
   ```bash
   cd css-changer
   ```
3. **Open `index.html`** in your browser — that's it, no build tools or dependencies required!

## 📁 Project Structure

```
css-changer/
├── index.html      # Markup for sliders and preview box
├── style.css       # Base styling
├── script.js       # Slider logic + dynamic CSS updates
├── assets          # Assets of the project
   ├── image.png    # Target Image
└── README.md        # You're here!
```

## 🎯 How It Works

Each slider is an `<input type="range">` element. JavaScript listens for the `input` event on every slider, reads its current value, and updates the corresponding CSS property on the preview box using `element.style.property`.

```js
widthSlider.oninput = () => {
  preview.style.width = `${widthSlider.value}px`;
};
```

The same pattern repeats for height, blur, padding, and border-radius — making it a great mini case study in connecting user input to dynamic styling.

## 📚 Why This Project?

This project is designed as a **learning exercise** to help understand:
- How the DOM connects HTML elements to JavaScript
- How to listen for and handle user input events
- How CSS properties can be manipulated dynamically
- How small, focused projects build real front-end intuition

## 🔮 Future Ideas

- [ ] Add color pickers for background and border color
- [ ] Add a "Copy CSS" button to export generated styles
- [ ] Add rotation and shadow controls
- [ ] Save/load presets using local storage
- [ ] Dark mode toggle for the UI

## 🤝 Contributing

This is a personal learning project, but suggestions and pull requests are welcome! Feel free to fork it and experiment with your own slider-controlled properties.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with curiosity, sliders, and a lot of `element.style` 🎛️*
