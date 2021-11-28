function Ask() {
    var Number1= document.getElementById("number1").value;
    var Number2= document.getElementById("number2").value;
    var actual_answer= parseInt(number1) * parseInt(number2);

    var question_number= "<h4>"+ number1 + "X" + number2+ "</h4>";
    var input_box= '<br>Answer : <input type="number" id="input_check_box">';
    var check_button= '<br><br><button class="Btn btn-info" onclick="check()"> Check </button>'; 
    var row= question_answer + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value ="";
    document.getElementById("number2").value ="";
}
