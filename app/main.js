const uploadToBox = () => {

    $('#modalLong').modal({ focus: true });
    let form = new FormData(),
        myFile = document.getElementById('userFile').files[0],
        fileName = document.getElementById('userFile').files[0].name;

    let blob = new Blob([myFile], { type: 'text' });

    form.append('file', blob, fileName);
    form.append('parent_id', '44894026208');


    var upload = 'https://upload.box.com/api/2.0/files/content';
    var headers = {
        Authorization: 'Bearer eKp5QH1Qy73UUIfCpUaNGG6BTyktNuFX'
    };

    $.ajax({
        url: upload,
        headers: headers,
        type: 'POST',
        processData: false,
        contentType: false,
        data: form
    }).fail((data, text, errorThrown) => {
        console.log('Your issue is ' + errorThrown);
    })
}

document.querySelector('#uploadBtn').onclick = uploadToBox;