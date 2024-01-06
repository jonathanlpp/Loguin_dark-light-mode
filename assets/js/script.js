const modeIcon = document.getElementById('mode_icon');
        const loguinForm = document.getElementById('loguin_form');

        modeIcon.addEventListener('click', () => {
            if (modeIcon.classList.contains('fa-moon')) {
                modeIcon.classList.remove('fa-moon');
                modeIcon.classList.add('fa-sun');
                loguinForm.classList.add('dark');
            } else {
                modeIcon.classList.remove('fa-sun');
                modeIcon.classList.add('fa-moon');
                loguinForm.classList.remove('dark');
            }
        });