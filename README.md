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

## Feedback Feature Setup

The feedback button on the homepage allows users to send anonymous feedback via email. To enable this feature, you need to set up EmailJS:

1. **Sign up for EmailJS**: Create a free account at https://www.emailjs.com/

2. **Add an Email Service**:
   - Go to "Email Services" in the EmailJS dashboard
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions to connect your email account
   - Note your Service ID

3. **Create an Email Template**:
   - Go to "Email Templates" in the EmailJS dashboard
   - Click "Create New Template"
   - Set the template name (e.g., "feedback_template")
   - Set the Subject to: `feedback for better-wordle`
   - Set the To Email to: `abhijeetsridhar14@gmail.com`
   - In the Content/Message field, use: `{{message}}`
   - Save the template and note your Template ID

4. **Get your Public Key**:
   - Go to "Account" > "General" in the EmailJS dashboard
   - Find your Public Key (API Key)

5. **Update Configuration**:
   - Open `src/config/emailjs.js`
   - Replace `YOUR_SERVICE_ID` with your Service ID
   - Replace `YOUR_TEMPLATE_ID` with your Template ID
   - Replace `YOUR_PUBLIC_KEY` with your Public Key

6. **Test the Feature**:
   - Run the development server and click the "Feedback" button
   - Submit a test message to verify it works

The feedback feature will work once EmailJS is configured. Users can send anonymous feedback directly from the homepage.