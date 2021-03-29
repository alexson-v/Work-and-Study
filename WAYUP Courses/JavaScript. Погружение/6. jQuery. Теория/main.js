$(document).ready(function() {
    $('div').css({'color' : 'red'});
    $('.div').css({'font-size' : '40px'});
    $('#div').css({'color' : 'blue'}); // смена стилей через jQuery

    let dataAttr = $('#h2').data('number'); // узнать значение атрибута в data-number

    $('input[name="message"]').css({'border' : '5px solid black'}); // изменить объект без div и id

    $('ul li:nth-child(3)').css({'font-size' : '40px'});

    $('div:has("span")').css({'font-size' : '40px'});

    let attr = $('input').attr('type');
    console.log(attr);
})

$(document).ready(function() {
    $('#button').on('click', function() {
        $('.paragraph').toggle();
    })
})

$(document).ready(function() {
    $('#input3').on('input', function() {
        $('.result').html($(this).val());
    })
})

$(document).ready(function() {
    $('#form').on('submit', function() {
        alert('Мы отправили форму');
    })
})

$(document).ready(function() {
    $('#buttonet').on('click', function() {
        $('.animate').animate({'height' : '600px'}, 1000);
    })
})