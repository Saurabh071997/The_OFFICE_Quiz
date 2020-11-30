// https://repl.it/@saurabhkamboj/TheOfficeQuiz?embed=1&output=1

// https://repl.it/@saurabhkamboj/TheOfficeQuiz#index.js


var readlineSync = require('readline-sync')
const chalk = require('chalk')

var score = 0;
userAnswerList = [];

function welcomeMessage(userName){
    console.log('Hi '+userName+','+'\nWelcome to\n');
    
    console.log(chalk.greenBright.bold('The Office Quiz !! \n\n'));

    console.log(chalk.white('Lets see, how much you now about ')+chalk.yellow.bold('Dunder Mifflin !!')+'\n\n');
    console.log(chalk.white('Beat the high score and win a chance to be the next manager of')+ chalk.yellow(' \'Dunder Mifflin, Scranton\' '));

    console.log(chalk.cyan('====================================================================='));
    console.log(chalk.magentaBright('Guide'));
    console.log(chalk.magentaBright('> This is a quiz with each question having four options.'));
    console.log(chalk.magentaBright('> Choose any option by pressing any of the keys from 1, 2, 3 or 4'));
    console.log(chalk.magentaBright('> Each correct answer would reward you 2 points'));
    console.log(chalk.cyan('====================================================================='));
    console.log(chalk.cyan('====================================================================='));
}

function displayQuestion(questionObj){

  console.log('\n\n', chalk.yellow('->',questionObj.question),'\n');

  for(var j = 1;j<=4;j++){
    console.log('['+j+']'+' '+questionObj.optionlist[j-1])
  }
  var index = readlineSync.keyIn('\n\nChoose your Answer?\n',{limit: '$<1-4>'});

  var userAnswer = questionObj.optionlist[index-1];
  userAnswerList.push(userAnswer);
  if(userAnswer === questionObj.answer){
    console.log(chalk.bgGreen.black.bold('\nCorrect\n'));
    score = score+2;
  }
  else{
    console.log(chalk.bgRed.black.bold('\nWrong\n'));
  }
  console.log(chalk.cyan('====================================================================='));

}





function finalMessage(){
  console.log('\n');
  console.log('[1] View My Score');
  console.log('[2] View All High-Scores');
  console.log('[3] Quit');

  var option = readlineSync.keyIn('\n\nChoose your Option\n',{limit: '$<1-3>'});
  if(option == 1){
    console.clear();
    viewMyScore();
  }
  else if(option == 2){
    console.clear();
    viewHighScores();
  }
  else{
    console.clear();
    console.log('ThankYou for playing !!');
    process.exit(1);
  }
}


var userName = readlineSync.question('Hi !!\nPlease enter your name to proceed with the game \n');
console.clear();
welcomeMessage(userName);

if (readlineSync.keyInYN('Press \'y\' to play , \'n\' to quit game !!')) {
    // 'Y' key was pressed
  } else {
    console.clear();
    console.log('Game Over');
    process.exit(1);
  }

// proceeding with the game 
console.clear();
var questionBank = [{
  question : 'In the pilot episode, who started their first day at Dunder Mifflin Scranton ?',
  optionlist : ['Jim Halpert', 'Ryan Howard','Pam Beasly', 'Erin Hannon'],
  answer : 'Ryan Howard' 
},
{
  question : 'What is the name of the annual awards event that created and hosted by Michael?',
  optionlist : ['The Michael Scott Dunder Mifflin Awards','The Golden Mifflins','The Scotties', 'The Dundies'],
  answer : 'The Dundies'
},
{
  question : 'Who comes up with the name Big Tuna for Jim?',
  optionlist : ['Pam','Michael','Andy','Karen'],
  answer : 'Andy'
},
{
  question : 'Why does Angela end her relationship with Dwight in season four?',
  optionlist : ['He cheated on her','He crashed her car','He proposed when she wasn\'t ready', 'He killed her cat'],
  answer : 'He killed her cat'
        
},
{
  question : 'When Michael resigns from Dunder Mifflin to start his own paper company, what does he call it?',
  optionlist : ['Scott Papers Inc.','Mifflin Dunder','The Michael Scott Paper Company','Limitless Paper'],
  answer : 'The Michael Scott Paper Company'
},
{
  question : 'What was the name of the company started by Jan after leaving Dunder Mifflin',
  optionlist : ['Serenity by Jan','Aroma by Jan', 'Fragrance by Jan','Jan\'s Magic'],
  answer : 'Serenity by Jan'
},
{
  question : 'Where does Jim propose to Pam?',
  optionlist : ['Pam\'s reception desk','Niagara Falls','The conference room','A gas station'],
  answer : 'A gas station'
},
{
  question : 'How much did it cost Jim to create Dwight\'s outfit?',
  optionlist : ['$4','$7','$11','$9'],
  answer : '$11'
},
{
  question : 'In the pilot episode of "The Office", what item of Dwight\'s does Jim put in Jell-O?',
  optionlist : ['His mug','His keys','His scissors','His stapler'],
  answer : 'His stapler'
},
{
  question : 'What is the preferred Pizza place among The Office staff?',
  optionlist : ['Pizza by Alfredo','Alfredo\'s Pizza Cafe', 'Pizza Hut','The Hooters'],
  answer : 'Alfredo\'s Pizza Cafe'
},
{
  question : 'What is Pam\'s standard phone greeting?',
  optionlist : ['Dunder Mifflin, this is Pam','Dunder Mifflin, Pam speaking','This is Pam. Thanks for calling Dunder Mifflin','This is Dunder Mifflin'],
  answer : 'Dunder Mifflin, this is Pam'
},
{
  question : 'What was Dwight\'s post at Dunder Mifflin other than salesman ?',
  optionlist : ['Assistant To The Regional Manager','Assistant Regional Manager','Secretary To the Regional Manager','Associate To The Regional Manager'],
  answer : 'Assistant To The Regional Manager'
},
{
  question : 'What was the name of the film that Michael wrote the story for ?',
  optionlist : ['Threat Level Midnight','Somehow I Manage','Michael Scarn : The Undisputed','Threat Level Winter'],
  answer : 'Threat Level Midnight'
},
{
  question : 'What would Darryl say to ask a girl out ?',
  optionlist : ['I\'m hot. You\'re hot. Let\'s get it poppin\'','Using fluffy fingers','Bippity Boppity Give Me The Zoppity','He would text her - BTB'],
  answer : 'I\'m hot. You\'re hot. Let\'s get it poppin\''
},
{
  question : 'When Jim and Dwight have to plan a birthday party for Kelly, what does Dwight put on the banner he hangs up?',
  optionlist : ['You were born today','Happy birthday','It is your birthday','It\'s the day of your birth'],
  answer :'It is your birthday'
}
]



for(var i = 0;i<questionBank.length ;i++){
  displayQuestion(questionBank[i]);
}

console.clear();

function getPoints(correct_ans, user_ans){
  if(correct_ans === user_ans){
    return 2;
  }

  return 0;
}

var answerObj = [];
for(var i =0;i<userAnswerList.length;i++){
  var obj = {
    Correct_Answer : questionBank[i].answer,
    Your_Answer : userAnswerList[i] ,
    Points : getPoints(questionBank[i].answer, userAnswerList[i] )
  }

  answerObj.push(obj);
}

var highScores = [
  {
    Name :'Saurabh',
    Score : 30
  },
  {
    Name : 'Dwight K. Schrute',
    Score: 30
  },
  {
    Name : 'Jim Halpert',
    Score: 30
  },
  {
    Name : 'Pam Beasely',
    Score: 28
  },
  {
    Name: 'Darryl Philbin',
    Score: 26
  }
]




console.log(chalk.green.bold('Congratulations !! You have successfully completed the QUIZ !!\n\n')) ;
if(score === 30){
  console.log(chalk.yellow.bold('Are you a hero?\nI don\'t know...\nYou answered all the questions, which makes you a proud owner of 1 Millions Beets from Schrute Farm !!\n\n'));

}


function viewMyScore(){
  console.log('\n\n');
  console.log(chalk.red.bold('Your Scores - \n'));
  console.table(answerObj);
  console.log('\n\n');
  console.log(chalk.bgGreenBright.black.bold('Final Score : '+score)+'\n\n');

  console.log(chalk.bgCyanBright.black('Check the High-Scores and if your score beats one of the high scores, send screenshot of this page to Saurabh..\n\n'));

  console.log('[1] View All High-Scores');
  console.log('[2] Quit');

  var option = readlineSync.keyIn('\n\nChoose your Option : ',{limit: '$<1-2>'});
  if(option == 1){
    console.clear();
    viewHighScores();
  }
  else{
      console.clear();
      console.log(chalk.green('ThankYou for playing !!'));
      process.exit(1);
  }

}

function viewHighScores(){
  console.log(chalk.red.bold('\n\nHigh Scores\n\n'));
  console.table(highScores);
  console.log('\n\n');

  console.log('[1] View My Score');
  console.log('[2] Quit');

  var option = readlineSync.keyIn('\n\nChoose your Option : ',{limit: '$<1-2>'});
  if(option == 1){
      console.clear();
      viewMyScore();
    }
  else{
      console.clear();
      console.log(chalk.green('ThankYou for playing !!'));
      process.exit(1);
  }

}

finalMessage();




// funtion to Update High Scores:

// function updateHighScore(username, userscore){
//   var idx ;
//   for(var i=0;i<highScores.length;i++){
//     if(highScores[i].Score < userscore){
//       idx = i;
//       break;
//     }
//   }

//   obj ={
//     Name:username,
//     Score: userscore
//   }

//   highScores.splice(idx, 0, obj);
// }

// updateHighScore(userName, score);
// console.table(highScores);


