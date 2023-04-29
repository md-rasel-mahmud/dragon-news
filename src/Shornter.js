const url = 'https://url-shortener-service.p.rapidapi.com/shorten';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
	},
	body: new URLSearchParams({
		url: 'https://google.com/'
	})
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}