$(document).ready(function(){
  $("#formOne").submit(function(){
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    const inputs = [person1Input, person2Input, animalInput, exclamationInput, verbInput, nounInput];
    const spanArray = [".person1", ".person2", ".animal", ".exclamation", ".verb", ".noun"];
    
    spanArray.forEach(function(spanElement) {
      $(spanElement).text(inputs[spanArray.indexOf(spanElement)]);
    });

    $("#story").show();

    event.preventDefault();
  });
});