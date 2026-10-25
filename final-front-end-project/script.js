/*
MODULE: AJAX
PROJECT: The Final Front-end Project
TITLE: My Assignment Library
FILE: script.js

GOAL
Create a simple, dynamic index of my coding projects,
assignments, and exercises using the GitHub REST API.

APPROACH
1. Request the contents of my GitHub assignments repository.
2. Filter the response to include only root-level folders.
3. Display the folders alphabetically as clickable links.
4. Show the total number of projects.
5. Handle loading states and unsuccessful requests.

💡 DISCOVERY
I became more aware of how async and await
complement each other.

async enables the use of await inside a function.

getFolders() is asynchronous because it uses fetch()
to retrieve data from the GitHub API.

loadAssignments() is also asynchronous because it
uses await to wait for the result of getFolders().

renderFolders() does not need to be asynchronous.
Once the folder data is available, it can create
and display the HTML elements synchronously.

IMPLEMENTATION DISCOVERY
My intention was to retrieve only the root-level folders.

The initial AI-assisted implementation used recursive
API requests, which were unnecessary for this purpose
and exhausted the GitHub API rate limit.

I simplified the implementation to use a single
request and filter the returned data for folders.

The GitHub API has rate limits.
Making unnecessary requests can exhaust the
available allowance.

RESPONSIVE DESIGN & TESTING
Chrome DevTools → Toggle Device Toolbar allows me
to test different viewport sizes before publishing.

This helps me inspect text wrapping, spacing,
and responsive CSS behavior on simulated devices.
*/

const owner = "stinie";
const repo = "assignments";

const statusMessage = document.querySelector("#status");
const tableWrapper = document.querySelector("#table-wrapper");
const assignmentList = document.querySelector("#assignment-list");
const itemCount = document.querySelector("#item-count");

async function getFolders() {
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents`;

  const response = await fetch(apiUrl);

  if (!response.ok) {
    const details = await response.json().catch(() => ({}));
    throw new Error(
      details.message || `GitHub returned an error (${response.status}).`
    );
  }

  const data = await response.json();

  return data.filter((item) => item.type === "dir");
}

function renderFolders(folders) {
  assignmentList.replaceChildren();

  for (const folder of folders) {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const link = document.createElement("a");

    link.href = folder.html_url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.className = "assignment-link";
    link.textContent = folder.name;

    nameCell.append(link);
    row.append(nameCell);
    assignmentList.append(row);
  }
}

async function loadAssignments() {
  try {
    const folders = await getFolders();

    folders.sort((a, b) => a.name.localeCompare(b.name));

    if (folders.length === 0) {
      statusMessage.textContent = "No folders found in the repository.";
      return;
    }

    renderFolders(folders);
    itemCount.textContent = `${folders.length} projects`;
    statusMessage.classList.add("d-none");
    tableWrapper.classList.remove("d-none");
  } catch (error) {
    statusMessage.textContent =
      `Could not load the assignments. ${error.message}`;
  }
}

loadAssignments();