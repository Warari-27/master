$(function(){
    $('.formArea').on('submit',function (e) {
        e.preventDefault();

        $.ajax({
            type: 'post',
            url: 'ajax_txt.txt',
            dataType: 'text',
            data:{
                name: $('.js-get-val-name').val(),
                age: $('.js-get-val-age').val()
            }
        }).done(function(data,status) {
            console.log(data);
            console.log(status);
            $('.js-set-html').html(data);
        });
    });
});
