

const uploadToBox = () => {
      let form = new FormData(),
       	  myFile = document.getElementById('userFile').files[0],
     	  fileName = document.getElementById('userFile').files[0].name;
      
      let blob = new Blob([myFile], {
        type: 'text'
      });

      form.append('file', blob, fileName);
      form.append('parent_id', '44894026208');


      var upload = 'https://upload.box.com/api/2.0/files/content';
      var headers = {
        Authorization: 'Bearer 9xntydvyAum1i8LyluH9AbDLYK1cl56E'
      };

      $.ajax({
        url: upload,
        headers: headers,
        type: 'POST',
        processData: false,
        contentType: false,
        data: form
      }).done((data) => {
        console.log('it posted');
      }).fail((data, text, errorThrown) => {
        console.log('issue is' + errorThrown);
      })
    }

    document.querySelector('#userFile').onchange = uploadToBox;

