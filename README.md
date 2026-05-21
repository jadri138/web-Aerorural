# Aerorural

Web estática profesional para `aerorural.com`, preparada para subir directamente a Hostinger dentro de `public_html`.

## Archivos

- `index.html`: estructura, textos, SEO básico y formulario visual.
- `aviso-legal.html`: aviso legal con campos pendientes de completar.
- `politica-privacidad.html`: política de privacidad orientativa.
- `politica-cookies.html`: política de cookies y almacenamiento local.
- `style.css`: estilos responsive, layout, tarjetas, menú móvil y animaciones ligeras.
- `script.js`: menú hamburguesa, aviso del formulario, aviso de cookies y animaciones al hacer scroll.
- `assets/`: imagen hero y favicon.

## Cómo editar datos principales

En `index.html` puedes cambiar:

- Teléfono: busca `+34 600 000 000` y `34600000000`.
- Email: busca `info@aerorural.com`.
- Localización: busca `Aragón / medio rural`.
- Textos de servicios, sectores y sobre mí.
- Imagen principal: sustituye `assets/hero-aerorural.jpg` por otra imagen con el mismo nombre.

## Datos legales pendientes

Antes de publicar, completa los placeholders legales en:

- `aviso-legal.html`
- `politica-privacidad.html`

Busca `[PENDIENTE DE COMPLETAR]` y sustituye esos campos por los datos reales:

- NIF/CIF.
- Domicilio fiscal o profesional que corresponda.
- Titular exacto de la actividad.
- Proveedores reales si se conecta un formulario, analítica, email marketing u otras herramientas.

Las páginas legales son una base orientativa para una web estática sencilla. Conviene que un gestor o profesional legal las revise antes de usar la web con datos reales de clientes.

## Formulario

El formulario no envía datos todavía. Al pulsar enviar muestra un aviso para contactar por WhatsApp o email.

Para conectarlo más adelante con Formspree u otro servicio:

1. Crea el formulario en el proveedor elegido.
2. Añade el atributo `action="URL_DEL_PROVEEDOR"` al `<form>`.
3. Cambia el método a `method="POST"`.
4. Ajusta o elimina el bloque de JavaScript que intercepta el envío en `script.js`.

## Subida a Hostinger

1. Entra por FTP/SFTP o el gestor de archivos de Hostinger.
2. Abre la carpeta `public_html` del dominio `aerorural.com`.
3. Sube `index.html`, `aviso-legal.html`, `politica-privacidad.html`, `politica-cookies.html`, `style.css`, `script.js`, `README.md` y la carpeta `assets`.
4. Comprueba que `https://aerorural.com/` carga correctamente.

El dominio `aerorural.es` debe configurarse desde Hostinger o el registrador para redirigir a `https://aerorural.com/`.

## Notas

- No usa WordPress, React, Node, Tailwind ni dependencias externas.
- No necesita proceso de build.
- La web está preparada para móvil, tablet y escritorio.
