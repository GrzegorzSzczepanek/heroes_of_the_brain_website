# Heroes of the Brain Website

Welcome to the Heroes of the Brain website! This project is a static site built with SvelteKit, Tailwind CSS, and Leaflet.js to provide an informative and interactive experience.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Development](#development)
- [Building and Deploying](#building-and-deploying)
- [Features](#features)
- [License](#license)

## Technologies Used

- **SvelteKit**: Framework for building high-performance web applications.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Leaflet.js**: Open-source JavaScript library for interactive maps.
- **Vite**: Next-generation frontend tooling for fast builds.


## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/heroes_of_the_brain_website.git
    cd heroes_of_the_brain_website
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

## Development

1. **Run the development server:**

    ```sh
    npm run dev
    ```

2. **Open your browser:**

    Navigate to `http://localhost:5173` to see the website in action.

## Building and Deploying

### Building

To build the project, run:

```sh
# Step 1: Stash any local changes (you've already done this)
git stash

# Step 2: Make sure we're on the correct branch
git checkout main

# Step 3: Completely remove node_modules and lock files
rm -rf node_modules
rm -f package-lock.json

# Step 4: Clear NPM cache
npm cache clean --force

# Step 5: Install dependencies fresh
npm install

# Step 6: Try the build again
npm run build

# Step 7: If successful, restart the service
sudo systemctl restart heroesofthebrain
```

