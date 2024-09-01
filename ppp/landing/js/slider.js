(function(){
    const slider=[...document.querySelectorAll('.perfil_body')];
    const buttonNext=document.querySelector('#next')
    const buttonBefore=document.querySelector('#before')
    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });
 
    const changePosition = (add) => {
        const currentPerfil = document.querySelector('.perfil_body--show');
        value = Number(currentPerfil.dataset.id);
        
        currentPerfil.classList.remove('perfil_body--show');

        value += add;

        if (value > slider.length) {
            value = 1; 
        } else if (value < 1) {
            value = slider.length;
        }

        slider[value - 1].classList.add('perfil_body--show');
    }

    console.log(slider);
})();