function flipCoin() {
    const coin = document.getElementById('coin');
    const coinImage = coin.querySelector('.coin-image');
    
    // Remove any existing animation
    coin.classList.remove('flipping');
    
    // Random flip duration between 1.5 and 3 seconds
    const flipDuration = Math.random() * 0.5 + 0.5;
    
    // Set the animation duration
    coin.style.animationDuration = flipDuration + 's';
    
    // Start flipping animation
    setTimeout(() => {
        coin.classList.add('flipping');
    }, 10);
    
    // Switch images during flip
    let isShowingFront = true;
    const flipInterval = setInterval(() => {
        if (isShowingFront) {
            coinImage.src = 'back-key.png';
        } else {
            coinImage.src = 'front-key.png';
        }
        isShowingFront = !isShowingFront;
    }, 150); // Switch every 150ms for visual effect
    
    // Stop switching and determine final result after animation
    setTimeout(() => {
        clearInterval(flipInterval);
        
        // Random final result (50/50 chance)
        const finalResult = Math.random() < 0.5;
        
        if (finalResult) {
            coinImage.src = 'front-key.png';
            console.log('Result: Front');
        } else {
            coinImage.src = 'back-key.png';
            console.log('Result: Back');
        }
        
        // Remove animation class
        coin.classList.remove('flipping');
    }, flipDuration * 1000);
}