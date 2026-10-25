/*
MODULE: AJAX
EXERCISE: GIPHY GIF Finder
FILE: script.js

GOAL
Retrieve GIFs from an external API using XMLHttpRequest
and display the results dynamically in the browser.

The original assignment used Tenor. Since its API
was discontinued, I chose GIPHY as an alternative.

APPROACH
1. Listen for a search form submission and validate
   the user's input.

2. Build the API query using URLSearchParams.

3. Send an asynchronous HTTP GET request with
   XMLHttpRequest and handle the response.

4. Parse the JSON response and create GIF elements
   dynamically using DOM manipulation.

5. Limit each request to 12 GIFs and implement
   pagination with a "Load more" button.

6. Provide loading feedback and distinguish between
   HTTP errors, network failures, unreadable responses,
   and empty results.

💡 DISCOVERY
Assigning an onload callback prepares a function to
handle the response when it arrives.

onload does not guarantee an HTTP success status.
A server can return an HTTP 500 response and still
trigger onload.

I chose to check the HTTP status before parsing JSON.
GIPHY also provides status information in its meta
object, which becomes available after parsing.

Pagination does not require numbered pages.
My "Load more" approach uses a limit and an offset
to retrieve additional GIFs without replacing
the existing results.

LEARNING & TESTING
I explored error handling with Codex in VS Code.

Using a temporary fake XMLHttpRequest in the browser,
I simulated an HTTP 500 response without modifying
my application files.

I observed the expected error message and confirmed
that normal API requests worked again afterward.

This introduced me to a new level of testing:
deliberately simulating errors to verify how
my application handles them.
*/
const API_KEY = "ZD1KDWj0cFFBQWgOSZpaLawSMKYymU7U";
const API_URL = "https://api.giphy.com/v1/gifs/search";
// Limit each API request to 12 GIFs.
// Pagination uses a "Load more" button instead of numbered pages.
const RESULTS_PER_PAGE = 12;

const form = document.querySelector("#search-form");
const input = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");
const statusMessage = document.querySelector("#status");
const resultsContainer = document.querySelector("#results");
const loadMoreButton = document.querySelector("#load-more");

let currentQuery = "";
let currentOffset = 0;
let currentRequest = null;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const query = input.value.trim();

  if (!query) {
    input.focus();
    return;
  }

  currentQuery = query;
  currentOffset = 0;
  resultsContainer.replaceChildren();
  loadMoreButton.hidden = true;

  searchGifs({ append: false });
});

loadMoreButton.addEventListener("click", () => {
  searchGifs({ append: true });
});

function searchGifs({ append }) {
  // Cancel an older request so a slower response can't replace newer results.
  if (currentRequest) {
    currentRequest.abort();
  }

  setLoading(true);
  statusMessage.textContent = append ? "Loading more GIFs…" : "Searching…"; // Ternary Operator

  const params = new URLSearchParams({
    api_key: API_KEY,
    q: currentQuery,
    limit: String(RESULTS_PER_PAGE),
    offset: String(currentOffset),
    rating: "g",
    lang: "en",
  });

  const request = new XMLHttpRequest();
  currentRequest = request;

  request.open("GET", `${API_URL}?${params.toString()}`); // Open the request

  // Set up the response handler
  request.onload = () => {
    if (request !== currentRequest) return;

    setLoading(false);

    // Check the HTTP status before parsing JSON.
    // GIPHY also provides response.meta.status, available after parsing.
    if (request.status < 200 || request.status >= 300) {
      showError("GIPHY couldn’t complete that search. Please try again.");
      return;
    }

    try {
      const response = JSON.parse(request.responseText);
      const gifs = response.data ?? [];

      if (gifs.length === 0 && !append) {
        statusMessage.textContent = `No GIFs found for “${currentQuery}”. Try another search.`;
        loadMoreButton.hidden = true;
        return;
      }

      displayGifs(gifs);

      if (!append) {
        statusMessage.textContent =
          `${response.pagination.total_count.toLocaleString()} results for “${currentQuery}”.`;
      } else if (gifs.length === 0) {
        statusMessage.textContent = "You’ve reached the end of the results.";
      }

      currentOffset += gifs.length;
      loadMoreButton.hidden = gifs.length < RESULTS_PER_PAGE;
    } catch {
      showError("The response from GIPHY couldn’t be read. Please try again.");
    }
  };

  // Handle network errors
  request.onerror = () => {
    if (request !== currentRequest) return;

    setLoading(false);
    showError("Couldn’t connect to GIPHY. Check your connection and try again.");
  };

  request.onabort = () => {
    // A newer search has replaced this one.
  };

  request.send(); // Send the request
}

function displayGifs(gifs) {
  const cards = gifs.map((gif) => {

    const imageUrl = gif.images?.fixed_height?.url;
    const title = gif.title || "GIF";

    if (!imageUrl) return null;

    const card = document.createElement("figure");
    card.className = "gif-card";

    const image = document.createElement("img");
    image.src = imageUrl;
    image.alt = title;
    image.loading = "lazy";
    image.decoding = "async";

    card.append(image);
    return card;
  }).filter(Boolean);

  resultsContainer.append(...cards);
}

function setLoading(isLoading) {
  searchButton.disabled = isLoading;
  loadMoreButton.disabled = isLoading;
  searchButton.textContent = isLoading ? "Searching…" : "Search";
}

function showError(message) {
  statusMessage.textContent = message;
  loadMoreButton.hidden = true;
}