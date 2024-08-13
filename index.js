const signUpBtn = document.querySelector('.signUpBtn');
const signInBtn = document.querySelector('.signInBtn');
const namefield = document.querySelector('.namefield');
const signUpTitle = document.querySelector('.signUpTitle');
const underline = document.querySelector('.underline');
const text = document.querySelector('.text');

 
signInBtn.addEventListener('click',function(){
    namefield.style.maxHeight = '0';
    signUpTitle.innerHTML = 'Sign In';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';
    text.innerHTML = "Lost Password?";

});

signUpBtn.addEventListener('click',function(){
    namefield.style.maxHeight = '60px';
    signUpTitle.innerHTML = 'Sign Up';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform = 'translateX(0)';
    text.innerHTML = "Password Suggestions";

});