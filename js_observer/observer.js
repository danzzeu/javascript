const styleObserver = document.createElement('style');

styleObserver.textContent = `
    html { scroll-behavior: smooth; }

    .showObserver { animation: fadeInRight 0.8s forwards }

    @keyframes fadeInRight {
        from {
            opacity: 0;
            transform: translateX(150px);
        }
        to { 
            opacity: 1; 
            display: flex;
        }
    }
`;

document.head.appendChild(styleObserver);

let observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        let target = entry.target;
        if (entry.isIntersecting) {
            target.classList.add('showObserver');
        } else {
            target.classList.remove('showObserver');
        }
    });
}, { threshold: 0 });
  
let elements = document.querySelectorAll('.observer *');

elements.forEach(element => {
    observer.observe(element);
});