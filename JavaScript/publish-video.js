/**
 * Created by haker on 17-Sep-15.
 */



$(document).ready(function () {

    var formSubmit =  $("#dl-pv-form-publish").validate({
        rules: {

            onfocusout: false,
            onkeyup: false,
            'dl-pv-input-youtube': {
                required: true,
                url:true,
            },
            'dl-pv-input-title': {
                required: true,
                minlength: 6
            },

            'dl-pv-input-hero': {
                required: true,
            },
            'dl-pv-input-contributor': {
                required: true,
            },
            'dl-pv-input-mmr': {
                required: true,
            },
            'dl-pv-input-date': {
                required: true,
            },
            'dl-pv-input-parent': {
                required: true,
            },


        }


    });

    $('#dl-pv-button-publish').click(function () {

      if(!$("#dl-pv-form-publish").valid()) {
          return false;
      }

        var videoInformation = {
            youtubeID: $('#dl-pv-input-youtube').val(),
            title: $('#dl-pv-input-title').val(),
            hero: $('#dl-pv-input-hero').val(),
            contributor: $('#dl-pv-input-contributor').val(),
            mmr: $('#dl-pv-input-mmr').val(),
            date: $('#dl-pv-input-date').val(),
            parent: $('#dl-pv-input-parent').val()

        }


    });


});





