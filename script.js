/* ============================================
   VINOTECA CUME DO AVIA — JavaScript
   ============================================ */

// --- Translations ---
const translations = {
  es: {
    // Navbar
    'nav-proyecto': 'Proyecto',
    'nav-bodega': 'Bodega',
    'nav-experiencia': 'Experiencia',
    'nav-espacio': 'Espacio',
    'nav-ribadavia': 'Ribadavia',
    'nav-galeria': 'Galería',
    'nav-pdv': 'Puntos de venta',
    'nav-pdv-stack': 'Puntos\nde\nventa',
    'nav-catas': 'Catas',
    'nav-contacto': 'Contacto',

    // Hero
    'hero-pretitle': 'Ribadavia · Ribeiro · Galicia',
    'hero-title-1': 'Un espacio para descubrir',
    'hero-title-2': 'el vino del Ribeiro',
    'hero-subtitle': 'Con calma, con historia, con la autenticidad de quien lleva el territorio en cada copa.',
    'hero-btn': 'Descubrir el proyecto',

    // Sobre el proyecto
    'about-title': 'El proyecto',
    'about-subtitle': 'Una vinoteca con raíces en el Ribeiro',
    'about-p1': 'La Vinoteca Cume do Avia nace como un espacio dedicado a descubrir y compartir el vino del Ribeiro desde una perspectiva cercana y contemporánea. Vinculada a la bodega Cume do Avia, esta vinoteca aspira a convertirse en un punto de encuentro entre el vino, las personas y el territorio.',
    'about-p2': 'Concebida como un lugar de degustación abierto a vecinos y visitantes, la vinoteca ofrecerá una experiencia auténtica: conocer los vinos de la comarca, entender su historia y disfrutarlos acompañados de propuestas sencillas de maridaje.',
    'about-p3': 'El proyecto busca aportar valor al casco histórico de Ribadavia, reforzar su identidad vitivinícola y crear un espacio donde el vino sea el hilo conductor de conversaciones, encuentros y descubrimientos.',

    // Bodega
    'bodega-title': 'La bodega',
    'bodega-subtitle': 'Cume do Avia: vinos ecológicos con alma gallega',
    'bodega-intro': 'Cume do Avia es una bodega familiar situada en Ribadavia, en el corazón del Ribeiro, dedicada a la elaboración de vinos ecológicos que reflejan el carácter del territorio gallego. El proyecto nace del trabajo conjunto de viticultores comprometidos con la sostenibilidad, el respeto por la naturaleza y la recuperación de variedades autóctonas.',
    'bodega-f1-title': 'Viticultura ecológica',
    'bodega-f1-text': 'Uvas cultivadas con prácticas ecológicas, buscando siempre el equilibrio entre tradición e innovación en cada viñedo.',
    'bodega-f2-title': 'Variedades autóctonas',
    'bodega-f2-text': 'Recuperación y puesta en valor de las variedades propias del Ribeiro, expresando el paisaje y la cultura de Galicia.',
    'bodega-f3-title': 'Enoturismo',
    'bodega-f3-text': 'Visitas a viñedos, catas y actividades para acercar el mundo del vino al público desde la propia tierra.',
    'bodega-link': 'Visitar la web de Cume do Avia',

    // Experiencia
    'exp-title': 'La experiencia',
    'exp-subtitle': 'Qué encontrarás en nuestra vinoteca',
    'exp-1-title': 'Degustaciones',
    'exp-1-text': 'Prueba los vinos del Ribeiro en un entorno pensado para apreciar cada matiz, cada aroma, cada historia detrás de la copa.',
    'exp-2-title': 'Catas comentadas',
    'exp-2-text': 'Sesiones guiadas donde descubrirás las variedades, los procesos y los secretos de los vinos de la comarca.',
    'exp-3-title': 'Venta de botellas',
    'exp-3-text': 'Llévate a casa una selección cuidada de vinos del Ribeiro, directamente desde la bodega a tu mesa.',
    'exp-4-title': 'Maridajes',
    'exp-4-text': 'Propuestas sencillas y bien pensadas para acompañar cada vino: quesos, conservas, embutidos y productos gallegos.',
    'exp-5-title': 'Encuentros',
    'exp-5-text': 'Un espacio para compartir, conversar y disfrutar del vino como lo que es: un acto social, cultural y humano.',

    // Espacio
    'espacio-title': 'El espacio',
    'espacio-subtitle': 'Un lugar pensado para disfrutar del vino sin prisa',
    'espacio-d1': 'Un espacio pequeño, íntimo y acogedor donde cada detalle está pensado para crear una atmósfera de calma y disfrute.',
    'espacio-d2': 'Materiales nobles —piedra, madera, luz cálida— que conectan con la tradición constructiva gallega y con el carácter del Ribeiro.',
    'espacio-d3': 'Un lugar donde sentarse, elegir una copa y dejar que el vino cuente su propia historia mientras el tiempo se detiene.',
    'espacio-d4': 'Situado en el casco histórico de Ribadavia, el espacio busca integrarse con naturalidad en el tejido cultural y social de la villa.',

    // Ribadavia
    'rib-title': 'Ribadavia y el Ribeiro',
    'rib-quote': 'El Ribeiro no es solo una denominación de origen. Es una forma de entender el vino, la tierra y la vida.',
    'rib-p1': 'Ribadavia, capital histórica del Ribeiro, lleva siglos vinculada al vino. Sus calles empedradas, sus pazos y sus bodegas tradicionales hablan de una cultura vitivinícola que ha marcado la identidad de toda una comarca.',
    'rib-p2': 'La tradición vinícola del Ribeiro es una de las más antiguas de la península ibérica. Ya en la Edad Media, los vinos de esta zona eran conocidos y apreciados más allá de las fronteras gallegas, exportados por vía fluvial y marítima hasta los puertos del norte de Europa.',
    'rib-p3': 'Hoy, el Ribeiro vive un momento de recuperación y reconocimiento. Nuevas generaciones de viticultores están devolviendo el protagonismo a las variedades autóctonas, apostando por la calidad y la identidad territorial. La vinoteca quiere ser parte de ese impulso.',

    // Galería
    'gal-title': 'Galería',
    'gal-subtitle': 'Imágenes del territorio, el vino y la tradición',
    'gal-1': 'Viñedos del Ribeiro',
    'gal-2': 'Copas de vino',
    'gal-3': 'Botellas de vino',
    'gal-4': 'Paisaje gallego',
    'gal-5': 'Uvas en viñedo',
    'gal-6': 'Vinoteca',

    // Contacto
    'contact-title': 'Contacto',
    'contact-subtitle': 'Hablemos sobre el proyecto',
    'contact-name-label': 'Nombre',
    'contact-name-ph': 'Tu nombre',
    'contact-email-label': 'Email',
    'contact-email-ph': 'Tu correo electrónico',
    'contact-msg-label': 'Mensaje',
    'contact-msg-ph': 'Cuéntanos en qué podemos ayudarte',
    'contact-btn': 'Enviar mensaje',
    'contact-note': 'Proyecto en desarrollo. Información disponible bajo solicitud.',
    'contact-location': 'Ribadavia, Ourense, Galicia',
    'contact-success-title': 'Mensaje enviado',
    'contact-success-text': 'Gracias por tu interés. Nos pondremos en contacto contigo pronto.',

    // Puntos de venta
    'pdv-title': 'Puntos de venta',
    'pdv-subtitle': 'Dónde encontrar nuestros vinos',
    'pdv-intro': 'Además de en la propia vinoteca, puedes encontrar los vinos de Cume do Avia en una selección de tiendas gourmet, vinotecas y espacios gastronómicos de Galicia comprometidos con el producto local.',
    'pdv-note': '¿Tienes una tienda o restaurante y quieres ofrecer nuestros vinos? Escríbenos desde la sección de contacto.',

    // Catas
    'catas-title': 'Catas',
    'catas-subtitle': 'Apúntate a nuestras catas comentadas',
    'catas-desc': 'Una vez al mes organizamos una cata guiada en la vinoteca, con una selección de vinos del Ribeiro acompañados de pequeños bocados de productos gallegos. Una sesión íntima para descubrir, conversar y disfrutar sin prisa. Plazas limitadas para mantener el carácter cercano del encuentro.',
    'catas-name-label': 'Nombre',
    'catas-name-ph': 'Tu nombre',
    'catas-email-label': 'Email',
    'catas-email-ph': 'Tu correo electrónico',
    'catas-btn': 'Apuntarme',
    'catas-waitlist-notice': 'Las plazas para la próxima cata están completas. Si te apuntas, pasarás a la lista de espera y te avisaremos en cuanto se libere un sitio.',
    'catas-success-title': '¡Apuntado!',
    'catas-success-text': 'Gracias por tu interés. Te confirmaremos los detalles por email.',
    'catas-success-waitlist-title': 'En lista de espera',
    'catas-success-waitlist-text': 'Las plazas estaban completas, así que te hemos añadido a la lista de espera. Te avisaremos por email si se libera un sitio.',
    'catas-sending': 'Enviando...',
    'catas-error': 'Error al enviar. Inténtalo de nuevo.',

    // Footer
    'footer-desc': 'Un espacio para descubrir y compartir el vino del Ribeiro en el corazón de Ribadavia.',
    'footer-nav-title': 'Navegación',
    'footer-contact-title': 'Contacto',
    'footer-bodega': 'Bodega Cume do Avia',
    'footer-copy': '© 2026 Vinoteca Cume do Avia · Ribadavia, Ourense.',
    'footer-project': 'Un proyecto vinculado a',
  },

  gl: {
    // Navbar
    'nav-proyecto': 'Proxecto',
    'nav-bodega': 'Adega',
    'nav-experiencia': 'Experiencia',
    'nav-espacio': 'Espazo',
    'nav-ribadavia': 'Ribadavia',
    'nav-galeria': 'Galería',
    'nav-pdv': 'Puntos de venda',
    'nav-pdv-stack': 'Puntos\nde\nvenda',
    'nav-catas': 'Catas',
    'nav-contacto': 'Contacto',

    // Hero
    'hero-pretitle': 'Ribadavia · Ribeiro · Galicia',
    'hero-title-1': 'Un espazo para descubrir',
    'hero-title-2': 'o viño do Ribeiro',
    'hero-subtitle': 'Con calma, con historia, coa autenticidade de quen leva o territorio en cada copa.',
    'hero-btn': 'Descubrir o proxecto',

    // Sobre el proyecto
    'about-title': 'O proxecto',
    'about-subtitle': 'Unha vinoteca con raíces no Ribeiro',
    'about-p1': 'A Vinoteca Cume do Avia nace como un espazo dedicado a descubrir e compartir o viño do Ribeiro desde unha perspectiva próxima e contemporánea. Vinculada á adega Cume do Avia, esta vinoteca aspira a converterse nun punto de encontro entre o viño, as persoas e o territorio.',
    'about-p2': 'Concibida como un lugar de degustación aberto a veciños e visitantes, a vinoteca ofrecerá unha experiencia auténtica: coñecer os viños da comarca, entender a súa historia e gozalos acompañados de propostas sinxelas de maridaxe.',
    'about-p3': 'O proxecto busca achegar valor ao casco histórico de Ribadavia, reforzar a súa identidade vitivinícola e crear un espazo onde o viño sexa o fío condutor de conversas, encontros e descubrimentos.',

    // Bodega
    'bodega-title': 'A adega',
    'bodega-subtitle': 'Cume do Avia: viños ecolóxicos con alma galega',
    'bodega-intro': 'Cume do Avia é unha adega familiar situada en Ribadavia, no corazón do Ribeiro, dedicada á elaboración de viños ecolóxicos que reflicten o carácter do territorio galego. O proxecto nace do traballo conxunto de viticultores comprometidos coa sustentabilidade, o respecto pola natureza e a recuperación de variedades autóctonas.',
    'bodega-f1-title': 'Viticultura ecolóxica',
    'bodega-f1-text': 'Uvas cultivadas con prácticas ecolóxicas, buscando sempre o equilibrio entre tradición e innovación en cada viñedo.',
    'bodega-f2-title': 'Variedades autóctonas',
    'bodega-f2-text': 'Recuperación e posta en valor das variedades propias do Ribeiro, expresando a paisaxe e a cultura de Galicia.',
    'bodega-f3-title': 'Enoturismo',
    'bodega-f3-text': 'Visitas a viñedos, catas e actividades para achegar o mundo do viño ao público desde a propia terra.',
    'bodega-link': 'Visitar a web de Cume do Avia',

    // Experiencia
    'exp-title': 'A experiencia',
    'exp-subtitle': 'Que atoparás na nosa vinoteca',
    'exp-1-title': 'Degustacións',
    'exp-1-text': 'Proba os viños do Ribeiro nun contorno pensado para apreciar cada matiz, cada aroma, cada historia detrás da copa.',
    'exp-2-title': 'Catas comentadas',
    'exp-2-text': 'Sesións guiadas onde descubrirás as variedades, os procesos e os segredos dos viños da comarca.',
    'exp-3-title': 'Venda de botellas',
    'exp-3-text': 'Leva á casa unha selección coidada de viños do Ribeiro, directamente desde a adega á túa mesa.',
    'exp-4-title': 'Maridaxes',
    'exp-4-text': 'Propostas sinxelas e ben pensadas para acompañar cada viño: queixos, conservas, embutidos e produtos galegos.',
    'exp-5-title': 'Encontros',
    'exp-5-text': 'Un espazo para compartir, conversar e gozar do viño como o que é: un acto social, cultural e humano.',

    // Espacio
    'espacio-title': 'O espazo',
    'espacio-subtitle': 'Un lugar pensado para gozar do viño sen présa',
    'espacio-d1': 'Un espazo pequeno, íntimo e acolledor onde cada detalle está pensado para crear unha atmosfera de calma e goce.',
    'espacio-d2': 'Materiais nobres —pedra, madeira, luz cálida— que conectan coa tradición construtiva galega e co carácter do Ribeiro.',
    'espacio-d3': 'Un lugar onde sentarse, elixir unha copa e deixar que o viño conte a súa propia historia mentres o tempo se detén.',
    'espacio-d4': 'Situado no casco histórico de Ribadavia, o espazo busca integrarse con naturalidade no tecido cultural e social da vila.',

    // Ribadavia
    'rib-title': 'Ribadavia e o Ribeiro',
    'rib-quote': 'O Ribeiro non é só unha denominación de orixe. É unha forma de entender o viño, a terra e a vida.',
    'rib-p1': 'Ribadavia, capital histórica do Ribeiro, leva séculos vinculada ao viño. As súas rúas empedradas, os seus pazos e as súas adegas tradicionais falan dunha cultura vitivinícola que marcou a identidade de toda unha comarca.',
    'rib-p2': 'A tradición vinícola do Ribeiro é unha das máis antigas da península ibérica. Xa na Idade Media, os viños desta zona eran coñecidos e apreciados máis alá das fronteiras galegas, exportados por vía fluvial e marítima ata os portos do norte de Europa.',
    'rib-p3': 'Hoxe, o Ribeiro vive un momento de recuperación e recoñecemento. Novas xeracións de viticultores están a devolver o protagonismo ás variedades autóctonas, apostando pola calidade e a identidade territorial. A vinoteca quere ser parte dese impulso.',

    // Galería
    'gal-title': 'Galería',
    'gal-subtitle': 'Imaxes do territorio, o viño e a tradición',
    'gal-1': 'Viñedos do Ribeiro',
    'gal-2': 'Copas de viño',
    'gal-3': 'Botellas de viño',
    'gal-4': 'Paisaxe galega',
    'gal-5': 'Uvas no viñedo',
    'gal-6': 'Vinoteca',

    // Contacto
    'contact-title': 'Contacto',
    'contact-subtitle': 'Falemos sobre o proxecto',
    'contact-name-label': 'Nome',
    'contact-name-ph': 'O teu nome',
    'contact-email-label': 'Email',
    'contact-email-ph': 'O teu correo electrónico',
    'contact-msg-label': 'Mensaxe',
    'contact-msg-ph': 'Cóntanos en que podemos axudarte',
    'contact-btn': 'Enviar mensaxe',
    'contact-note': 'Proxecto en desenvolvemento. Información dispoñible baixo solicitude.',
    'contact-location': 'Ribadavia, Ourense, Galicia',
    'contact-success-title': 'Mensaxe enviada',
    'contact-success-text': 'Grazas polo teu interese. Poñerémonos en contacto contigo pronto.',

    // Puntos de venta
    'pdv-title': 'Puntos de venda',
    'pdv-subtitle': 'Onde atopar os nosos viños',
    'pdv-intro': 'Ademais da propia vinoteca, podes atopar os viños de Cume do Avia nunha selección de tendas gourmet, vinotecas e espazos gastronómicos de Galicia comprometidos co produto local.',
    'pdv-note': 'Tes unha tenda ou restaurante e queres ofrecer os nosos viños? Escríbenos desde a sección de contacto.',

    // Catas
    'catas-title': 'Catas',
    'catas-subtitle': 'Apúntate ás nosas catas comentadas',
    'catas-desc': 'Unha vez ao mes organizamos unha cata guiada na vinoteca, cunha selección de viños do Ribeiro acompañados de pequenos bocados de produtos galegos. Unha sesión íntima para descubrir, conversar e gozar sen présa. Prazas limitadas para manter o carácter próximo do encontro.',
    'catas-name-label': 'Nome',
    'catas-name-ph': 'O teu nome',
    'catas-email-label': 'Email',
    'catas-email-ph': 'O teu correo electrónico',
    'catas-btn': 'Apuntarme',
    'catas-waitlist-notice': 'As prazas para a próxima cata están completas. Se te apuntas, pasarás á lista de espera e avisarémoste en canto se libere un sitio.',
    'catas-success-title': 'Apuntado!',
    'catas-success-text': 'Grazas polo teu interese. Confirmarémosche os detalles por email.',
    'catas-success-waitlist-title': 'En lista de espera',
    'catas-success-waitlist-text': 'As prazas estaban completas, así que te engadimos á lista de espera. Avisarémoste por email se se libera un sitio.',
    'catas-sending': 'Enviando...',
    'catas-error': 'Erro ao enviar. Téntao de novo.',

    // Footer
    'footer-desc': 'Un espazo para descubrir e compartir o viño do Ribeiro no corazón de Ribadavia.',
    'footer-nav-title': 'Navegación',
    'footer-contact-title': 'Contacto',
    'footer-bodega': 'Adega Cume do Avia',
    'footer-copy': '© 2026 Vinoteca Cume do Avia · Ribadavia, Ourense.',
    'footer-project': 'Un proxecto vinculado a',
  }
};

let currentLang = 'es';

// --- Language Switcher ---
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update active button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// --- Navbar Scroll Effect ---
function handleNavbarScroll() {
  const navbar = document.querySelector('.navbar-vinoteca');
  if (!navbar) return;
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// --- Active Nav Link on Scroll ---
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-vinoteca .nav-link[href^="#"]');
  const scrollPos = window.scrollY + 120;

  let currentSection = '';
  sections.forEach(section => {
    if (section.offsetTop <= scrollPos) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSection) {
      link.classList.add('active');
    }
  });
}

// --- Scroll Reveal ---
function handleScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 80) {
      el.classList.add('visible');
    }
  });
}

// --- Lightbox ---
function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  if (lightbox && lightboxImg) {
    lightboxImg.src = src;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// --- Contact Form ---
function handleContactForm(e) {
  e.preventDefault();
  const form = e.target;
  const success = document.getElementById('form-success');
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'Enviando...';

  fetch(form.action, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({
      name: form.querySelector('[name="name"]').value,
      email: form.querySelector('[name="email"]').value,
      message: form.querySelector('[name="message"]').value,
      _subject: form.querySelector('[name="_subject"]').value
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      form.style.display = 'none';
      success.classList.add('show');
    } else {
      btn.disabled = false;
      btn.textContent = originalText;
      alert('Error al enviar. Inténtalo de nuevo.');
    }
  })
  .catch(() => {
    btn.disabled = false;
    btn.textContent = originalText;
    alert('Error al enviar. Inténtalo de nuevo.');
  });
}

// --- Catas Form (Google Sheets vía Apps Script) ---
// Pega aquí la URL del Web App desplegado en Google Apps Script.
const CATAS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzgLJ8tH2XMxCHU75-LWWgk2Hk6iLwQaG3sUXSEGKiDXtVEDpD96_K7-Uzf6l3fONXt/exec';

function catasEndpointReady() {
  return CATAS_ENDPOINT && !CATAS_ENDPOINT.includes('REEMPLAZAR');
}

async function checkCatasStatus() {
  if (!catasEndpointReady()) return;
  try {
    const res = await fetch(CATAS_ENDPOINT + '?action=status');
    const data = await res.json();
    if (data && data.isFull) {
      const notice = document.getElementById('catas-waitlist-notice');
      if (notice) notice.style.display = 'block';
    }
  } catch (err) {
    console.warn('No se pudo comprobar el estado de catas', err);
  }
}

function showCatasSuccess(status) {
  const form = document.getElementById('catas-form');
  const success = document.getElementById('catas-success');
  const title = document.getElementById('catas-success-title');
  const text = document.getElementById('catas-success-text');
  const notice = document.getElementById('catas-waitlist-notice');
  if (form) form.style.display = 'none';
  if (notice) notice.style.display = 'none';
  const t = translations[currentLang];
  if (status === 'waitlist') {
    if (title) title.textContent = t['catas-success-waitlist-title'];
    if (text) text.textContent = t['catas-success-waitlist-text'];
  } else {
    if (title) title.textContent = t['catas-success-title'];
    if (text) text.textContent = t['catas-success-text'];
  }
  if (success) success.classList.add('show');
}

function handleCatasForm(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  const t = translations[currentLang];

  if (!catasEndpointReady()) {
    alert('Endpoint de Catas no configurado todavía.');
    return;
  }

  btn.disabled = true;
  btn.textContent = t['catas-sending'];

  const body = new URLSearchParams({
    name: form.querySelector('[name="name"]').value,
    email: form.querySelector('[name="email"]').value
  });

  fetch(CATAS_ENDPOINT, { method: 'POST', body })
    .then(res => res.json())
    .then(data => {
      if (data && (data.status === 'confirmed' || data.status === 'waitlist')) {
        showCatasSuccess(data.status);
      } else {
        btn.disabled = false;
        btn.textContent = originalText;
        alert(t['catas-error']);
      }
    })
    .catch(() => {
      btn.disabled = false;
      btn.textContent = originalText;
      alert(t['catas-error']);
    });
}

// --- Close navbar on link click (mobile) ---
function closeNavbarOnClick() {
  const navbarCollapse = document.querySelector('.navbar-collapse');
  if (navbarCollapse && navbarCollapse.classList.contains('show')) {
    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
    if (bsCollapse) bsCollapse.hide();
  }
}

// --- Init ---
document.addEventListener('DOMContentLoaded', function () {
  // Hero loaded animation
  setTimeout(() => {
    const hero = document.querySelector('.hero');
    if (hero) hero.classList.add('loaded');
  }, 100);

  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      setLanguage(this.dataset.lang);
    });
  });

  // Scroll events
  window.addEventListener('scroll', function () {
    handleNavbarScroll();
    updateActiveNav();
    handleScrollReveal();
  }, { passive: true });

  // Initial calls
  handleNavbarScroll();
  handleScrollReveal();

  // Gallery lightbox
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function () {
      const img = this.querySelector('img');
      if (img) openLightbox(img.src);
    });
  });

  // Lightbox close
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
        closeLightbox();
      }
    });
  }

  // ESC key closes lightbox
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });

  // Contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactForm);
  }

  // Catas form
  const catasForm = document.getElementById('catas-form');
  if (catasForm) {
    catasForm.addEventListener('submit', handleCatasForm);
    checkCatasStatus();
  }

  // Close navbar on link click (mobile)
  document.querySelectorAll('.navbar-vinoteca .nav-link').forEach(link => {
    link.addEventListener('click', closeNavbarOnClick);
  });
});
