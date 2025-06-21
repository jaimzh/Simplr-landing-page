# Simplr Landing Page

A modern, responsive React + Vite landing page for the [Simplr browser extension](https://chromewebstore.google.com/detail/simplr-%E2%80%93-instant-definiti/lfpmflkfdkokmglemcpmfdllkefbefih?utm_source=item-share-cb), featuring custom components, smooth scrolling, and beautiful branding with Tailwind CSS.

## ✨ Features

- **Fully Responsive**: Mobile-first design, scales beautifully on all devices.
- **Custom Components**: Modular React components for Navbar, Hero, Benefits, How It Works, Reviews, Pricing, FAQ, and more.
- **Smooth Scrolling Navigation**: Section links use smooth scroll with header offset.
- **Custom Branding**: Uses CSS variables and Tailwind for consistent Simplr colors and style.
- **Professional UI/UX**: Cartoon shadows, animated FAQ accordion, review carousel, and more.
- **Accessibility**: Keyboard navigation, ARIA labels, and semantic HTML.
- **Easy Theming**: All colors and effects use CSS variables for quick updates.

   ```

## 🛠️ Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Lenis](https://github.com/studio-freight/lenis) (optional smooth scroll)
- [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
- [ESLint](https://eslint.org/)

## 📁 Project Structure

```
src/
  components/
    Header.jsx
    Hero.jsx
    Benefits.jsx
    HowItWorks.jsx
    SeeSimplrInAction.jsx
    Reviews.jsx
    ReviewCard.jsx
    Price.jsx
    PriceCard.jsx
    FAQ.jsx
    Accordion.jsx
    TrySimplr.jsx
    Footer.jsx
  App.jsx
  index.css
public/
  logo.svg
  ...
```


## 📄 Extra Notes

> Had to use eager loading and preloading to ensure the hero image loads before all the elements, just so we can get that smooth framer motion animation to show up  
