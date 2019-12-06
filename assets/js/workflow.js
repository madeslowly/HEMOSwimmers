// collect all the circles and bubbles so we can ani them in at 0%

var tlC1 = document.getElementById('TimeLineC1');
var tlC2 = document.getElementById('TimeLineC2');
var tlC3 = document.getElementById('TimeLineC3');
var tlC4 = document.getElementById('TimeLineC4');

var tlText = document.getElementById('TimeLineText');

var tlBcontainer = document.querySelector("#tlBubbles-container");

var tlcontainer = document.querySelector("#TimeLine");

var tlB1 = document.querySelector("#tlBubble1");
var tlB2 = document.querySelector("#tlBubble2");
var tlB4 = document.querySelector("#tlBubble4");

var tlB2Width = tlB2.getBoundingClientRect().width;
var tlB4Width = tlB4.getBoundingClientRect().width;

// push bubbles closer to timeline
var tlCenter = tlcontainer.getBoundingClientRect().width / 2;
var tlBwidth = tlBcontainer.getBoundingClientRect().width;
var TransBubble = tlBwidth + 40;

if (window.innerWidth > 768) {
  //tlBcontainer.style.marginLeft = 20 - tlCenter +"px";
  //tlBcontainer.style.marginTop = -  tlB1.getBoundingClientRect().height / 2 +"px";
  //tlBcontainer.style.position = "inherit";
  //tlB2.style.transform = "translateX(" + -TransBubble + "px)";
  //tlB4.style.transform = "translateX(" + -TransBubble + "px)";
}

window.addEventListener("scroll", function(e) {
  //entire height of svg
  var tl = document.querySelector("#TimeLine");
  // buttom at base
  var tlBL = document.querySelector("#TimeLineBL");
  var tlBR = document.querySelector("#TimeLineBR");
  // Top position relative top of viewport
  var tlTop = tl.getBoundingClientRect().top;
  // Total height of object
  var tlHeight = tl.getBoundingClientRect();
  //entire height of time line

  var tlLine = document.querySelector("#TimeLineLine");

  var tlLength = tlLine.getBoundingClientRect().height;
  var tlBLlength = tlBL.getTotalLength();
  var tlBRlength = tlBR.getTotalLength();
  // setup dashing
  tlLine.style.strokeDasharray = tlLength ;
  tlLine.style.strokeDashoffset = tlLength;

  tlBL.style.strokeDasharray = tlBLlength + ' ' + tlBLlength ;
  tlBL.style.strokeDashoffset = tlBLlength;

  tlBR.style.strokeDasharray = tlBRlength + ' ' + tlBRlength ;
  tlBR.style.strokeDashoffset = tlBRlength;
  // collect all the circles and bubbles so we can ani them in at 0%

  var tlC1 = document.getElementById('TimeLineC1');
  var tlC2 = document.getElementById('TimeLineC2');
  var tlC3 = document.getElementById('TimeLineC3');
  var tlC4 = document.getElementById('TimeLineC4');

  // returns distance to top from top of viewport
  // getBoundingClientRect().y,x not availible on older devices
  var rel_tl_top = tlLine.getBoundingClientRect().top;
  var rel_tl_bottom = tlLine.getBoundingClientRect().bottom;
  var rel_tlBL_top = tlBL.getBoundingClientRect().top;
  var rel_tlBL_bottom = tlBL.getBoundingClientRect().bottom;
  var rel_tlBR_top = tlBR.getBoundingClientRect().top;
  var abs_tlC1_top = tlC1.getBoundingClientRect().top;
  var abs_tlC2_top = tlC2.getBoundingClientRect().top;
  var abs_tlC3_top = tlC3.getBoundingClientRect().top;
  var abs_tlC4_top = tlC4.getBoundingClientRect().top;


  var view_height = .7*document.documentElement.clientHeight;

  var tlDrawLength = tlLength - view_height + rel_tl_top;
  var BLDrawLength = tlBLlength - view_height + rel_tlBL_top;
  var BRDrawLength = tlBRlength - view_height + rel_tlBR_top;

  // Draw the timeline in as we scroll
  if (rel_tlBL_top <= view_height - tlBLlength ) {
    tlBL.style.strokeDasharray = 0 ;
    tlBR.style.strokeDasharray = 0 ;
    } else {
      if (rel_tlBL_top >= view_height) {
        tlBL.style.stroke = "none";
        tlBR.style.stroke = "none";

      } else {
        tlBL.style.stroke = "#5e79a2";
        tlBL.style.strokeWidth = 1;
        tlBL.style.strokeDashoffset = -BLDrawLength;
        tlBR.style.stroke = "#5e79a2";
        tlBR.style.strokeWidth = 1;
        tlBR.style.strokeDashoffset = BRDrawLength;
      }
    }
  // we need to calclaute the draw speed per scroll px
  if (rel_tl_top >= view_height ) {
    tlLine.style.stroke = "none";
  } else {
    tlLine.style.stroke = "#5e79a2";
    tlLine.style.strokeWidth = 1;
    tlLine.style.strokeDashoffset = tlDrawLength;
    if (rel_tl_bottom <= view_height )  {
      tlLine.style.stroke = "#5e79a2";
      tlLine.style.strokeWidth = 1 ;
      tlLine.style.strokeDasharray = 0;
    }

  }
  //console.log('tl',rel_tl_bottom,'vh',view_height, ' width',window.innerWidth)
  //To popup windows alonside circles we need the % of the cirle pos relative to line
  // Step 1
  if (abs_tlC1_top >= view_height) {
    tlC1.classList.add('ac-ani-out');
    tlC1.classList.remove('ac-ani-fade-in');
    document.getElementById("tlBubble1").classList.add('ac-ani-out');
    document.getElementById("tlBubble1").classList.remove('ac-ani-fade-in');
  } else {
    document.getElementById("TimeLineC1").classList.add('ac-ani-fade-in');
    document.getElementById("TimeLineC1").classList.remove('ac-ani-out');
    document.getElementById("tlBubble1").classList.add('ac-ani-fade-in');
    document.getElementById("tlBubble1").classList.remove('ac-ani-out');
  }
  // Step 2
  if (abs_tlC2_top >= view_height) {
    document.getElementById("TimeLineC2").classList.add('ac-ani-out');
    document.getElementById("TimeLineC2").classList.remove('ac-ani-fade-in');
    document.getElementById("tlBubble2").classList.add('ac-ani-out');
    document.getElementById("tlBubble2").classList.remove('ac-ani-fade-in');
  } else {
    document.getElementById("TimeLineC2").classList.add('ac-ani-fade-in');
    document.getElementById("TimeLineC2").classList.remove('ac-ani-out');
    document.getElementById("tlBubble2").classList.add('ac-ani-fade-in');
    document.getElementById("tlBubble2").classList.remove('ac-ani-out');
  }
  // Step 3
  if (abs_tlC3_top >= view_height) {
    document.getElementById("TimeLineC3").classList.add('ac-ani-out');
    document.getElementById("TimeLineC3").classList.remove('ac-ani-fade-in');
    document.getElementById("tlBubble3").classList.add('ac-ani-out');
    document.getElementById("tlBubble3").classList.remove('ac-ani-fade-in');
  } else {
    document.getElementById("TimeLineC3").classList.add('ac-ani-fade-in');
    document.getElementById("TimeLineC3").classList.remove('ac-ani-out');
    document.getElementById("tlBubble3").classList.add('ac-ani-fade-in');
    document.getElementById("tlBubble3").classList.remove('ac-ani-out');
  }
  // Step 4
  if (abs_tlC4_top >= view_height) {
    document.getElementById("TimeLineC4").classList.add('ac-ani-out');
    document.getElementById("TimeLineC4").classList.remove('ac-ani-fade-in');
    document.getElementById("tlBubble4").classList.add('ac-ani-out');
    document.getElementById("tlBubble4").classList.remove('ac-ani-fade-in');
  } else {
    document.getElementById("TimeLineC4").classList.add('ac-ani-fade-in');
    document.getElementById("TimeLineC4").classList.remove('ac-ani-out');
    document.getElementById("tlBubble4").classList.add('ac-ani-fade-in');
    document.getElementById("tlBubble4").classList.remove('ac-ani-out');
  }
  // Step 5
  if (rel_tlBL_top >= view_height) {
    document.getElementById("TimeLineText").classList.add('ac-ani-out');
    document.getElementById("TimeLineText").classList.remove('ac-ani-fade-in');

  } else {
    document.getElementById("TimeLineText").classList.add('ac-ani-fade-in');
    document.getElementById("TimeLineText").classList.remove('ac-ani-out');

  }
});
