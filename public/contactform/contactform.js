function submitForm(){
  debugger
  var name=$("#name").val();
var email=$("#email").val();
var subject=$("#subject").val();
var message=$("#message").val();
var flag=validation();
if(flag){
  $.ajax({
          type: "POST",
          url: "/sendMessage",
          data: "name="+ name + "&email=" + email+ "&subject=" + subject+ "&message=" + message,
          success: function(msg) {
             alert(msg);
            debugger            
             if (msg == 'OK') {
              $("#sendmessage").addClass("show");
              $("#errormessage").removeClass("show");
              $('.contactForm').find("input, textarea").val("");
            } else {
              $("#sendmessage").removeClass("show");  
              $("#errormessage").addClass("show");
              $('#errormessage').html(msg);
            }
    
          },error: function(){
            alert("we are not able to send msg");
          }
        });
        
}
}
function checkInput($this){
  $this.nextElementSibling.setAttribute("style","display:none")
}
function validation(){
  var flag=true;
var name=$("#name").val();
var email=$("#email").val();
var subject=$("#subject").val();
var message=$("#message").val();
if(name===""||name==undefined||name==NaN){
  $("#name").next().show();
  return false;
}
if(email===""||email==undefined||email==NaN){
  $("#email").next().show();
  return false;
}else{
  if(!validatEmail()){
    return false;
  }
}
if(subject===""||subject==undefined||subject==NaN){
  $("#subject").next().show();
  return false;
}
if(message===""||message==undefined||message==NaN){
  $("#message").next().show();
  return false;
}
return true;
} 
function validatEmail(){
  debugger  
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!regex.test($("#email").val())){
    $("#wrongFormat").show();
    return false;
  }
  $("#wrongFormat").hide();
  return true;
}


// jQuery(document).ready(function($) {
//   "use strict";

//   //Contact
//   $('form.contactForm').submit(function() {
//     var f = $(this).find('.form-group'),
//       ferror = false,
//       emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

//     f.children('input').each(function() { // run all inputs

//       var i = $(this); // current input
//       var rule = i.attr('data-rule');

//       if (rule !== undefined) {
//         var ierror = false; // error flag for current input
//         var pos = rule.indexOf(':', 0);
//         if (pos >= 0) {
//           var exp = rule.substr(pos + 1, rule.length);
//           rule = rule.substr(0, pos);
//         } else {
//           rule = rule.substr(pos + 1, rule.length);
//         }

//         switch (rule) {
//           case 'required':
//             if (i.val() === '') {
//               ferror = ierror = true;
//             }
//             break;

//           case 'minlen':
//             if (i.val().length < parseInt(exp)) {
//               ferror = ierror = true;
//             }
//             break;

//           case 'email':
//             if (!emailExp.test(i.val())) {
//               ferror = ierror = true;
//             }
//             break;

//           case 'checked':
//             if (! i.is(':checked')) {
//               ferror = ierror = true;
//             }
//             break;

//           case 'regexp':
//             exp = new RegExp(exp);
//             if (!exp.test(i.val())) {
//               ferror = ierror = true;
//             }
//             break;
//         }
//         i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
//       }
//     });
//     f.children('textarea').each(function() { // run all inputs

//       var i = $(this); // current input
//       var rule = i.attr('data-rule');

//       if (rule !== undefined) {
//         var ierror = false; // error flag for current input
//         var pos = rule.indexOf(':', 0);
//         if (pos >= 0) {
//           var exp = rule.substr(pos + 1, rule.length);
//           rule = rule.substr(0, pos);
//         } else {
//           rule = rule.substr(pos + 1, rule.length);
//         }

//         switch (rule) {
//           case 'required':
//             if (i.val() === '') {
//               ferror = ierror = true;
//             }
//             break;

//           case 'minlen':
//             if (i.val().length < parseInt(exp)) {
//               ferror = ierror = true;
//             }
//             break;
//         }
//         i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
//       }
//     });
//     if (ferror) return false;
//     else var str = $(this).serialize();
//     var action = $(this).attr('action');
//     if( ! action ) {
//       action = 'contactform/contactform.php';
//     }
//     $.ajax({
//       type: "POST",
//       url: action,
//       data: str,
//       success: function(msg) {
//         // alert(msg);
//         if (msg == 'OK') {
//           $("#sendmessage").addClass("show");
//           $("#errormessage").removeClass("show");
//           $('.contactForm').find("input, textarea").val("");
//         } else {
//           $("#sendmessage").removeClass("show");
//           $("#errormessage").addClass("show");
//           $('#errormessage').html(msg);
//         }

//       }
//     });
//     return false;
//   });

// });
