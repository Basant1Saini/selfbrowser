# SelfBrowser

A modern web browser built using the MERN stack (MongoDB, Express.js, React, Node.js) with additional technologies for enhanced functionality.

## Tech Stack

### Frontend
- **React 18** - Modern UI library with concurrent features
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router v6** - Client-side routing
- **Zustand** - Lightweight state management
- **React Query (TanStack Query)** - Server state management

### Backend
- **Node.js 18+** - JavaScript runtime
- **Express.js** - Web application framework
- **TypeScript** - Type-safe server development
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **cors** - Cross-origin resource sharing
- **helmet** - Security middleware

### Browser Engine
- **Electron** - Cross-platform desktop app framework
- **Puppeteer** - Headless Chrome automation
- **Chromium** - Open-source browser engine

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Jest** - Testing framework
- **React Testing Library** - Component testing
- **Supertest** - API testing

## Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher (or yarn 3.0.0+)
- MongoDB 6.0 or higher
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/selfbrowser.git
cd selfbrowser
```

2. Install dependencies:
```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

3. Environment Setup:
```bash
# Create environment files
cp server/.env.example server/.env
cp client/.env.example client/.env
```

4. Configure environment variables:
```env
# server/.env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/selfbrowser
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development

# client/.env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=SelfBrowser
```

## Development

1. Start MongoDB service
2. Run the development servers:

```bash
# Terminal 1 - Backend server
cd server
npm run dev

# Terminal 2 - Frontend development server
cd client
npm run dev

# Terminal 3 - Electron app (optional)
npm run electron:dev
```

## Scripts

### Root Level
```bash
npm run dev          # Start both frontend and backend
npm run build        # Build for production
npm run test         # Run all tests
npm run lint         # Lint all code
npm run format       # Format all code
```

### Frontend (client/)
```bash
npm run dev          # Start Vite dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run test         # Run component tests
npm run lint         # Lint frontend code
```

### Backend (server/)
```bash
npm run dev          # Start with nodemon
npm run start        # Start production server
npm run test         # Run API tests
npm run lint         # Lint backend code
```

## Project Structure

```
selfbrowser/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom hooks
│   │   ├── store/         # State management
│   │   ├── utils/         # Utility functions
│   │   └── types/         # TypeScript types
│   ├── public/            # Static assets
│   └── package.json
├── server/                # Express backend
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── models/        # Database models
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Custom middleware
│   │   └── utils/         # Utility functions
│   └── package.json
├── electron/              # Electron main process
└── package.json           # Root package.json
```

## Features

- 🌐 Web browsing with modern UI
- 🔐 User authentication and profiles
- 📚 Bookmark management
- 📜 Browsing history
- 🔍 Search functionality
- 🛡️ Security features
- 📱 Responsive design
- 🎨 Customizable themes
- 🔧 Developer tools integration

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For support, email support@selfbrowser.com or create an issue on GitHub.