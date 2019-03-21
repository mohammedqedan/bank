$(document).ready(function(){
  $("form#tworld_bank").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    var userResponses = [];
  $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      userResponses.push(workTransportationMode);
    });
    $("#fun-responses").show();
    $("input:checkbox[name=fun-transportation]:checked").each(function(){
      var funTransportationMode = $(this).val();
      $('#fun-responses').append(funTransportationMode + "<br>");
    });
    $('#world_bank').hide();
  });
});
