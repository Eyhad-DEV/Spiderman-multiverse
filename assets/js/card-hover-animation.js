function handleMouseEnter(){
    this.classList.add('s-card--hovered');
    document.body.id = `${this.id}-hovered`;
}

function headleMouseLeave(){
    this.classList.remove('s-card--hovered');
    document.body.id = '';
}

function addEventListenerToCards(){
    const cardElements = document.getElementsByClassName('s-card');
    
    for (let i = 0; i < cardElements.length; i++) {
        const card = cardElements[i];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave' , headleMouseLeave,)
        
    }
}

document.addEventListener("DOMContentLoaded" , addEventListenerToCards, false)