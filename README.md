<p align="center">
  <img src="./docs/_images/react.svg" alt="React Logo" height="120"/>
  <img src="./docs/_images/vite.png" alt="Vite Logo"  height="120"/> 
  <img src="./docs/_images/typescript.png" alt="TypeScript Logo"  height="120"/>
</p>

<h1 align="center">React Template</h1>
<p align="center">
🚀 Modern React Template: 2024-Ready and Pre-Configured! 🚀
</p>
<br>
<p align="center">
<a href="https://mermaid.live/"><b>Live Projects!</b></a>
</p>
<p align="center">
<a href="https://https://github.com/deepumandal/vite-template/blob/master/README.md">📖 Documentation </a>|
<a href="https://github.com/deepumandal/vite-template/blob/master/README.md#-introduction">🚀 Getting Started</a> |
<a href="https://discord.gg/deepumandal" title="Discord invite">🙌 Join Us</a>
</p>

<div align="center">
    <img src="https://img.shields.io/github/actions/workflow/status/deepumandal/vite-template/build.yml" alt="Build" />
    <img src="https://img.shields.io/github/license/deepumandal/vite-template" alt="License" />
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4" alt="Prettier" />
    <img src="https://img.shields.io/badge/vite-^4.0.0-blue" alt="Vite" />
    <img src="https://img.shields.io/badge/typescript-4.0+-blue" alt="TypeScript" />
    <img src="https://img.shields.io/badge/react-^18.0.0-blue" alt="React" />
    <img src="https://img.shields.io/badge/redux-^4.0.0-blue" alt="Redux" />
    <img src="https://img.shields.io/badge/tailwindcss-^3.0.0-blue" alt="TailwindCSS" />
    <img src="https://img.shields.io/badge/contributions-welcome-brightgreen" alt="Contributions" />
    <img src="https://img.shields.io/github/issues-raw/deepumandal/vite-template" alt="Open Issues" />
</div>

# Vite Template

Welcome to the **Vite Template** project! 🚀

This template is designed to supercharge your frontend development experience by providing a pre-configured setup that reduces the repetitive tasks you often face when starting a new project. Whether you're a seasoned developer or just getting started, this template has everything you need to kickstart your next project with minimal hassle.

## Key Features

### ⚡ Vite + React + TypeScript

- **Fast Build System:** Leverage the speed of Vite with the flexibility of React and TypeScript.
- **Hot Module Replacement (HMR):** Instant updates during development for a seamless experience.

### 🎨 Pre-Built UI Components

- **TailwindCSS Integration:** Responsive, utility-first CSS framework for rapid UI development.
- **Pre-Configured Components:** A set of reusable UI components to get you started quickly.
- **Custom Color Palette:** Easily adjustable to match your brand or project theme.

### 🛠️ Developer Tools

- **Husky:** Pre-commit hooks to ensure code quality.
- **Prettier + ESLint:** Automated code formatting and linting for a consistent codebase.
- **YAML Workflows:** Pre-configured GitHub Actions for CI/CD pipelines.
- **Redux Integration:** State management with minimal setup.

### 📚 Documentation

- **Comprehensive Docs:** In-depth documentation to guide you through the setup and usage.
- **Modern Design:** User-friendly and easy-to-navigate documentation structure.

## Get Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/deepumandal/vite-template.git
   ```
2. **Install dependencies:**

   ```bash
   cd vite-template
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

# Project Structure

<!--
This project follows a structured approach to organize its files and folders. Below is an overview of the directory layout:

#### 📁 Top-Level Files
- 📄 **.github/**
  - 📄 **workflows/codeql.yml**: Configuration for CodeQL analysis.
- 📄 **.husky/**
  - 📄 **pre-commit**: Script to run before commits.
- 📄 **public/**
  - 📄 **vite.svg**: SVG image used in the application.
- 📄 **src/**
  - 📁 **@types/**
    - 📄 **commonTypes.ts**: Common type definitions for the project.
  - 📁 **assets/**
    - 📁 **fonts/**: Fonts used in the application.
    - 📁 **svg/**: SVG images used in the application.
      - 📄 **react.svg**: SVG image for React.
  - 📁 **styles/**
    - 📁 **Container/**
      - 📄 **index.css**: Container styles.
    - 📁 **model/**
      - 📄 **index.css**: Model styles.
    - 📄 **index.css**: Global styles.
  - 📁 **components/**
    - 📁 **HOC/**: Higher-Order Components.
      - 📄 **index.ts**: Entry point for HOC components.
    - 📁 **theme/**: Theming components.
      - 📄 **index.ts**: Theme index.
      - 📄 **theme-provider.tsx**: Theme provider component.
    - 📁 **ui/**: Various UI components.
      - 📄 **Accordion.tsx**: Accordion component.
      - 📄 **Avatar.tsx**: Avatar component.
      - 📄 **Badge.tsx**: Badge component.
      - 📄 **Block.tsx**: Block component.
      - 📄 **Breadcrumb.tsx**: Breadcrumb component.
      - 📁 **Button/**
        - 📄 **button.tsx**: Button component.
        - 📄 **ButtonVariants.ts**: Button variants.
      - 📄 **CheckBox.tsx**: CheckBox component.
      - 📄 **ConfirmationDialog.tsx**: Confirmation dialog component.
      - 📄 **Container.tsx**: Container component.
      - 📄 **ContextMenu.tsx**: Context menu component.
      - 📄 **Flex.tsx**: Flexbox layout component.
      - 📁 **Grid/**
        - 📄 **GridItem.tsx**: Grid item component.
        - 📄 **Grid.tsx**: Grid container component.
      - 📄 **HoverCard.tsx**: Hover card component.
      - 📄 **Model.tsx**: Model component.
      - 📄 **Separator.tsx**: Separator component.
      - 📄 **Skeleton.tsx**: Skeleton loader component.
      - 📄 **ToolTip.tsx**: Tooltip component.
      - 📄 **Typography.tsx**: Typography components.
    - 📁 **hooks/**
      - 📄 **useTheme.ts**: Hook for theme management.
      - 📄 **index.ts**: Exports for hooks.
    - 📁 **shared/**
      - 📄 **index.ts**: Entry point for shared components.
  - 📄 **App.tsx**: Main application component.
  - 📄 **main.tsx**: Entry point for the React application.
  - 📄 **tailwind.css**: Tailwind CSS configuration.
  - 📄 **vite-env.d.ts**: TypeScript definitions for Vite.

#### 📄 Configuration Files
- 📄 **.eslintignore**: ESLint ignore file.
- 📄 **.eslintrc.cjs**: ESLint configuration.
- 📄 **.gitignore**: Git ignore file.
- 📄 **LICENCE.md**: Project license information.
- 📄 **README.md**: Project documentation.
- 📄 **SECURITY.md**: Security guidelines.
- 📄 **cspell.json**: Spell checker configuration.
- 📄 **index.html**: HTML template.
- 📄 **package.json**: Project metadata and dependencies.
- 📄 **pnpm-lock.yaml**: PNPM lock file for dependency versions.
- 📄 **postcss.config.js**: PostCSS configuration.
- 📄 **tailwind.config.js**: Tailwind CSS configuration.
- 📄 **tsconfig.json**: TypeScript configuration.
- 📄 **tsconfig.node.json**: Node-specific TypeScript configuration.
- 📄 **vite.config.ts**: Vite configuration file.





todo   bottom one

2. Troubleshooting
   Common Issues: A section that lists common issues developers might face and how to resolve them.
3. Contributing
   Guidelines: How other developers can contribute to the project.
   Code Style: Any coding conventions or style guides that should be followed.
4. License
   Include a section about the licensing of the template, if applicable.
5. Acknowledgements
   Mention any libraries, frameworks, or resources that were particularly helpful in creating the template.
6. Contact
   Provide contact information or links to report issues or ask questions. -->
