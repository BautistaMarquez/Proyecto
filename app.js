/*variables de las secciones*/
const section1 = document.querySelectorAll('.seccion1');
const section2 = document.querySelectorAll('.seccion2');
const section3 = document.querySelectorAll('.seccion3');
const section4 = document.querySelectorAll('.seccion4');
const section5 = document.querySelectorAll('.seccion5');
const section6 = document.querySelectorAll('.seccion6');
/*observador de las secciones*/

const observador1 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        entry.target.classList.toggle('aparecer1', entry.isIntersecting);
    });
},
    {threshold: 0.5}
);

section1.forEach((seccion)=> observador1.observe(seccion));



const observador2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        entry.target.classList.toggle('aparecer2', entry.isIntersecting);
    });
},
    {threshold: 0.55}
);

section2.forEach((seccion)=> observador2.observe(seccion));



const observador3 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        entry.target.classList.toggle('aparecer3', entry.isIntersecting);
    });
},
    {threshold: 0.5}
);

section3.forEach((seccion)=> observador3.observe(seccion));



const observador4 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        entry.target.classList.toggle('aparecer4', entry.isIntersecting);
    });
},
    {threshold: 0.5}
);

section4.forEach((seccion)=> observador4.observe(seccion));



const observador5 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        entry.target.classList.toggle('aparecer5', entry.isIntersecting);
    });
},
    {threshold: 0}
);

section5.forEach((seccion)=> observador5.observe(seccion));



const observador6 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        entry.target.classList.toggle('aparecer6', entry.isIntersecting);
    });
},
    {threshold: 0.7}
);

section6.forEach((seccion)=> observador6.observe(seccion));


