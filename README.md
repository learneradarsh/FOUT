# FOUT

FOUT ensures that fonts are loaded in a way that doesn’t block the rendering of your webpage, minimizes layout shifts, and enhances page load performance. Fonts are often one of the main culprits for slow page rendering, causing a phenomenon known as flash of unstyled text or flash of invisible text. Optimizing font loading is crucial for improving both the user experience and Core Web Vitals.

This library helps optimize font loading to prevent FOIT (Flash of Invisible Text) and FOUT (Flash of Unstyled Text) on your website.

## Usage

```javascript
import FontLoader from 'font-loading-optimizer';

const fontLoader = new FontLoader();
fontLoader.optimize(
    ['https://example.com/font1.woff2'], // Preload fonts
    ['https://example.com/font2.woff2']  // Async Load fonts
);
```

### 3. **Publish the Package**

Now, you can publish the package to npm.

#### Step 3.1: Log In to npm

If you haven’t already, log in to npm from the terminal:

```bash
npm login
```

#### Step 3.2: Publish the Package

Once you're logged in, publish the package:

```bash
npm publish
```

Your package is now live on npm!

### 4. Using the Published Package

After your package is published, anyone can install and use it in their project by running:

```bash
npm install font-loading-optimizer
```

Then, in their project, they can use it like so:

```javascript
import FontLoader from 'font-loading-optimizer';

const fontLoader = new FontLoader();
fontLoader.optimize(
    ['https://example.com/font1.woff2'], // Preload fonts
    ['https://example.com/font2.woff2']  // Async Load fonts
);
```

## Conclusion
Now, your font-loading-optimizer is a reusable npm package that anyone can install and use in their JavaScript projects!