// update-data.js
const { Octokit } = require("octokit");

const octokit = new Octokit({
  auth: process.env.GH_TOKEN,  // Secret injected via GitHub Actions
});

async function updateRepo() {
  await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", {
    owner: "thebeautymetric",
    repo: "faceratings",
    path: "data.json",  // File to update
    message: "Update data via GitHub Actions",
    content: Buffer.from(JSON.stringify({ new: "data" })).toString("base64"),
    sha: "..."  // Optional: File SHA if updating existing file
  });
}

updateRepo();
