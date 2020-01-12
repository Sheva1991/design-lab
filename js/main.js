
(function () {
    let toggler = document.getElementById('toggler');

    toggler.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.classList.toggle('menu-opened')
    })

    let links = document.querySelectorAll('.menu__link');

    links.forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('menu-opened')
        })
    })

    // let togller__svg = document.getElementById('toggler__svg');
    // let sc = this.onscroll = pageYOffset + 'px';
    // window.addEventListener('scroll', function () {
    //     if (sc > '20px') { toggler__svg.classList.add('toggler__svg'); }
    // });

    let sections = document.querySelectorAll('.bg');

    window.addEventListener('scroll', () => {

        document.body.classList.remove('menu-opened')
        let firstViewportSection = null;
        sections.forEach((section) => {
            let rect = section.getBoundingClientRect();

            if (!firstViewportSection) {
                if (rect.bottom > 60) {
                    firstViewportSection = section;
                }
            }
        })

        let svg = document.querySelector('.toggler svg');
        let nav = document.querySelector('nav');

        if (!(firstViewportSection.classList.contains('section--bg') || (firstViewportSection.classList.contains('gallery')))) {
            svg.style.fill = '#afbacf';

            if (window.innerHeight > 576) {

                links.forEach((link) => {
                    link.style.color = '#fff'
                })
                nav.style.backgroundColor = 'rgba(175,186,287, .6)'
            }
        } else {
            svg.style.fill = '#fff';

            if (window.innerHeight > 576) {

                links.forEach((link) => {
                    link.style.color = '#88839e'
                })
                nav.style.backgroundColor = 'rgba(255,255,255, .6)'
            }
        }
    })


})();