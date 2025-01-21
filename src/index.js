class FontLoader {
    constructor() {
      this.fontsToPreload = [];
      this.fontsToAsyncLoad = [];
    }
  
    // Add fonts to preload
    preloadFonts(fontUrls) {
      fontUrls.forEach((url) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = url;
        link.as = 'font';
        link.type = 'font/woff2';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
        this.fontsToPreload.push(url);
      });
    }
  
    // Add fonts to load asynchronously
    async loadFonts(fontUrls) {
      fontUrls.forEach((url) => {
        const fontFace = new FontFace('CustomFont', `url(${url})`);
        fontFace.load().then(() => {
          document.fonts.add(fontFace);
          console.log(`${url} loaded successfully`);
        }).catch((error) => {
          console.error(`Font loading failed for ${url}`, error);
        });
        this.fontsToAsyncLoad.push(url);
      });
    }
  
    // Apply font-display: swap globally
    applyFontDisplay() {
      const style = document.createElement('style');
      style.innerHTML = `* { font-display: swap; }`;
      document.head.appendChild(style);
    }
  
    // Method to initialize and optimize font loading
    optimize(fontUrlsToPreload, fontUrlsToAsyncLoad) {
      this.preloadFonts(fontUrlsToPreload);
      this.loadFonts(fontUrlsToAsyncLoad);
      this.applyFontDisplay();
    }
  }
  
  export default FontLoader;
  