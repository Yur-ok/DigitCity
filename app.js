let profile = document.getElementById('secret');
const name = 'Admin';
const pass = '12345';

//Load EventListeners
function loadEventListeners(){
    profile.addEventListener('click', checkLog);

}


function logIn() {
    let logged = false;
    if (localStorage.getItem('name') === name && localStorage.getItem('pass') === pass) {
        document.location.href = 'index.html#about';
        logged = true;
    } else {
        alert('Input correct data Name & Password!');
    }
}


//Add checkLog
function checkLog() {
    alert('Works');
}



// Обработка по клику
$('a.popup').click(function(e) {
    e.preventDefault();
    // Переменная для хранения атрибута rel нажатой ссылки
    var popupid = $(this).attr('rel');
    $('#' + popupid).fadeIn();
    // Добавим div fade вниз тэга body
    // и мы уже задавали ему стиль на шаге  2 : CSS
    $('body').append('<div id="fade"></div>');
    $('#fade').css({'filter' : 'alpha(opacity=30%)'}).fadeIn();
    // По центру
    var popuptopmargin = ($('#' + popupid).height() + 10) / 2;
    var popupleftmargin = ($('#' + popupid).width() + 10) / 2;
    // выравнивания модального окна по центру
    $('#' + popupid).css({
        'margin-top' : -popuptopmargin,
        'margin-left' : -popupleftmargin
    });
    document.forms.registration.reset();
});

// Переключение на основное окно
$('#fade').click(function() {
    $('#fade , #popuprel').fadeOut()
    return false;
});
