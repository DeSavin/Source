const images = () => {
    const imgPopup = document.createElement('div'),
            workSection = document.querySelector('.works'),
            bigImg = document.createElement('img');

    imgPopup.classList.add('popup_img');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    document.body.style.marginRight = `0px`;
    imgPopup.style.display = 'none';
    
    
    

    imgPopup.appendChild(bigImg);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if(target && target.classList.contains('preview')){
            imgPopup.style.display = 'flex';
            document.body.style.marginRight = '17px';
            document.body.style.overflow = 'hidden';
            const path = target.parentNode.getAttribute('href');
            bigImg.style.cssText = `max-width: 100vw;
            max-height: 100vh;
            margin-bottom: 0px`
            /* bigImg.style.maxWidth = '100%';
            bigImg.style.maxHeight = '100%';
            bigImg.style.marginBottom = '0px' */
            bigImg.setAttribute('src', path);
        }

        if(target && target.matches('div.popup_img')){
            document.body.style.overflow = ''
            document.body.style.marginRight = `0px`;
            imgPopup.style.display = 'none';
            
        }
        
    });
    
};

export default images;