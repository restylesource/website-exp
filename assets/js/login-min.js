$(document).ready(function(){$("#login-link").dialogAjax({dialogClass:"what-is-restyle",width:"auto",buttons:{Register:{text:"Login","class":"button primary",click:function(){loadingIndicator.fadeIn(200);var e=$("#login-form").serialize();$.ajax({type:"POST",cache:!1,dataType:"json",url:"ajax/ajax-login-process.php",data:e,success:function(e){if(e.user_id>0)location.reload();else{$("#login-error").html(e.error);loadingIndicator.fadeOut(200)}}})}}}})});