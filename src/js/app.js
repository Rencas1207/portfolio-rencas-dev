document.addEventListener("DOMContentLoaded", e => {
   maquinaDeEscribir();
   scrollTopButton(".scroll-top-btn");
   // showScroll();
});


const sr = ScrollReveal();

sr.reveal('.show', {
   delay: 500,
   easing: 'ease-out',
   // reset: true
})

sr.reveal('.animate-left', {
   origin: 'left',
   distance: '300px',
   easing: 'ease-out',
   delay: 200,
   // reset: true
});

sr.reveal('.animate-right', {
   origin: 'right',
   distance: '300px',
   easing: 'ease-out',
   delay: 200,
   // reset: true
});

sr.reveal('.animate-top', {
   origin: 'bottom',
   distance: '80px',
   delay: 500,
   // reset: true
});

const $hamburger = document.querySelector('.hamburger'),
   $navegacion = document.querySelector('.navegacion-principal');

$hamburger.addEventListener('click', e => {
   $hamburger.classList.toggle('is-active');
   $navegacion.classList.toggle('is-active');
});


document.addEventListener('click', e => {
   if (!e.target.matches('.navegacion-principal a')) return false;
   $hamburger.classList.remove('is-active');
   $navegacion.classList.remove('is-active');
})

window.addEventListener('scroll', function () {
   const header = document.querySelector('header');
   header.classList.toggle('sticky', window.scrollY > 0);
})

// function showScroll() {
//    const $animateTop = document.querySelectorAll('.animate-top'),
//       $animateLeft = document.querySelectorAll('.animate-left'),
//       $animateRight = document.querySelectorAll('.animate-right');

//    let scrollTop = document.documentElement.scrollTop,
//       heightAnimate;

//    for (let i = 0; i < $animateTop.length; i++) {
//       heightAnimate = $animateTop[i].offsetTop;
//       if (heightAnimate - 580 < scrollTop) {
//          $animateTop[i].style.opacity = 1;
//          $animateTop[i].classList.add('showTop');
//       }
//    }

//    for (let i = 0; i < $animateLeft.length; i++) {
//       heightAnimate = $animateLeft[i].offsetTop;
//       if (heightAnimate - 500 < scrollTop) {
//          $animateLeft[i].style.opacity = 1;
//          $animateLeft[i].classList.add('showLeft');
//       }
//    }

//    for (let i = 0; i < $animateRight.length; i++) {
//       heightAnimate = $animateRight[i].offsetTop;
//       if (heightAnimate - 500 < scrollTop) {
//          $animateRight[i].style.opacity = 1;
//          $animateRight[i].classList.add('showRight');
//       }
//    }
// }

// window.addEventListener('scroll', showScroll);

function maquinaDeEscribir() {
   const $text1 = document.querySelector('.text-title-1'),
      $text2 = document.querySelector('.text-title-2'),
      $text3 = document.querySelector('.text-title-3');

   let writing = (string1, string2, string3) => {

      $text1.innerHTML = "";
      $text2.innerHTML = "";
      $text3.innerHTML = "";

      // TEXT-TITLE-1
      let arrFromString1 = string1.split(''),
         arrFromString2 = string2.split(''),
         arrFromString3 = string3.split('');

      // console.log(arrFromString1);

      let i = 0;

      let time = setTimeout(() => {
         let printString1 = setInterval(() => {
            $text1.innerHTML += arrFromString1[i];
            i++;

            if (i === arrFromString1.length) {
               clearInterval(printString1);

               // TEXT-TITLE-2
               i = 0;
               let printString2 = setInterval(() => {
                  $text2.innerHTML += arrFromString2[i];
                  i++;

                  if (i === arrFromString2.length) {
                     clearInterval(printString2);

                     // TEXT-TITLE-3
                     i = 0;
                     let printString3 = setInterval(() => {
                        $text3.innerHTML += arrFromString3[i];
                        i++;
                        if (i === arrFromString3.length) clearInterval(printString3);
                     }, 80);
                  }
               }, 80);
            }
         }, 80);
      }, 800);
   };
   writing($text1.textContent, $text2.textContent, $text3.textContent);
}

/*---------ContactForm--------------*/
((d) => {
   const $form = d.querySelector(".formulario"),
      $loader = d.querySelector(".contact-form-loader"),
      $response = d.querySelector(".contact-form-responsive");

   $form.addEventListener("submit", e => {
      e.preventDefault();
      $loader.classList.remove("none");
      fetch("https://formsubmit.co/ajax/rencasdag.12@gmail.com", {
            method: "POST",
            body: new FormData(e.target),
         })
         .then((res) => (res.ok ? res.json() : Promise.reject(res)))
         .then((json) => {
            console.log(json);
            $loader.classList.add("none");
            location.hash = "#gracias";
            $form.reset();
         })
         .catch((err) => {
            console.log(err);
            let message = err.statusText || "Ocurrió un error al enviar, intenta nuevamente"
            $response.querySelector("h3").innerHTML = `Error ${err.status}:${message}`;
            $loader.classList.add("none");
         }).finally(() => {
            $loader.classList.add("none");
            setTimeout(() => {
               location.hash = "#close";
            }, 5000);
         });
   });
})(document);

// SCROLL TOP BUTTON
function scrollTopButton(btn) {
   const $scrollBtn = document.querySelector(btn);

   window.addEventListener('scroll', e => {
      //Retorna el numero de pixeles que han sido desplazado en el documento mediante el scroll vertical 
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 600) {
         $scrollBtn.classList.remove("hidden");
      } else {
         $scrollBtn.classList.add("hidden");
      }
   })

   document.addEventListener('click', e => {
      if (e.target.matches(btn)) {

         window.scrollTo({
            behavior: "smooth",
            top: 0
         })
      }
   });
}