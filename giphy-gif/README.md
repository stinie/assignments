# GIPHY GIF Finder

## AJAX — XMLHttpRequest

A JavaScript assignment to retrieve GIFs from an API and display them dynamically in the browser using AJAX.

The original assignment used Tenor. Since its API was discontinued, I chose the **GIPHY API** as an alternative.

### Features

- Search GIFs using the GIPHY API.
- Display 12 GIFs per request in a responsive grid.
- Load additional results using a **Load More** button and pagination offsets.
- Filter results using GIPHY's G-rated content setting.
- Display loading messages, search results, and error messages.

### Technical Approach

- **XMLHttpRequest** — Send asynchronous HTTP GET requests.
- **URLSearchParams** — Construct and encode API query parameters.
- **JSON** — Parse API responses and access GIF data.
- **DOM manipulation** — Create and display GIF elements dynamically.
- **Pagination** — Retrieve additional results without replacing existing GIFs.

### Learning & Testing

I explored asynchronous requests, callbacks, HTTP status codes, JSON parsing, and error handling.

My code distinguishes unsuccessful HTTP responses, network failures, unreadable responses, and empty results. I also explored GIPHY's `meta.status` and chose to check the HTTP status directly, before parsing JSON.

Using **Codex in VS Code**, I experimented with a temporary fake `XMLHttpRequest` to simulate an HTTP 500 response. I observed the error handling in the browser and verified normal functionality afterward. No application files were modified during the experiment.

### Files

- `index.html` — Page structure and search interface.
- `script.js` — API requests, pagination, DOM manipulation, and error handling.
- `style.css` — Responsive layout and visual styling.

### Credits & References

This application was assembled with AI assistance from **ChatGPT and Codex**, alongside my own exploration, implementation choices, and testing.

- [GIPHY Developers API](https://developers.giphy.com/docs/api/)
- [Commit Mono](https://commitmono.com/) — Typography

### Progress

Application completed and tested in the browser, including a simulated HTTP 500 error and successful recovery.