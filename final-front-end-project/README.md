# My Assignment Library

## AJAX — The Final Front-end Project

A JavaScript assignment to retrieve project folders from GitHub using the REST API and display them dynamically in the browser.

The application provides a simple, playful index of my coding projects, assignments, and exercises.

### Features

- Retrieve project folders from my GitHub repository.
- Display projects alphabetically as clickable links.
- Show the total number of projects.
- Randomly display a fitting emoji for each project.
- Use a default folder emoji when no matching collection exists.
- Display loading and error messages.
- Provide a responsive, minimal interface.

### Technical Approach

- **Fetch API** — Retrieve GitHub repository contents and a local JSON file.
- **Async/await** — Handle asynchronous operations.
- **JSON** — Process GitHub API responses and AI-generated emoji collections.
- **Array methods** — Filter folders and sort them alphabetically.
- **Math.random()** — Randomly select an emoji from each project's collection.
- **DOM manipulation** — Generate table rows, links, and emojis dynamically.

### Learning & Testing

Explored how `async` and `await` complement each other, along with API error handling and GitHub's rate limits.

Experimented with the **eeemoji API** to discover relevant emojis through keyword searches. Recognized that multiple searches across project names could introduce unnecessary requests.

Explored live AI integration before choosing a lightweight solution: using Codex to generate suitable emoji collections in `emojis.json`, with JavaScript handling the random selection locally.

**Current limitation:** Emoji collections are not generated live. New projects require updating `emojis.json` to receive fitting emojis; otherwise, the default 📁 is displayed.

Tested the responsive layout locally using browser DevTools at different viewport sizes.

### Files

- `index.html` — Page structure and project table.
- `script.js` — API requests, filtering, sorting, emoji selection, DOM manipulation, and error handling.
- `style.css` — Responsive layout and visual styling.
- `emojis.json` — AI-generated collections of fitting emojis for each project.

### Credits & References

I am learning to integrate **Codex** into my local development workflow alongside my code editor. I use AI as a learning companion to strengthen my own reasoning and discernment, explore technical approaches, troubleshoot problems, and communicate my understanding more clearly and concisely in English.

- [GitHub REST API](https://docs.github.com/en/rest) — Retrieving repository contents
- [eeemoji API](https://eeemoji.com/api) — Explored for keyword-based emoji discovery
- [Bootstrap](https://getbootstrap.com/) — Layout and responsive utilities
- [Commit Mono](https://commitmono.com/) — Typography

### Progress

First working version completed, followed by a playful enhancement using AI-generated emoji collections and local JavaScript randomization. Tested locally in the browser.