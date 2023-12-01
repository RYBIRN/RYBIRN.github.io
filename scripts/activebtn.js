function switchAboutSection(option){

    var bio = document.getElementById("bio__content");
    var skills = document.getElementById("skills__content");
    var contact = document.getElementById("contact__content");
    var r = document.querySelector(':root');
    var rStyle;
    var Btn;

    var allBtns = document.getElementsByClassName('is-active');
    for(i = 0; i < allBtns.length; i++){
        allBtns[i].classList.remove('is-active');
    }

    if(option == 'bio'){
    document.getElementById("bio__btn").classList.add('is-active');
    rStyle = getComputedStyle(r).getPropertyValue('--color-1');
    bio.style.display = 'block';
    skills.style.display = 'none';
    contact.style.display = "none";
    }
    else if(option == 'skills'){
    document.getElementById("skills__btn").classList.add('is-active');
    rStyle = getComputedStyle(r).getPropertyValue('--color-2');
    bio.style.display = "none";
    skills.style.display = "block";
    contact.style.display = "none";
    }
    else if(option == 'contact'){
        document.getElementById("contact__btn").classList.add('is-active');
        rStyle = getComputedStyle(r).getPropertyValue('--color-3');
        bio.style.display = "none";
        skills.style.display = "none";
        contact.style.display = "block";
        }

    r.style.setProperty('--glow-color', rStyle);
};
