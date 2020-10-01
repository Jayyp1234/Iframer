
function heychild(){
	var iframe = document.getElementById("iframephone");
	var elmnt = iframe.contentWindow.document.getElementsByTagName("main");
	elmnt.style.display = "none";
}

(function(){
	function Question(question , options , correctAnswer){
        this.question = question;
        this.options = options;
        this.correctAnswer = correctAnswer;
}
Question.prototype.display = 
function(){
    console.log(this.question);
    for(var i=0 ; i<this.options.length ; i++){
        console.log(i+": "+this.options[i]);
    }
}
Question.prototype.checkAnswer = 
function(ans){
    if(ans === this.correctAnswer){
    	console.log("You are Correct");

    }
    else{
    	console.log("You are Wrong?");
    }

}
    var q1 = new Question("What's the name of the User Pc" , ["Okeke Johnpaul" , "Oyegbimile Marvellous" , "Offisong Emmanuel"] , 0 );
    var q2 = new Question("Who amongst these is uses an Iphone" , ["Okeke Johnpaul" , "Oyegbimile Marvellous" , "Offisong Emmanuel"] , 2 );
    var q3 = new Question("Which of the common girls is the cutest" , ["Marvella Fredrick" , "Offiong Abigial" , "Olaoluwa Pipo"] , 0 );
    var q4 = new Question("Which of these is not part of the language we are studying" , ["Front-end" , "Artificial Intelligence" , "Back-end" , "Data-Science"] , 1 );
    var questions = [q1 , q2 , q3 , q4];
    function nextQuestion(){
    var n = Math.floor(Math.random() * questions.length);
    questions[n].display();
    var answer = window.prompt("Hello world");
    
    var totalScore = 0;
    if(answer !== "exit"){
    	questions[n].checkAnswer(parseInt(answer));
    	nextQuestion();
    }
}
    nextQuestion();

}());