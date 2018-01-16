let uploadToBox = () => {
	console.log('button clicked');
	var userFile = document.getElementById('userFile');
	var form = new FormData();
	form.append('file', userFile);
	form.append('parent_id', '0');

	$.ajax({
		url: 'https://upload.box.com/api/2.0/files/content',
		headers: {Authorization: 'Bearer SF1NXbMWCbIBwTohm2k2aaJEYcTVQgrc'},
		type: 'POST',
		processData: false,
		contentType: false,
		dataType: 'json',
		data: form
	}).complete((data) => {
		console.log(data.response);
	})
}