
function changeParagraph() {
  document.getElementById("demo").innerHTML = "Paragraph changed."; 
}
function changeParagraphFont() {
   document.getElementById("demo").style.fontSize = "35px";
}
function changeParagraphFontBack() {
   document.getElementById("demo").style.fontSize = "16px";
   document.getElementById("demo").style.color = "red";
}
function openWindow() {
   var myWindow = window.open("", "MsgWindow", "width=200,height=100");
   myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
 }

 function openAlert(){
   window.alert("ALERT");
 }

 function test(){
   return "Yaman"
 }