$(document).ready(function () {

    $(function() {
        $( "#slider-range" ).slider({
            range: true,
            min: 2000,
            max: 8500,
            values: [ 2000, 8000 ],
            step:100,
            slide: function( event, ui ) {
                $( "#dl-sv-input-mmr" ).val(  ui.values[ 0 ] + " - " + ui.values[ 1 ] );
            }
        });
        $( "#dl-sv-input-mmr" ).val( $( "#slider-range" ).slider( "values", 0 ) +
            " - " + $( "#slider-range" ).slider( "values", 1 ) );
    });
});

