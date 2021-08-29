document.addEventListener('DOMContentLoaded', () => {

    // Табы меню аккаунта
    const accountTabTriggers = document.querySelectorAll(".account-tab__trigger"),
          accountTabContents = document.querySelectorAll(".main-block__account-tab");

    for (let i = 0; i < accountTabTriggers.length; i++) {

        accountTabTriggers[i].addEventListener("click", function(e){
        
        const activeTabAttr = e.target.getAttribute("data-account-tab");

        for (let j = 0; j < accountTabTriggers.length; j++) {
            let contentAttr = accountTabContents[j].getAttribute("data-account-content");

            if (activeTabAttr === contentAttr) {
            accountTabTriggers[j].classList.add("active");
            accountTabContents[j].classList.add("active");
            } else {
            accountTabTriggers[j].classList.remove("active");
            accountTabContents[j].classList.remove("active");
            }
        }
        });
    }


    // Popup-окна составов товара
    const openDetails = document.querySelectorAll('.open_details');

    openDetails.forEach(function(item){
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            const detailsId = this.getAttribute('data-details'),
                  detailsElem = document.querySelector('.details-dropdown[data-details="' + detailsId + '"]'),
                  detailsArrow = document.querySelector('.details-row__icon[data-details="' + detailsId + '"]');

            detailsElem.classList.toggle('active');
            detailsArrow.classList.toggle('active');
        });
    });


    // Popup-окна отзывов
    const openTestimonials = document.querySelectorAll('.dropdown-button__wrapper');

    openTestimonials.forEach(function(item){
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            const testimonialsId = this.getAttribute('data-testimonials'),
                  testimonialsElem = document.querySelector('.testimonial_dropdown-text[data-testimonials="' + testimonialsId + '"]'),
                  testimonialsArrow = document.querySelector('.dropdown-button__icon[data-testimonials="' + testimonialsId + '"]');

            testimonialsElem.classList.toggle('active');
            testimonialsArrow.classList.toggle('active');
        });
    });

});


jQuery(document).ready(function() {

    // Маска на инпут сохранения номера телефона клиент
    $("#phoneMaskAccount").mask("+38 (999) 999-99-99");

});