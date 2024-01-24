let counter = 10;
let timerId;

const countdown = () => {
  console.log(counter); 
  counter--;

  document.getElementById("cb").innerHTML = counter; 

  if (counter > 0) {
    timerId = setTimeout(countdown, 1000);
  } else {
    clearTimeout(timerId);
    document.getElementById("cb").innerHTML = "Happy Independance Day";
  }
};

timerId = setTimeout(countdown, 1000);

