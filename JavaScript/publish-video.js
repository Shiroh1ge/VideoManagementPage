/**
 * Created by haker on 17-Sep-15.
 */



$(document).ready(function () {

    var formSubmit =  $("#dl-mg-form-publish").validate({
        rules: {
            'dl-mg-input-youtube': {
                required: true,
                url:true,
            },
            'dl-mg-input-title': {
                required: true,
                minlength: 6
            },

            'dl-mg-input-hero': {
                required: true,
            },
            'dl-mg-input-contributor': {
                required: true,
            },
            'dl-mg-input-mmr': {
                required: true,
            },
            'dl-mg-input-date': {
                required: true,
            },
            'dl-mg-input-parent': {
                required: true,
            },


        }


    });

    $('#dl-mg-button-publish').click(function () {

      if(!$("#dl-mg-form-publish").valid()) {
          return false;
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
        console.log(videoInformation);

    });


});





