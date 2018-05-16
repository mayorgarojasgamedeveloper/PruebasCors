$('document').ready(function() {
  console.log('Ready');

  $('#get').on('click', function() {
    console.log('Test Get');

    $.get('https://donleonapi.herokuapp.com/user', function(data) {
      console.log(data);
    });

  });

  $('#post').on('click', function() {
    console.log('Test Post');

    var usuario = {
      username: 'fernando',
      password: '12345678',
      name: 'Fernando',
      last_name: 'Mayorga',
      email: 'fer@gmail.com',
      phone: '32435757'
    }


    $.post('https://donleonapi.herokuapp.com/user', usuario, function(result){
        console.log(result);
    });


  });

});
