# Task Management System

A modern, feature-rich task management application built with React, TypeScript, and Tailwind CSS. This system allows users to create, manage, and track tasks with comprehensive filtering, user assignments, and priority management.

## ✨ Features

- **Task Management**: Create, edit, delete, and track tasks with detailed information
- **User Assignment**: Assign tasks to team members with user profiles and avatars
- **Status Tracking**: Organize tasks by status (To Do, In Progress, Done)
- **Priority Levels**: Categorize tasks by priority (Low, Medium, High) with color coding
- **Advanced Filtering**: Filter tasks by status, priority, assigned user, and search terms
- **Task Statistics**: Real-time dashboard showing task distribution and progress
- **Due Date Management**: Track due dates with overdue indicators
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed on your system:
- **Node.js** (version 16.0 or higher)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Clone or download the project**
   ```bash
   # If you have the project as a zip file, extract it
   # If cloning from a repository:
   git clone <repository-url>
   cd task-management-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or if you prefer yarn:
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   or with yarn:
   ```bash
   yarn dev
   ```

4. **Open your browser**
   
   The application will automatically open in your default browser at `http://localhost:5173`

## 📁 Project Structure

```
task-management-system/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── TaskCard.tsx   # Individual task display
│   │   ├── TaskFilter.tsx # Filtering interface
│   │   ├── TaskForm.tsx   # Task creation/editing form
│   │   ├── TaskList.tsx   # Task grid layout
│   │   └── TaskStats.tsx  # Statistics dashboard
│   ├── data/
│   │   └── mockData.ts    # Sample data for users and tasks
│   ├── utils/
│   │   └── taskUtils.ts   # Utility functions
│   ├── types.ts           # TypeScript type definitions
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles with Tailwind
├── package.json           # Project dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.ts         # Vite build configuration
└── README.md              # This file
```

## 🎯 How to Use

### Creating Tasks
1. Click the **"New Task"** button in the header
2. Fill in the task details:
   - **Title**: Brief description of the task
   - **Description**: Detailed task information
   - **Assign to**: Select a team member
   - **Due Date**: Set the deadline
   - **Priority**: Choose Low, Medium, or High
   - **Status**: Set initial status
3. Click **"Create Task"** to save

### Managing Tasks
- **Edit**: Click the edit icon on any task card
- **Delete**: Click the trash icon (with confirmation)
- **Change Status**: Use the status buttons at the bottom of each task card
- **View Details**: All task information is displayed on the card

### Filtering Tasks
Use the filter panel to narrow down tasks:
- **Search**: Type keywords to search titles and descriptions
- **Status**: Filter by To Do, In Progress, or Done
- **Priority**: Filter by Low, Medium, or High priority
- **User**: Filter by assigned team member

### Understanding the Dashboard
- **Total Tasks**: Overall task count
- **To Do**: Tasks not yet started
- **In Progress**: Currently active tasks
- **Completed**: Finished tasks
- **Overdue**: Tasks past their due date

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

### Adding New Users
Edit `src/data/mockData.ts` to add more team members:

### Modifying Colors
The application uses Tailwind CSS. Key colors can be modified in:
- `tailwind.config.js` for theme colors
- `src/utils/taskUtils.ts` for priority and status colors

### Adding Features
The modular component structure makes it easy to extend:
- Add new task fields in `src/types.ts`
- Update the form in `src/components/TaskForm.tsx`
- Modify the display in `src/components/TaskCard.tsx`

## 🌐 Browser Support

This application works on all modern browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## 📱 Mobile Experience

The application is fully responsive and provides an excellent mobile experience with:
- Touch-friendly interface
- Optimized layouts for small screens
- Swipe gestures support
- Mobile-first design approach

## 🔧 Troubleshooting

### Common Issues

**Port already in use**
```bash
# Kill the process using port 5173
npx kill-port 5173
# Then restart the dev server
npm run dev
```

**Dependencies not installing**
```bash
# Clear npm cache
npm cache clean --force
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors**
```bash
# Check for TypeScript errors
npm run lint
# Clean build
rm -rf dist
npm run build
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you encounter any issues or have questions, please create an issue in the project repository.

---

**Built with using React, JavaScript, and Tailwind CSS**
