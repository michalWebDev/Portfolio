const thumbnails = document.querySelectorAll('.thumbnail');
const modal = document.getElementById('modal');
const modalImg = modal.querySelector('img');
const turnOff = document.querySelector('.off');
thumbnails.forEach(thumb => {
	thumb.addEventListener('click', () => {
		document.body.style.overflow = 'hidden';
		const fullSrc = thumb.getAttribute('data-full');
		modalImg.src = fullSrc;
		modal.classList.remove('show');
		
	});
});
turnOff.addEventListener('click', function() {
	document.body.style.overflow = 'auto';
	modal.classList.add('show');
	
	
});
const form = document.getElementById('myform');

form.addEventListener('submit', function() {
  setTimeout(() => {
  form.reset();
}, 200);  
});

const regulaminWindow = document.querySelector('.regulamin-window');
const regulaminOff = document.querySelector('.reg-off');
const modeOn = document.querySelector('.regulamin');

modeOn.addEventListener('click', function() {
	regulaminWindow.style.visibility = "visible";
	
	regulaminOff.addEventListener('click', function() {
		regulaminWindow.style.visibility = "hidden";
	})
});

const elements = document.querySelectorAll('.avatar, .laptop, .html, .css, .js');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;

            const animationType = element.dataset.animation;

            if (animationType === 'jump') {
                setTimeout(() => {
                    element.classList.add('active-avatar');
                }, 700);
            } else if (animationType === 'rotate') {
                setTimeout(() => {
                    element.classList.add('active-laptop');
                }, 700);
            } else if (animationType === 'down-left') {
                setTimeout(() => {
                    element.classList.add('active-html');
                }, 800);
            } else if (animationType === 'down') {
                setTimeout(() => {
                    element.classList.add('active-css');
                }, 1600);
            } else if (animationType === 'down-right') {
                setTimeout(() => {
                    element.classList.add('active-js');
                }, 2400);
            }

            observer.unobserve(element);
        }
    });
}, { threshold: 0.1 });

elements.forEach(element => {
    observer.observe(element);
});



	