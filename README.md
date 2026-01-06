# better-wordle
Better version of wordle with enhanced features

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Deploy to GitHub Pages

### First-time setup:

1. Make sure your repository is pushed to GitHub
2. Go to your repository settings on GitHub
3. Navigate to "Pages" in the settings
4. Set source to "gh-pages" branch (this will be created automatically)
5. Save the settings

### Deploy:

Run the deploy command:
```bash
npm run deploy
```

This will:
- Build your React app
- Deploy it to the `gh-pages` branch
- Make it available at: `https://[your-username].github.io/better-wordle/`

### Note:
The base path is configured as `/better-wordle/` in `vite.config.js`. If your repository name is different, update the `base` property in `vite.config.js` accordingly.