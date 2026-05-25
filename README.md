# la Mona — Sitio web

Joyería artesanal de plata 925 y baño de oro 18k, personalizada con tu
nombre o iniciales. Lima, Perú · [@lamona_peru](https://www.instagram.com/lamona_peru/)

Sitio web hecho con **Vite + React 18**. Estático — no requiere servidor
backend; cada producto enlaza a WhatsApp con un mensaje pre-armado.

---

## 1. Requisitos

- **Node.js 18+** (recomendado 20 LTS)
- **npm** (viene con Node) o `pnpm` / `yarn` si prefieres

Verifica tu versión:
```bash
node --version   # debería ser ≥ 18.0.0
npm --version
```

## 2. Instalación

```bash
# Clona o descomprime el proyecto y entra en la carpeta
cd lamona-app

# Copia las variables de entorno (opcional)
cp .env.example .env

# Instala dependencias
npm install
```

## 3. Desarrollo

```bash
npm run dev
```

Abre <http://localhost:5173> — recarga en caliente al guardar.

## 4. Build de producción

```bash
npm run build
```

Genera el bundle optimizado en `dist/`. Para previsualizar el build
localmente:

```bash
npm run preview
```

Abre <http://localhost:4173>.

---

## 5. Despliegue

El sitio compilado vive en `dist/`. Es **100% estático** — puedes subirlo
a cualquier host de archivos: Netlify, Vercel, GitHub Pages, Cloudflare
Pages, AWS S3, un servidor Apache/Nginx, o el cPanel de tu proveedor.

### Opción A · Netlify (recomendado, 1 click)

1. Sube el proyecto a un repositorio Git (GitHub, GitLab, Bitbucket).
2. En Netlify → **Add new site → Import from Git** → conecta el repo.
3. Netlify detecta `netlify.toml` automáticamente:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy.

O por CLI:
```bash
npm install -g netlify-cli
netlify deploy --build --prod
```

### Opción B · Vercel

1. Importa el repo en <https://vercel.com/new>.
2. Vercel lee `vercel.json` y configura todo solo.
3. Deploy.

O por CLI:
```bash
npm install -g vercel
vercel --prod
```

### Opción C · GitHub Pages

```bash
npm run build
# Sube el contenido de dist/ a la rama gh-pages
npx gh-pages -d dist
```

Asegúrate de poner `base: '/<nombre-repo>/'` en `vite.config.js` si tu
sitio vive en `usuario.github.io/<nombre-repo>/`.

### Opción D · Hosting tradicional (Apache / cPanel)

1. `npm run build`
2. Sube **todo el contenido** de `dist/` a la raíz pública (`public_html`
   en cPanel, o donde sirvan tu dominio).
3. El archivo `.htaccess` se copia automáticamente desde `public/` — ya
   contiene el SPA fallback, compresión gzip y cache headers.

### Opción E · Nginx

```nginx
server {
  listen 80;
  server_name lamona.pe;
  root /var/www/lamona/dist;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }

  # Cache hashed assets aggressively
  location /static/ {
    expires 1y;
    add_header Cache-Control "public, immutable";
  }
}
```

---

## 6. Estructura del proyecto

```
lamona-app/
├── public/                  # Archivos servidos tal cual
│   ├── assets/              # Fotos, logo, posts (≈85 archivos)
│   ├── .htaccess            # Para hosting Apache
│   └── robots.txt
├── src/
│   ├── components/          # Componentes React
│   │   ├── Nav.jsx
│   │   ├── Hero.jsx
│   │   ├── Catalogo.jsx
│   │   ├── Personalizador.jsx
│   │   ├── Proceso.jsx
│   │   ├── Nosotros.jsx
│   │   ├── Instagram.jsx
│   │   ├── FAQ.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── products.js      # Catálogo de 69 productos
│   ├── icons.jsx            # SVG inline (WhatsApp, IG, FB)
│   ├── lib.js               # Constantes de marca + waLink helper
│   ├── App.jsx              # Composición principal
│   ├── main.jsx             # Punto de entrada React
│   └── styles.css           # Todos los estilos
├── index.html               # Plantilla HTML (raíz, leída por Vite)
├── vite.config.js           # Configuración del bundler
├── package.json
├── .env.example
├── .gitignore
├── netlify.toml             # Deploy Netlify
└── vercel.json              # Deploy Vercel
```

---

## 7. Cómo actualizar el catálogo

Todo el catálogo vive en **`src/data/products.js`**. Cada producto es un
objeto con esta forma:

```js
{
  id: 'p70',                            // único
  cat: 'collar',                        // anillo | collar | pulsera | arete | conjunto
  name: 'Nombre visible',
  desc: 'Descripción corta...',
  photo: 'foto-70.jpeg',                // archivo en public/assets/
  tag: 'Personalizable',                // opcional — Set | Baño de oro | Exclusivo | ''
}
```

Para agregar un producto:

1. Sube la foto a `public/assets/` (por ejemplo `foto-70.jpeg`).
2. Añade un objeto al array `products`.
3. Sube el contador de la categoría en `categories`:

```js
{ id: 'collar', label: 'Collares', count: 26 }
```

4. `npm run dev` para verificar, después `npm run build` y vuelve a
   desplegar.

---

## 8. Personalización

| Quiero cambiar...           | Edita                                       |
|-----------------------------|---------------------------------------------|
| Número de WhatsApp          | `src/data/products.js` → `brand.whatsapp`   |
| Mensaje por defecto WA      | `src/data/products.js` → `brand.whatsappMsg`|
| Links a Instagram/Facebook  | `src/data/products.js` → `brand.instagram` / `facebook` |
| Colores y tipografía        | `src/styles.css` (variables CSS al inicio)  |
| Titular del hero            | `src/components/Hero.jsx`                   |
| Preguntas frecuentes        | `src/components/FAQ.jsx`                    |
| Paso a paso (proceso)       | `src/components/Proceso.jsx`                |
| Fotos del hero              | `src/data/products.js` → `heroFeatured`     |
| Posts de Instagram          | Reemplaza `public/assets/post-*.jpg`        |

### Cambiar la paleta de colores

Hay 4 paletas listas en `src/styles.css` (`mona`, `bone`, `editorial`,
`rose`). La activa la define `data-palette` en `<body>` dentro de
`index.html`. Cambia esa palabra para alternar.

---

## 9. Performance & SEO

- Las imágenes en `public/assets/` son JPEG sin optimizar. Para mejorar
  el LCP, considera ejecutar:
  ```bash
  npx @squoosh/cli --webp auto public/assets/foto-*.jpeg
  ```
  y referenciar `.webp` en `products.js`.
- Mete tu Google Search Console verification en `index.html`.
- Considera añadir un `sitemap.xml` (estático en `public/`).

---

## 10. Licencia

Código propietario de la Mona. Todos los derechos reservados.

Fotografías y diseño de joyas © la Mona.
