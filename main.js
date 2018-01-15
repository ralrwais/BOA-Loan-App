let uploadToBox = () => {
	var userFile = document.getElementById('userFile');
	var form = new FormData();

	form.append('file', userFile);
	form.append('parent_id', '1233456');

	$.ajax({
		url: 'https://upload.box.com/api/2.0/files/content',
		headers: {Authorization: 'Bearer XsDVMn19tkuIpV9x7bOj8jQDkgPhuaSr'},
		type: 'POST',
		dataType: 'json',
		data: form
	}).then((response) => {
		let fileName = response.entries[0].name;
		let fileID = response.entries[0].id;
	})
}



