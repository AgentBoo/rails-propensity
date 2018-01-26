// use vanilla js to make a sidebar menu
// https://www.w3schools.com/howto/howto_js_sidenav.asp

const openBtn = document.querySelector('#js-openBtn')
const sidenav = document.querySelector('#js-sidenav')
const inmain = document.querySelector('.inmain')


openBtn.addEventListener('click', function(_event){
  if(sidenav.style.width){
    inmain.style.marginLeft = '56px'
    openBtn.style.color = '#1A535C';
    sidenav.style.width = '';
  } else {
    inmain.style.marginLeft = '296px'
    openBtn.style.color = '#EF6972';
    sidenav.style.width = '240px'
  }
})


function switching(){
  const switchA = document.querySelector('.js-switch-a');
  const switchB = document.querySelector('.js-switch-b');
  const switchableA = document.querySelector('.js-switchable-a');
  const switchableB = document.querySelector('.js-switchable-b');


  if(switchA && switchB && switchableA && switchableB){
    switchA.addEventListener('click', function(_event){
      if(!switchableA.style.display){
        switchableA.style.display = "block";
        switchableB.style.display = "none"
      } else {
        switchableA.style.display = "block";
        switchableB.style.display = "none"
      }
    })

    switchB.addEventListener('click', function(_event){
      if(!switchableB.style.display){
        switchableA.style.display = "none";
        switchableB.style.display = "block"
      } else {
        switchableA.style.display = "none";
        switchableB.style.display = "block"
      }
    })
  } else {
    console.log('switching does not work')
  }
}

switching()
