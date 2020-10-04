const navSlide = () =>{
    const burger = document.querySelector('.Burger');
    const nav=document.querySelector('.Nav-Links');
    const navLinks=document.querySelectorAll('.Nav-Links li')
    burger.addEventListener('click', ()=>{
        //toggle menu
        nav.classList.toggle('Nav-Active');
        //animation navlinks
        navLinks.forEach((link, index)=>{
            if (link.style.animation){
                link.style.animation='';
            }
            else{
            link.style.animation=`navLinksFade 0.5s ease forwards ${index/10+1}s`;
            }
        });
        //animation burger
        burger.classList.toggle('toggle');

    });  
    
}
navSlide();



