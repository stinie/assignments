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
5. Load AI-generated emoji collections from a local JSON file.
6. Randomly select a fitting emoji for each project.
7. Handle loading states and unsuccessful requests.

💡 DISCOVERY
I became more aware of how async and await
complement each other.

async enables the use of await inside a function.

getFolders() and getEmojiData() are asynchronous
because they retrieve data using fetch().

loadAssignments() is asynchronous because it uses
await to retrieve both sets of data.

renderFolders() and getRandomEmoji() are synchronous.
They work with data that has already been retrieved.

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

EMOJI EXPLORATION & LEARNING
The idea was to make the assignment library fun
while preserving its minimal design.

I explored the eeemoji API (https://eeemoji.com/api),
which I particularly enjoyed discovering.

Searching project names revealed a limitation:
meaningful keywords were not always recognized,
and searching individual words could generate
too many API requests.

I considered live AI integration to identify
suitable emojis, but this would introduce
additional complexity and API key management.

The resulting lightweight solution uses Codex
to generate meaningful emoji collections
in a local emojis.json file.

JavaScript matches the GitHub folder names to
these collections and uses Math.random()
to select a fitting emoji on each page load.

A default folder emoji (📁) is used when
no matching collection is available.

CURRENT LIMITATION
Emoji collections are not generated live.
New projects require updating emojis.json
to receive their own fitting emoji selections.

For now, this is an intentional trade-off:
a playful interface without additional
emoji or AI API requests at runtime.

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

function renderFolders(folders, emojiData) {
  assignmentList.replaceChildren();

  for (const folder of folders) {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const emojiCell = document.createElement("td");
    const link = document.createElement("a");

    link.href = folder.html_url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.className = "assignment-link";
    link.textContent = folder.name;

    nameCell.append(link);
    emojiCell.textContent = getRandomEmoji(folder.name, emojiData);

    row.appendChild(emojiCell);
    row.append(nameCell);
    assignmentList.append(row);
  }
}

async function loadAssignments() {
  try {
    const folders = await getFolders();
    const emojiData = await getEmojiData();

    folders.sort((a, b) => a.name.localeCompare(b.name));

    if (folders.length === 0) {
      statusMessage.textContent = "No folders found in the repository.";
      return;
    }

    renderFolders(folders, emojiData);
    itemCount.textContent = `${folders.length} projects`;
    statusMessage.classList.add("d-none");
    tableWrapper.classList.remove("d-none");
  } catch (error) {
    statusMessage.textContent =
      `Could not load the assignments. ${error.message}`;
  }
}

async function getEmojiData() {
  try {
    const response = await fetch("./emojis.json");

    if (!response.ok) {
      throw new Error("Could not load emoji data");
    }

    return await response.json();
  } catch (error) {
    console.error("Emoji data error:", error);
    return {};
  }
}

function getRandomEmoji(folderName, emojiData) {
  const choices = emojiData[folderName];

  if (!choices || choices.length === 0) {
    return "📁";
  }

  const randomIndex = Math.floor(Math.random() * choices.length);

  return choices[randomIndex];
}

loadAssignments();