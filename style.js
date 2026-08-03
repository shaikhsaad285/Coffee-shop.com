 let nav = document.getElementById('navbar');
        let bar = document.getElementById('bar');
        let close = document.getElementById('close');

        bar.addEventListener('click', () => {
            nav.classList.add('active');
            bar.style.display = 'none';
            close.style.display = 'block';
        });

        close.addEventListener('click', () => {
            nav.classList.remove('active');
            close.style.display = 'none';
            bar.style.display = 'block';
        });