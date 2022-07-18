function addUser() {
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;
  
      localStorage.setItem("player1_name", player1_name);
      localStorage.setItem("player2_name", player2_name);
  
      window.location = "quizpage.html";
  }
  player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player2_score = 0;
player1_score = 0; 

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;


document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ; 

function send() {
  Number1=document.getElementById("Number1").value;
  Number2=document.getElementById("Number2").value;
  actual_answer=parseInt(Number1)*parseInt(Number2);
  
question_number="<h4>"+Number1+"x"+Number2+"</h4";

input_box="<br>Answer : <input type='text' id='input_check_boe'>";
check_button ="<br><br><button class='btn btn-info' oncclick='check()'>Check</button>";
row = question_number + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("Number1").value="";
document.getElementById("Number2").value="";
}
function check()
{
get_answer = document.getElementById("input_check_box").value;
if(get_answer==actual_answer)  
{
    if(answer_turn == "player1")
    {
        update_player1_score = player1_score+1;
        document.getElementById("player1_score").innerHTML = player1_score;
    }
    else 
    {
        update_player2_score = player2_score+1;
        document.getElementById("player2_score").innerHTML = player2_score;
    }
}
if(question_turn == "player1")
{
    question_turn = "player2"
    document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
}
else 
{
    question_turn = "player1"
    document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
}

if(answer_turn == "player1")
{
    answer_turn = "player2"
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
}
else 
{
    answer_turn = "player1"
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
}
document.getElementById("output").innerHTML="";

}    
