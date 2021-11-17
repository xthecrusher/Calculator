var currentNumber = 1;
var num1;
var num2;
var click = 1;

function findAnswer() {
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  switch(op){
    case "+":
      answer = num1 + num2;
      console.log("adding to find answer",  answer, op,  num1, num2);
      break;
    case "-":
      answer = num1 - num2;
      console.log("subtracting to find answer",  answer, op, num1, num2);
      break;
    case "*":
      answer = num1 * num2;
      console.log("multiplying to find answer",  answer, op, num1, num2);
      break;
    case "/":
      answer = num1 / num2;
      console.log("divding to find answer",  answer, op, num1, num2);
      break;
  }

  num1 = answer;
  num2 = null;
  currentNumber = 1;
}

function more($screen){
  if (click > 8){
    click =  click - 5;
  }
  if (currentNumber == 2) {
    $screen.empty();
    findAnswer();
    $screen.append(num1);
  }
  currentNumber = 2;
}

$(function(){
  var $screen = $("#screen");
  var $number = $(".number");

  $number.on('click', function() {
    if (click > 8){
      return;
    }
    click++;
    var numberPressed = $(this).html();
    $screen.append(numberPressed);
    $("#clear").css('background-color', '#cc1423');

    if (currentNumber == 1) {
      if (num1 == null) {
        num1 = +numberPressed;
      } else {
        num1 = num1 + numberPressed;
        console.log("selecting first number", num1);
      }
    }
    if (currentNumber == 2) {
      if (num2 == null) {
        num2 = +numberPressed;
      } else {
        num2 = num2 + numberPressed;
        console.log("selecting second number", num2);
      }
      $("#equal").css('background-color', '#cc1423');
    }
  });

  $("#multiply").on('click',function(){
    if(num1 != null) {
    more($screen);
    $screen.append(" x ");
    op = "x";
    console.log("using multiply operator", op);
    };
    return;
  });

  $("#divide").on('click',function(){
    if(num1 != null) {
    more($screen);
    $screen.append(" / ");
    op = "/";
    console.log("using divide operator", op);
    };
    return;
  });

  $("#minus").on('click',function(){
    if(num1 != null) {
    more($screen);
    $screen.append(" - ");
    op = "-";
    console.log("using minus operator", op);
    };
    return;
  });

  $("#plus").on('click',function(){
    if(num1 != null) {
    more($screen);
    $screen.append(" + ");
    op = "+";
    console.log("using plus operator", op);
    };
    return;
  });

  $("#clear").on('click',function(){
    $screen.empty();
    num1 = null;
    num2 = null;
    currentNumber  = 1;
    click = 0;
    $("#clear").css('background-color', 'gray');
    $("#equal").css('background-color', 'gray');
    console.log("Cleared numbers", op, num1, num2, answer);
  });

  $("#equal").on('click',function()
    {
      var element = document.getElementById('equal');
      var stlye = window.getComputedStyle(element);
      var backgroundColor = "background-color";
      var buttonColor = element.style.backgroundColor;
      if(buttonColor == 'gray') {
        return;
    }

    $screen.append("=");
    findAnswer();
    if (click > 8){
      $screen.empty();
      var answerLength = answer.toString();
      click = answerLength.length;
      console.log(click);
    }
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    currentNumber++;

    console.log(num1, op, num2);

    $screen.append(answer);
    $("#equal").css('background-color', 'gray');
    console.log("found answer", answer, op, num1, num2);

  })
});
//when someone clicks on a number, it
//saves the number to do the math



/*
document.getElementById("num1").onclick = function write1()
  {
    $screen.append(1);
  }
    document.getElementById("num2").onclick = function write2()
        {
          $screen.append(2);
        }

        document.getElementById("num3").onclick = function write3()
          {
            $screen.append(3);
          }

          document.getElementById("num4").onclick = function write4()
            {
              $screen.append(4);
            }

            document.getElementById("num5").onclick = function write5()
              {
                $screen.append(5);
              }

              document.getElementById("num6").onclick = function write6()
                {
                  $screen.append(6);
                }

                document.getElementById("num7").onclick = function write7()
                  {
                    $screen.append(7);
                  }

                  document.getElementById("num8").onclick = function write8()
                    {
                      $screen.append(8);
                    }

                    document.getElementById("num9").onclick = function write9()
                      {
                        $screen.append(9);
                      }

                      document.getElementById("num0").onclick = function write0()
                        {
                          $screen.append(0);
                        }

*/
