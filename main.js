let uploadToBox = () => {
	console.log('button clicked');
	var userFile = document.getElementById('userFile');
	var form = new FormData();
	form.append('file', userFile);
	form.append('parent_id', '0');

	$.ajax({
		url: 'https://upload.box.com/api/2.0/files/content',
		headers: {Authorization: 'Bearer HPrFm8V0mawpSycKQDc7FxVyW1grXbqH'},
		type: 'POST',
		processData: false,
		contentType: false,
		data: form
	}).complete((data) => {
		console.log(data.response);
	})
}



