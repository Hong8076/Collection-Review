function openCollection() {

document.body.innerHTML = `

<header>

<h1>📚 Collection</h1>

<p>Collect today's knowledge.</p>

</header>

<main>

<input
id="title"
type="text"
placeholder="Title">

<textarea
id="content"
placeholder="Content"></textarea>

<select>

<option>History</option>

<option>Math</option>

<option>English</option>

<option>Science</option>

<option>Programming</option>

</select>

<button onclick="saveKnowledge()">
💾 Save
</button>

<button onclick="location.reload()">
⬅ Back
</button>

</main>

`;

}

function saveKnowledge(){

alert("Saved! (Next version)");

}

function openReview(){

alert("Review (Coming Soon)");

}

function openKnowledge(){

alert("Knowledge Base (Coming Soon)");

}

function openRewards(){

alert("Rewards (Coming Soon)");

}
