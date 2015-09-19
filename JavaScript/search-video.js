$(document).ready(function () {

    $(function() {
        $( "#slider-range-min" ).slider({
            range: "min",
            value: 55,
            min: 1,
            max: 700,
            slide: function( event, ui ) {
                $( "#dl-sv-input-mmr" ).val( "$" + ui.value );
            }
        });
        $( "#dl-sv-input-mmr" ).val( "$" + $( "#slider-range-min" ).slider( "value" ) );
    });
});
