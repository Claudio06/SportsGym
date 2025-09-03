const d = document;

const listServices = [
  {
    title: "Workouts",
    img: "./Imagenes/icono1.png",
  },
  {
    title: "Trainers",
    img: "./Imagenes/icono2.png",
  },
  {
    title: "Fitness",
    img: "./Imagenes/icono3.png",
  },
  {
    title: "Crossfit",
    img: "./Imagenes/icono4.png",
  },
];
const galeria = [
  {
    title: "Strength",
    img: "./Imagenes/galeria1.webp",
  },
  {
    title: "Dance",
    img: "./Imagenes/galeria2.webp",
  },
  {
    title: "Hot Yoga",
    img: "./Imagenes/galeria3.webp",
  },
  {
    title: "Cardio",
    img: "./Imagenes/galeria4.webp",
  },
  {
    title: "Group Fitness",
    img: "./Imagenes/galeria5.webp",
  },
  {
    title: "Cross Training",
    img: "./Imagenes/galeria6.webp",
  },
];

d.addEventListener("DOMContentLoaded", () => {
  services();
  galerias();
  pregunta();
  nav();
  animaciones();
  validarform();
});

const services = () => {
  const lista = d.getElementById("list_header");
  listServices.forEach((service) => {
    lista.innerHTML += `<figure class="card">
            <img src="${service.img}" alt="" class="icono_card">
            <figcaption class="title_card">${service.title}</figcaption>
            <a class="btn_card">More</a>
        </figure>`;
  });
};
const galerias = () => {
  const gallery = d.getElementById("gallery");
  galeria.forEach((item) => {
    gallery.innerHTML += `<figure class="galeria">
    <img src="${item.img}" alt="" class="img_galeria">
    <figcaption class="title_galeria">${item.title}</figcaption>
    <a class="btn_galeria">MORE</a>
  </figure>`;
  });
};

const preguntas = [
  {
    preg: "¿Cómo me registro en línea?",
    resp: "Para registrarte, haz clic en el botón 'Registrarse' en la parte superior derecha. Rellena tus datos personales, crea una contraseña y envía el formulario. Recibirás un correo de confirmación.",
  },
  {
    preg: "¿Cómo funcionan los pagos mensuales?",
    resp: "Los pagos mensuales se cargan automáticamente a tu método de pago seleccionado el mismo día de cada mes. Puedes gestionar tus datos de facturación en la configuración de tu cuenta.",
  },
  {
    preg: "¿Cómo puedo contactar con alguien para preguntas o asistencia?",
    resp: "Puedes contactar con nuestro equipo de soporte enviando un correo a <a href='mailto:support@example.com'>support@example.com</a> o llamando al (123) 456-7890. Estamos disponibles de lunes a viernes, de 9 AM a 5 PM.",
  },
  {
    preg: "¿Es seguro usar el club?",
    resp: "Sí, tu seguridad es nuestra prioridad. Las instalaciones están vigiladas las 24 horas del día y todo el personal está entrenado en primeros auxilios. Además, seguimos estrictos protocolos de higiene y mantenimiento del equipo.",
  },
  {
    preg: "¿Qué debo hacer si encuentro un problema?",
    resp: "Si encuentras un problema, sigue estos pasos:",
  },
];

const pregunta = () => {
  const cuestionario = d.getElementById("preguntas");
  preguntas.forEach((preg) => {
    cuestionario.innerHTML += `
       <details>
         <summary>${preg.preg}</summary>
         <p class="txt_preg">${preg.resp}</p>
       </details>
     `;
  });
};
const nav = () => {
  const movil = d.getElementById("movil"),
    close = d.getElementById("close"),
    lista = d.querySelector("nav ul"),
    linkAll = d.querySelectorAll("ul li");
  console.log(movil);
  movil.addEventListener("click", () => {
    lista.classList.toggle("activa");
  });
  linkAll.forEach((link) => {
    link.addEventListener("click", () => {
      lista.classList.remove("activa");
    });
  });
  close.addEventListener("click", () => {
    lista.classList.remove("activa");
  });
};

const animaciones = () => {
  ScrollReveal().reveal(".list_header", { delay: 250, reset: true });
  ScrollReveal().reveal(".menbresia", {
    delay: 250,
    reset: true,
    origin: "right",
  });
  ScrollReveal().reveal(".swiper", { delay: 275, reset: true, duration: 0.2 });
  ScrollReveal().reveal(".ggaleria", {
    opacity: 0.6,
    reset: true,
    duration: 2000,
  });
  ScrollReveal().reveal(".about_img", {
    delay: 250,
    origin: "left",
    distance: "50px",
    reset: true,
  });
};

const validarform = () => {
  const form = d.querySelector("form"),
    btn = d.querySelector(".btn_formulario"),
    msj = d.querySelector("textarea"),
    name = d.getElementById("nombre"),
    email = d.getElementById("email");
  btn.disabled = true;

  form.addEventListener("keyup", () => {
    console.log(name);
    const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,40}$/,
      emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
   
      name.value.match(nombreRegex)
      ? (name.style.border = "2px solid green")
      : (name.style.border = "2px solid red");

    email.style.border = emailRegex.test(email.value)
      ? "2px solid green"
      : "2px solid red";
    msj.value.length < 10 ?  msj.style.border = "2px solid red"  : msj.style.border = "2px solid green";

    if (
      name.value.trim() !== "" &&
      email.value.trim() !== "" &&
      msj.value.trim() !== ""
    ) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  });

  btn.addEventListener("submit", (e) => {
    // e.preventDefault();
    setTimeout(() => {
      alert('formulario enviado correctamente');

    },2000);
    form.reset();
    btn.disabled = true;
  });
};
