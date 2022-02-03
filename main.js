let mega=document.querySelector('.to-mega');
let megaContainer=document.querySelector('.to-mega .container');
mega.addEventListener('click',function() {
  megaContainer.classList.toggle('mega-show')
})

//start scroll project..........................................................................................
// skill variable
let skill=document.querySelector(".skill");
let progress=document.querySelectorAll(".progress-level");
let progressMark=Array.from(document.querySelectorAll(".progress-mark"));
//scroll to top variable
let scrollTop=document.querySelector('.scroll');
// stats variable
let stats=document.querySelector('.stats');
let statsC=document.querySelectorAll('#statsC')
window.onscroll=function () {
    //skill
    if (window.scrollY >= skill.offsetTop -50) {
        progress.forEach((ele,index)=>{
            ele.style.width=ele.dataset.width
            progressMark[index].innerHTML=ele.dataset.width
        }) 

    }
    //scroll to top
    if (window.scrollY>=400) {
      scrollTop.style.display="block"
    }else{
      scrollTop.style.display="none"
    }
    // stats
    if (window.scrollY >= stats.offsetTop) {
      statsC.forEach((s)=>{
        let statsCount=setInterval(()=>{
          if (s.textContent< +s.dataset.stats) {
            s.textContent++
          }
        },1000/+s.dataset.stats)
      })
    }
}
scrollTop.onclick=function (){
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
};
//End scroll project......................................................................................................
//start Event timer
let countDate=new Date("Dec 30, 2022").getTime();
let counter=setInterval(function () {
    let date= new Date().getTime();
    let diff=countDate-date;
    let day=Math.floor(diff/(1000*60*60*24));
    let hour=Math.floor((diff%(1000*60*60*24))/(1000*60*60))
    let min=Math.floor((diff%(1000*60*60))/(1000*60))
    let sec=Math.floor((diff%(1000*60))/(1000))
    document.querySelector(".events .day").innerHTML=day;
    document.querySelector(".events .hour").innerHTML=hour;
    document.querySelector(".events .min").innerHTML=min;
    document.querySelector(".events .sec").innerHTML=sec;
},1000);
//end Event timer
