document.addEventListener('DOMContentLoaded', function() {
    const spinner = document.querySelector('.spinner');
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const resetBtn = document.getElementById('resetBtn');

    let animation;

    startBtn.addEventListener('click', function() {
        spinner.style.animation = 'spin 2s linear infinite';
    });

    stopBtn.addEventListener('click', function() {
        spinner.style.animation = 'none';
    });

    pauseBtn.addEventListener('click', function() {
        const animationStyle = window.getComputedStyle(spinner).getPropertyValue('animation-play-state');
        if (animationStyle === 'running') {
            spinner.style.animationPlayState = 'paused';
        } else {
            spinner.style.animationPlayState = 'running';
        }
    });

    resetBtn.addEventListener('click', function() {
        spinner.style.animation = 'none';
        set(() => {
            spinner.style.animation = 'spin 2s linear infinite';
        }, 50);
    });
});