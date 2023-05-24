function fetchData() {
	return new Promise((resolve, reject) => {
		// Simulating an asynchronous operation (e.g., API call or data fetching)
		setTimeout(() => {
			const data = { name: 'John', age: 25 };
			if (data) {
				resolve(data); // Resolving the promise with the data
			} else {
				reject('Error: Data not found'); // Rejecting the promise with an error message
			}
		}, 2000); // Simulating a delay of 2 seconds
	});
}

// Using the created promise
fetchData()
	.then((data) => {
		console.log('Fulfilled:', data);
	})
	.catch((error) => {
		console.log('Rejected:', error);
	});
