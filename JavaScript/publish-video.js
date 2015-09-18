/**
 * Created by haker on 17-Sep-15.
 */
$(document).ready(function () {
    $('#dl-mg-button-publish').on('click', function () {

        if ($('#dl-mg-input-youtube').val().length < 1) {
            function inputError() {
                $('#dl-mg-input-error-youtube').show();
            }

            inputError();
        }
        else {
            $('#dl-mg-input-error-youtube').hide();
            $('#dl-mg-input-youtube').css('input', 'red');
        }


        var videoInformation = {
            youtubeID: $('#dl-mg-input-youtube').val(),
            title: $('#dl-mg-input-title').val(),
            hero: $('#dl-mg-input-hero').val(),
            contributor: $('#dl-mg-input-contributor').val(),
            mmr: $('#dl-mg-input-mmr').val(),
            date: $('#dl-mg-input-date').val(),
            parent: $('#dl-mg-input-parent').val()
        }


    });


});



