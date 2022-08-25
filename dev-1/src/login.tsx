import React from 'react'

let ipt=document.querySelectorAll('input');
let login:any=document.querySelector('.login');
login.addEventListener('click',function(){
    let admin=ipt[0].value;
    let pwd=ipt[1].value;
    console.log('登陆成功！');
})


export default login
