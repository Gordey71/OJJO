window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.main__section-1-tabheader-item'),
          tabsContent = document.querySelectorAll('main__section-1-tabcontent'),
          tabsParent = document.querySelector('main__section-1-tabheader-items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader-item-active');
        });
    }
    
    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader-item-active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains(main__section-1-tabheader-item)) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
});        