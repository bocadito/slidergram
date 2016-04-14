var clientid = '2f514aa37c7b4ac682a63751793263ff',
    username = 'rudrastyh', // rudrastyh - my username :)
    num_photos = 10;

    $.ajax({
        url: 'https://api.instagram.com/v1/users/' + username + '/media/recent',
        dataType: 'jsonp',
        type: 'GET',
        data: {client_id: clientid, count: num_photos},
        success: function(data){
          console.log(data);
          for( x in data.data ){
            $('ul').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>'); // data.data[x].images.low_resolution.url - URL of image, 306х306
            // data.data[x].images.thumbnail.url - URL of image 150х150
            // data.data[x].images.standard_resolution.url - URL of image 612х612
            // data.data[x].link - Instagram post URL
          }
        },
        error: function(data){
          console.log(data); // send the error notifications to console
        }
      });
