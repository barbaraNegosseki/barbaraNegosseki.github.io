
function showFields(){
  $("#field-sobre").click(function(){
    //mudando as cores
    $("#field-sobre").css('color', '#70ABAF')
    $("#field-visualizar").css('color', '#705D56')
    $("#field-referencias").css('color', '#705D56')

    $("#div-field-visualizar").hide();
    $("#div-field-referencias").hide();
    $("#div-field-sobre").show();
    $("#h2-voltar").hide();
  });

  $("#field-visualizar").click(function(){
    //mudando as cores
    $("#field-sobre").css('color', '#705D56')
    $("#field-visualizar").css('color', '#70ABAF')
    $("#field-referencias").css('color', '#705D56')

    $("#div-field-visualizar").show();
    $("#div-field-sobre").hide();
    $("#div-field-referencias").hide();
    $("#h2-voltar").show();
  });

  $("#field-referencias").click(function(){
    //mudando as cores
    $("#field-sobre").css('color', '#705D56')
    $("#field-visualizar").css('color', '#705D56')
    $("#field-referencias").css('color', '#70ABAF')

    $("#div-field-referencias").show();
    $("#div-field-sobre").hide();
    $("#div-field-visualizar").hide();
    $("#h2-voltar").hide();
  });
}
