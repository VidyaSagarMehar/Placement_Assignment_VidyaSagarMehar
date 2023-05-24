const express = require('express');

const PORT = 3000;

const app = express();

// app.get('/', (req, res) => {
// 	res.json({ ok: true });
// });
// app.get('/greet/:name', (req, res) => {
// 	res.json({ greeting: `Hello ${req.params.name}!` });
// });

// Endpoint to send 20 posts
app.get('/posts', (req, res) => {
	// Simulated array of posts
	const posts = [
		{ id: 1, title: 'Post 1', body: 'This is the first post' },
		{ id: 2, title: 'Post 2', body: 'This is the second post' },
		{ id: 3, title: 'Post 3', body: 'This is the second post' },
		{ id: 4, title: 'Post 4', body: 'This is the second post' },
		{ id: 5, title: 'Post 5', body: 'This is the second post' },
		{ id: 6, title: 'Post 6', body: 'This is the second post' },
		{ id: 7, title: 'Post 7', body: 'This is the second post' },
		{ id: 8, title: 'Post 8', body: 'This is the second post' },
		{ id: 9, title: 'Post 9', body: 'This is the second post' },
		{ id: 10, title: 'Post 10', body: 'This is the second post' },
		{ id: 11, title: 'Post 11', body: 'This is the second post' },
		{ id: 12, title: 'Post 12', body: 'This is the second post' },
		{ id: 13, title: 'Post 13', body: 'This is the second post' },
		{ id: 14, title: 'Post 14', body: 'This is the second post' },
		{ id: 15, title: 'Post 15', body: 'This is the second post' },
		{ id: 16, title: 'Post 16', body: 'This is the second post' },
		{ id: 17, title: 'Post 17', body: 'This is the second post' },
		{ id: 18, title: 'Post 18', body: 'This is the second post' },
		{ id: 19, title: 'Post 19', body: 'This is the second post' },
		{ id: 20, title: 'Post 20', body: 'This is the second post' },
		// Add more posts here...
	];

	// Send the posts as a JSON response
	res.json(posts);
});

app.listen(PORT, () => console.log(`server is runnig at posrt ${PORT}`));
