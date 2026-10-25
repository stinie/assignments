# My Assignment Library

## AJAX — The Final Front-end Project

A JavaScript assignment to retrieve project folders from GitHub using the REST API and display them dynamically in the browser.

The application provides a simple index of my coding projects, assignments, and exercises.

### Features

- Retrieve project folders from my GitHub repository.
- Display projects alphabetically as clickable links.
- Show the total number of projects.
- Display loading and error messages.
- Provide a responsive, minimal interface.

### Technical Approach

- **Fetch API** — Retrieve repository contents using an HTTP GET request.
- **Async/await** — Handle asynchronous operations.
- **JSON** — Process the GitHub API response.
- **Array methods** — Filter folders and sort them alphabetically.
- **DOM manipulation** — Generate table rows and links dynamically.

### Learning & Testing

Explored how `async` and `await` complement each other, along with API error handling and GitHub's rate limits.

Tested the responsive layout locally using browser DevTools at different viewport sizes.

### Files

- `index.html` — Page structure and project table.
- `script.js` — API request, filtering, sorting, DOM manipulation, and error handling.
- `style.css` — Responsive layout and visual styling.

### Credits & References

I am learning to integrate **Codex** into my local development workflow alongside my code editor. I use AI as a learning companion to strengthen my own reasoning and discernment, explore technical approaches, troubleshoot problems, and communicate my understanding more clearly and concisely in English.

- [GitHub REST API](https://docs.github.com/en/rest) — Retrieving repository contents
- [Bootstrap](https://getbootstrap.com/) — Layout and responsive utilities
- [Commit Mono](https://commitmono.com/) — Typography

### Progress

First working version completed and tested locally in the browser.