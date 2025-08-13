
 // Botón Contacto
document.addEventListener('DOMContentLoaded', () => {
  const btnContacto = document.getElementById('btnContacto');
  if (btnContacto) {
    btnContacto.addEventListener('click', () => {
      location.href = '../src/html/pages/contact.html';
    });
  }

  // Botón Detalles
  const btnContactoDetalles = document.getElementById('btnContactoDetalles');
  if (btnContactoDetalles) {
    btnContactoDetalles.addEventListener('click', () => {
      location.href = './contact.html';
    });
  }

  // Botón WhatsApp
  const btnWhatsapp = document.getElementById('btnWhatsapp');
    if (btnWhatsapp) {
      btnWhatsapp.addEventListener('click', () => {
        window.open('https://wa.me/50687589965', '_blank', 'noopener');
      });
    }

  // Botón Facebook
  const btnFacebook = document.getElementById('btnFacebook');
  if (btnFacebook) {
    btnFacebook.addEventListener('click', () => {
      window.open('https://www.facebook.com/impresosquira', '_blank', 'noopener');
    });
  }
});

