# Font Loading Optimizer (FOUT)

**Font Loading Optimizer** is a JavaScript library that helps optimize the loading of web fonts, preventing issues like Flash of Unstyled Text (FOUT) and Flash of Invisible Text (FOIT). By applying modern font loading techniques, this library improves website performance, reduces layout shifts, and enhances the overall user experience.

## Features

- **Preload Fonts**: Preload key fonts to make them available earlier in the page load process.
- **Async Font Loading**: Load fonts asynchronously to avoid blocking the page rendering.
- **Font Display Optimization**: Automatically applies `font-display: swap` to ensure that fallback fonts are used until the custom fonts are ready.
- **Simple API**: Easy-to-use methods to integrate into your web projects.

## Installation

You can install **Font Loading Optimizer** using npm:

```bash
npm install font-loading-optimizer
```

## Usage

Once installed, you can import and use the library to optimize font loading on your webpage.

### Example Usage

```javascript
import FontLoader from 'font-loading-optimizer';

// Create an instance of the FontLoader class
const fontLoader = new FontLoader();

// Call the optimize method to preload and async load fonts
fontLoader.optimize(
    ['https://example.com/fonts/font1.woff2'], // Fonts to preload
    ['https://example.com/fonts/font2.woff2']  // Fonts to load asynchronously
);
```

### API Methods

#### `optimize(preloadFonts, asyncFonts)`

Optimizes font loading by preloading important fonts and asynchronously loading others.

- `preloadFonts`: An array of URLs to font files that should be preloaded. Example: `['https://example.com/font1.woff2']`.
- `asyncFonts`: An array of URLs to font files that should be loaded asynchronously. Example: `['https://example.com/font2.woff2']`.

```javascript
fontLoader.optimize(
    ['https://example.com/font1.woff2'],  // Preload
    ['https://example.com/font2.woff2']   // Async Load
);
```

#### `applyFontDisplay()`

Automatically applies the `font-display: swap` CSS rule globally to prevent Flash of Unstyled Text (FOUT).

You generally don't need to call this method manually, as it's automatically invoked when `optimize` is called.

## How It Works

- **Preload Fonts**: The library uses the `<link rel="preload">` tag to preload fonts. This ensures the fonts are available as soon as possible, reducing load time.
- **Async Font Loading**: Fonts that are not critical are loaded asynchronously using the FontFace API, allowing the page to render without waiting for the font files.
- **Font Display Swap**: The library automatically adds the `font-display: swap` CSS rule, so fallback fonts are shown until the custom fonts are loaded, eliminating Flash of Invisible Text (FOIT).

## Why Use This Library?

- **Improves User Experience**: By optimizing font loading, this library reduces visual glitches (FOUT/FOIT), providing a smoother user experience.
- **Enhances Page Load Performance**: Fonts are loaded efficiently without blocking the rest of the page’s content, improving page load times and Core Web Vitals.
- **Easy Integration**: The API is simple to use and can be quickly integrated into any project.

## Compatibility

This library is compatible with modern browsers that support the FontFace API and `font-display` CSS property (e.g., Chrome, Firefox, Edge). For legacy browsers, the library gracefully degrades and uses fallback fonts to ensure functionality.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contributing

We welcome contributions to improve this library! If you have suggestions, bug reports, or would like to contribute code, please open an issue or submit a pull request.of Invisible Text (FOIT). By applying modern font loading techniques, this library improves website performance, reduces layout shifts, and enhances the overall user experience.

