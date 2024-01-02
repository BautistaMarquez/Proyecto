/*variables de las secciones*/
const section1 = document.querySelectorAll('.seccion1');
const section3 = document.querySelectorAll('.seccion3');
const section6 = document.querySelectorAll('.seccion6');
/*observador de las secciones*/

const observador1 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        entry.target.classList.toggle('aparecer1', entry.isIntersecting);
    });
},
    {threshold: [0.2,0.8]}
);

section1.forEach((seccion)=> observador1.observe(seccion));


const observador3 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        entry.target.classList.toggle('aparecer3', entry.isIntersecting);
    });
},
{threshold: [0.2,0.8]}
);

section3.forEach((seccion)=> observador3.observe(seccion));

const observador6 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        entry.target.classList.toggle('aparecer6', entry.isIntersecting);
    });
},
{threshold: [0.2,0.8]}
);

section6.forEach((seccion)=> observador6.observe(seccion));

