window.__session = {user:'', pass:''};
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(e){
        e.preventDefault();
       let flag = true,
          body = {};
        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                flag = false;
                continue;
            }
            body[$(input[i]).attr('name')] = $(input[i]).val().trim();
        }
         if(!flag) return;
         body.pass = btoa(body.pass);
         showLoader();

        doLogin(body);
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
          let error= document.querySelector('.login100-form .message');
          //if(error.className.includes('error')) 
          error.classList.remove('error');
          if(error.className.includes('success'))error.classList.remove('success');
          if(!error.className.includes('hidden')) error.classList.add('hidden');
        });
    });

    function validate (input) {
        if($(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    /*==================================================================
    [ Show pass ]*/
    var showPass = 0;
    $('.btn-show-pass').on('click', function(){
        if(showPass == 0) {
            $(this).next('input').attr('type','text');
            $(this).addClass('active');
            showPass = 1;
        }
        else {
            $(this).next('input').attr('type','password');
            $(this).removeClass('active');
            showPass = 0;
        }
        
    });


})(jQuery);


function doLogin(body)
{ 
    let url = 'https://storage.router-login-service.workers.dev/login',
     onFail = function(stat){
        hideLoader();
        let text;
        if(stat === 401){
            text = 'Wrong username or password';
        }else{
            text = 'Connection error, please try again';
        }
        let error = document.querySelector('.login100-form .message');
                error.classList.add('error');
                error.classList.remove('hidden');
                error.querySelector('p').innerHTML = text;
       },
      onSuccess = function(){
        window.__session.user = body.user;
        window.__session.pass = body.pass;
        
         hideLoader();
          let msg = document.querySelector('.login100-form .message'); 
                msg.classList.add('success');
                msg.classList.remove('hidden');
                msg.querySelector('p').innerHTML = 'login succeed!';
         //hide login page
         afterLogin();
       };
       fetchData('POST', url, JSON.stringify(body), onSuccess, onFail)
}

function afterLogin(){
    let login = document.querySelector('.container-login100');
    login.onanimationend = ()=>{
           login.parentElement.removeChild(login);
           document.querySelector('.table-wrapper').classList.remove('hidden');
           init();
    };
    login.classList.add('hide');
    loadChList();
}

function fetchData(method, url, body, onsuccess, onfail, dtype = 'html')
{
    $(function(){
        $.ajax({
       type: method,
       url: url,
       crossDomain: true,
       data:body,
       dataType: dtype,
       success: function (rs) {
        if(onsuccess) onsuccess(rs);
     },
     error: function (xhr, stat, e) {
       if(onfail)onfail(xhr.status);
       else{console.error('failed to fetch data with general error')}
     }
      
   });
 });
}

function showLoader()
{
     let btn = document.querySelector('.login100-form-btn');
     btn.innerText = '';
     btn.classList.add('loading');
     btn.innerHTML = '<img src="/images/spinner.svg" class="spinner">';
}

function hideLoader()
{
    let btn = document.querySelector('.login100-form-btn');
    btn.innerText = 'Login';
    btn.classList.remove('loading');
}