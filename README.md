# NicheMe

<div align="center">
  <img src="public/logo.png" alt="NicheMe Logo" width="200" height="auto" />
  <p><em>The ultimate creative co-pilot for digital content creators</em></p>
</div>

## 📋 Overview

**NicheMe** is a subscription-based SaaS application designed to eliminate creative blocks and strategic guesswork for digital content creators. Using AI and real-time trend analysis, NicheMe provides an endless stream of relevant, data-driven content ideas and undiscovered, high-potential niches.

Our platform targets YouTubers, TikTokers, bloggers, and social media managers who feel overwhelmed by the constant pressure to generate fresh, engaging content. Unlike generic idea lists or complex SEO tools, NicheMe focuses on providing a simple, beautiful, and highly focused user experience.

## ✨ Key Features

### For All Users

- **🧠 AI Idea Generator**
  - Enter a broad topic and receive specific, actionable content ideas
  - Each idea includes a brief description, potential talking points, and suggested format

- **🔍 Niche Discovery Tool**
  - Explore related niches with data on audience size and competition level
  - "Niche Score" helps identify promising areas to expand into

- **💾 Idea Management**
  - Save and organize your favorite content ideas
  - Track which ideas you've already implemented

### Pro Features

- **📈 Real-Time Trend Analysis**
  - Connect to Google Trends and social media APIs
  - Identify breakout topics and trending keywords relevant to your niche

- **🎯 Personalized Suggestions**
  - AI learns your preferences and suggests ideas tailored to your style
  - "For You" section that gets smarter over time

## 🛠️ Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
- **UI Components**: [Shadcn/ui](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Authentication**: [Clerk](https://clerk.com/)
- **Database & Backend**: [Supabase](https://supabase.com/)
- **AI Integration**: [OpenAI API](https://openai.com/) (GPT-4o) / [Google Gemini API](https://ai.google.dev/)
- **Payments**: [Stripe](https://stripe.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## 💰 Subscription Model

### Free Tier ("Spark")
- **Price**: $0/month
- **Features**:
  - 10 AI idea generations per month
  - Limited access to Niche Discovery
  - Save up to 5 ideas

### Pro Tier ("Creator")
- **Price**: $9/month (or $90/year)
- **Features**:
  - Unlimited AI idea generations
  - Full access to Niche Discovery
  - Access to real-time Trend Analysis
  - Save unlimited ideas
  - Priority support

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Supabase account
- Clerk account
- OpenAI API key or Google Gemini API key
- Stripe account (for handling payments)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/nicheme.git
   cd nicheme
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your API keys and configuration

4. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Development Roadmap

### Phase 1: MVP (Weeks 1-3)
- Set up Next.js project with Tailwind CSS
- Integrate Clerk for authentication
- Build the AI Idea Generator
- Connect to AI APIs
- Create Free Tier logic
- Deploy on Vercel

### Phase 2: Core Value (Weeks 4-6)
- Build the Niche Discovery Tool
- Integrate Supabase for data storage
- Set up Stripe for subscriptions
- Develop Pro Tier features

### Phase 3: Launch (Weeks 7-8)
- Create marketing landing page
- Launch on Product Hunt and other platforms
- Implement Trend Analysis feature
- Set up feedback channels

### Phase 4: Ongoing Development
- Develop Personalized Suggestions
- Refine AI prompts
- Add integrations with other platforms

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

For support or inquiries, please contact us at support@nicheme.com or join our [Discord community](https://discord.gg/nicheme).

---

<div align="center">
  <p>Built with ❤️ by the Dulmina Geeganage</p>
</div>
