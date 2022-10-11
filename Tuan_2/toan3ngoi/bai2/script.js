let login = prompt("Enter:");
let message = (login == 'Employee') ?
    'Hello' : (login == 'employee') ?
        'Hello' :
    (login == 'Director') ?
        'Greetings' : (login == 'director') ?
            'Greetings' :
        (login == '') ?
            'No login' :
            '';
alert(message);