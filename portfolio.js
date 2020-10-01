window.onload=function(){
    var week={'1':'Monday','2':'Tuesday','3':'Wednesday','4':'Thursday','5':'Friday','6':'Saturday','0':'Sunday'}
    
    

    box=document.querySelector('.date')
    function time(){
        var date=new Date();
        box.innerHTML='<h3>'+date.getDate()+'|'+date.getMonth()+'|'+date.getFullYear()+' '+week[date.getDay()]+' '+date.toLocaleTimeString()+'</h3>'
    }

    var s=setInterval(time,1000);


    const navSlide=() => {
        const burger =document.querySelector('.burger');
        const nav=document.querySelector('.links');
        const links= document.querySelectorAll('.links li');
        const body=document.querySelector('body')
        burger.addEventListener('click',() => {
            nav.classList.toggle('nav-active');
           
        })

        links.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation='';
            }
            else{
                link.style.animation=`opac 0.5s ease forwards ${index/7+0.5}s`;
            }
        })
    
    }
    navSlide();
}