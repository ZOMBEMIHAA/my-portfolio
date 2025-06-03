// Инициализация EmailJS с вашим Public Key
(function () {
  emailjs.init("uDE8FKEXnRrr_0rcl");
})();

// Обработка отправки формы
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращаем стандартную отправку формы

    // Отправка формы через EmailJS
    emailjs.sendForm("service_7ij3ehl", "template_gztc3tl", this).then(
      function () {
        Swal.fire({
          icon: "success",
          title: "Сообщение отправлено!",
          text: "Я свяжусь с вами в ближайшее время.",
        });
        document.getElementById("contact-form").reset();
      },
      function (error) {
        Swal.fire({
          icon: "error",
          title: "Ошибка!",
          text: "Сообщение не отправилось. Попробуйте позже.",
        });
      }
    );
  });
