# EduPath - Complete Learning Platform for JEE, NEET & BTech Students

A comprehensive educational platform designed to help students excel in competitive exams (JEE, NEET) and build successful careers in technology (BTech).

## 🌟 Features

### For Students
- **JEE Preparation** - Physics, Chemistry, and Mathematics resources with Google Drive integration
- **NEET Preparation** - Biology, Physics, and Chemistry study materials
- **BTech Resources Hub** - Specialized resources for computer science students
  - CS Fundamentals
  - Data Structures & Algorithms (DSA)
  - Roadmap with Resources
  - Internship Calendar
  - Git & GitHub Cheatsheet

### Platform Features
- **AI-Powered Chatbot** - Get instant help with your doubts using Google Gemini AI
- **Google Drive Integration** - Direct access to curated study materials
- **User Authentication** - Secure login and registration with Supabase
- **Category-Based Learning** - Personalized content based on your track (JEE/NEET/BTech)
- **Modern UI** - Beautiful, responsive design with smooth animations
- **Progress Tracking** - Monitor your learning journey

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or bun package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd edupath-student-hub-main

# Install dependencies
npm install

# Set up environment variables
# Copy .env.example to .env and add your keys:
# - VITE_SUPABASE_URL
# - VITE_SUPABASE_PUBLISHABLE_KEY
# - VITE_GEMINI_API_KEY (optional, for AI chatbot)

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS
- **Backend/Database**: Supabase
- **Authentication**: Supabase Auth
- **AI Integration**: Google Gemini API
- **Routing**: React Router v6
- **State Management**: TanStack Query
- **Form Handling**: React Hook Form with Zod validation

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── ChatBot.tsx     # AI chatbot component
│   ├── CategoryCard.tsx
│   ├── CourseCard.tsx
│   └── Navbar.tsx
├── pages/              # Page components
│   ├── Index.tsx       # Landing page
│   ├── Dashboard.tsx   # User dashboard
│   ├── Courses.tsx     # Courses listing
│   ├── BtechResources.tsx  # BTech resources hub
│   ├── Login.tsx
│   └── Register.tsx
├── lib/                # Utility functions
│   └── auth.tsx        # Authentication context
├── integrations/       # External service integrations
│   └── supabase/       # Supabase client and types
└── App.tsx             # Main app component with routing
```

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_PROJECT_ID=your_project_id
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key

# Optional: For AI chatbot functionality
VITE_GEMINI_API_KEY=your_gemini_api_key
```

## 🎯 Key Features Implementation

### AI Chatbot
- Floating chat button accessible from all pages
- Real-time AI responses using Google Gemini
- Contextual help for JEE, NEET, and BTech subjects
- Fallback responses when API key is not configured

### BTech Resources Hub
When users click on "BTech Courses" from the dashboard, they access:
1. **CS Fundamentals** - Core computer science concepts
2. **DSA** - Data structures and algorithms resources
3. **Roadmap with Resources** - Career and placement preparation
4. **Internship Calendar** - Track opportunities and deadlines
5. **Git & GitHub Cheatsheet** - Version control essentials

All resources link to organized Google Drive folders for easy access.

### Google Drive Integration
Direct links to curated study materials:
- **JEE**: Mathematics, Physics, Chemistry
- **NEET**: Biology, Physics, Chemistry
- **BTech**: Subject-specific folders and roadmaps

## 🧪 Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Build
npm run build        # Production build
npm run build:dev    # Development build

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode

# Linting
npm run lint         # Run ESLint

# Preview
npm run preview      # Preview production build
```

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔐 Authentication Flow

1. Users register with email, password, full name, and category (JEE/NEET/BTech)
2. Supabase handles authentication and session management
3. Protected routes ensure only authenticated users access dashboard and courses
4. User profile data stored in Supabase database

## 🗄️ Database Schema

### Tables
- **profiles**: User information (full_name, category, user_id)
- **courses**: Course catalog (title, description, category, resource_link)

### Categories
- JEE (Joint Entrance Examination)
- NEET (National Eligibility cum Entrance Test)
- BTECH (Bachelor of Technology)

## 🤝 Contributing

This is a student-focused educational platform. Contributions are welcome!

## 📄 License

All rights reserved © 2024 EduPath

## 🆘 Support

For issues or questions:
- Check existing documentation
- Review the codebase structure
- Contact the development team

## 🎓 About EduPath

EduPath is designed to empower students to achieve their academic goals and build successful careers in technology. We provide comprehensive resources, AI-powered assistance, and a structured learning path for JEE, NEET, and BTech students.

---

**Built with ❤️ for students, by students**
