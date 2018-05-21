
      $(function() {
  updateEther();
  setInterval(updateEther, 30000);
});

function updateEther(){
  var coinAPI = "https://api.coinmarketcap.com/v1/ticker/ethereum/";
  $('p.update').html('Updating...');
  $.getJSON( coinAPI, {
    option: "none yet"
  })
    .done(function( data ) {
      $('#result').empty();
      $.each( data, function( i, results ) {
        $( "<dl>" ).html('').appendTo( "#result" );
        $.each(results, function (j, item){
          $( "<dt>" ).html( j ).appendTo( "#result dl" );
          $( "<dd>" ).html( item ).appendTo( "#result dl" );
        });
      });
      var d = new Date();
      var updated = 'Last update @ ' + d.toLocaleString();
      $('p.update').html(updated);
    });  
}
      
   