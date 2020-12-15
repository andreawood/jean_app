$(document).ready(() => {
//FUNCTION FOR SECTION TOGGLE
  let style = document.querySelector('#style');
  let styleDiv = document.querySelector('#style-div');

  styleDiv.style.display = 'none';

  style.onclick = () => {
    if(styleDiv.style.display === 'none') {
      styleDiv.style.display = 'block';
    } else {
      styleDiv.style.display = 'none';
    }
  };

  let measure = document.querySelector('#measure');
  let measureDiv = document.querySelector('#measure-div');

  measureDiv.style.display = 'none';

  measure.onclick = () => {
    if(measureDiv.style.display === 'none') {
      measureDiv.style.display = 'block';
    } else {
      measureDiv.style.display = 'none';
    }
  };

  let styling = document.querySelector('#styling');
  let stylingDiv = document.querySelector('#styling-div');

  stylingDiv.style.display = 'none';

  styling.onclick = () => {
    if(stylingDiv.style.display === 'none') {
      stylingDiv.style.display = 'block';
    } else {
      stylingDiv.style.display = 'none';
    }
  };

  let history = document.querySelector('#history');
  let historyDiv = document.querySelector('#history-div');

  historyDiv.style.display = 'none';

  history.onclick = () => {
    if(historyDiv.style.display === 'none') {
      historyDiv.style.display = 'block';
    } else {
      historyDiv.style.display = 'none';
    }
  };
//END OF FUNCTION FOR SECTION TOGGLE

// FUNCTION FOR RISE CLICK
let riseInfo = document.querySelectorAll('.rise-info');
let riseButton = document.querySelectorAll('.rise');

riseInfo.forEach(function(el) {
  el.style.display = 'none';
});

riseButton.forEach(function(el) {
  el.onclick = () => {
    if (el.nextSibling.nextSibling.style.display === 'none') {
      el.nextSibling.nextSibling.style.display = 'block';
    } else {
      el.nextSibling.nextSibling.style.display = 'none';
    }
  };
});
// END OF FUNCTION FOR RISE CLICK

// FUNCTION FOR FIT CLICK
let fitInfo = document.querySelectorAll('.fit-info');
let fitIcon = document.querySelectorAll('.fit');

fitInfo.forEach(function(el) {
  el.style.display = 'none';
});

fitIcon.forEach(function(el) {
  el.onclick = () => {
    if (el.nextSibling.nextSibling.style.display === 'none') {
      el.nextSibling.nextSibling.style.display = 'block';
    } else {
      el.nextSibling.nextSibling.style.display = 'none';
    }
  };
});
// END OF FUNCTION FOR FIT CLICK

// FUNCTION FOR MEASUREMENT CLICK
let measurementInfo = document.querySelectorAll('.measurement-info');
let measurement = document.querySelectorAll('.measurement');

measurementInfo.forEach(function(el) {
  el.style.display = 'none';
});

measurement.forEach(function(el) {
  el.onmouseenter = () => {
    if (el.nextSibling.nextSibling.style.display === 'none') {
      el.nextSibling.nextSibling.style.display = 'block';
    } else {
      el.nextSibling.nextSibling.style.display = 'none';
    }
  };
  el.onmouseleave = () => {
    if (el.nextSibling.nextSibling.style.display === 'block') {
      el.nextSibling.nextSibling.style.display = 'none';
    } else {
      el.nextSibling.nextSibling.style.display = 'block';
    }
  };
});

// END OF FUNCTION FOR MEASUREMENT CLICK
// FUNCTION FOR INSPO QUIZ. CODE WAS ADAPTED FROM https://codeactually.com/examples.html
document.querySelector('#form1').onsubmit=function() {
  color = parseInt(document.querySelector('input[name = "color"]:checked').value);
  style = parseInt(document.querySelector('input[name = "style"]:checked').value);

  total= color + style;

  if(total === 25) {
document.getElementById("inspiration").innerHTML = "White Casual";
document.querySelector("#white_casual").style.display = 'block';
}

if(total === 20) {
document.getElementById("inspiration").innerHTML = "Black Casual";
document.querySelector("#black_casual").style.display = 'block';
}
if(total === 55) {
document.getElementById("inspiration").innerHTML = "Colorful Casual";
document.querySelector("#colorful_casual").style.display = 'block';
}
if(total === 18) {
document.getElementById("inspiration").innerHTML = "White Comfy";
document.querySelector("#white_comfy").style.display = 'block';
}
if(total === 13) {
document.getElementById("inspiration").innerHTML = "Black Comfy";
document.querySelector("#black_comfy").style.display = 'block';
}
if(total === 48) {
document.getElementById("inspiration").innerHTML = "Colorful Comfy";
document.querySelector("#colorful_comfy").style.display = 'block';
}
if(total === 22) {
document.getElementById("inspiration").innerHTML = "White Cool";
document.querySelector("#white_cool").style.display = 'block';
}
if(total === 17) {
document.getElementById("inspiration").innerHTML = "Black Cool";
document.querySelector("#black_cool").style.display = 'block';
}
if(total === 52) {
document.getElementById("inspiration").innerHTML = "Cool Color";
document.querySelector("#colorful_cool").style.display = 'block';
}

  return false; }

// END OF FUNCTION FOR INSPO QUIZ
// BUTTON FOR TIMELINE TOGGLE
let buttonTimeline = document.querySelector('#button-timeline');
let timeline = document.querySelector('.timeline');

timeline.style.display = 'none';

buttonTimeline.onclick = () => {
  if(timeline.style.display === 'none') {
    timeline.style.display = 'block';
  } else {
    timeline.style.display = 'none';
  }
};
//END OF TIMELINE BUTTON TOGGLE




});
