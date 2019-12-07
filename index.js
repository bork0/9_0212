// task #1;

$(`a[href ^= "https://" ]`).attr('target', '_blank');

// task #2;

$('.head').css('backgroundColor', 'green');

$('.head .inner').css('fontSize', '35px');

// task #3;

let $h3 = $('h3');

$('h3+div:eq(0)').after($h3[0]);

$('h3+div').after($h3[1]);

// task #4;

$(document).ready(function (){
    $('form').on('change', function() {
        if ($(':checked').length === 3) {
            $("[type = 'checkbox']:not(:checked)").attr('disabled', true);
        } else {
            $("[type = 'checkbox']").removeAttr('disabled');
        }
    });
    $('form').trigger('change');
});



