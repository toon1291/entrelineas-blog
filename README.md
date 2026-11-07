# Entre líneas
Blog de cuentos del equipo del Instituto Tecnológico de Puebla, desarrollado con Next.js, TypeScript y CSS. Diseño editorial oscuro, acentos violeta y dorado, portada geométrica decorativa, filtros, buscador, carrusel y páginas por autor.

## Iniciar en Windows / macOS / Linux
1. Instala Node.js 22.9 o posterior (recomendado: 24 LTS).
2. Abre esta carpeta en Visual Studio Code.
3. En Terminal → Nueva terminal ejecuta:

```sh
npm install
npm run dev
```

4. Abre http://localhost:3000. Detén el servidor con Ctrl+C.

## Verificar y ejecutar en producción
```sh
npm run typecheck
npm run build
npm start
```

## Dónde editar
- `src/data/blog.ts`: integrantes, cuentos, fuentes, audio, ilustraciones y redes sociales.
- `src/components/Blog.tsx`: inicio, buscador, filtros, carrusel, equipo y calendario.
- `src/app/globals.css`: diseño y adaptación a celulares.
- `src/app/cuentos/[slug]/page.tsx`: página de cada cuento.
- `src/app/integrantes/[id]/page.tsx`: publicaciones de cada integrante.
- `public/audio/`: grabaciones MP3, solo voz.
- `public/ilustraciones/`: imágenes propias o autorizadas.

## Primer cuento
El primer cuento está como BORRADOR: activa «Ver borradores» en el inicio para revisarlo. No se ha publicado ni se ha atribuido una fecha real de publicación. El texto resume el relato introductorio; revisen que coincida con la edición asignada por su profesor. La fecha exacta y el título original individual no están comprobados, por lo que no se inventan.

## Agregar una publicación
Duplica el primer objeto del arreglo `stories`, conserva su estructura y completa todos los campos. Usa un `slug` único sin espacios ni acentos y un `authorId` válido de `members`. Para varios párrafos utiliza el arreglo `summary`. Cada publicación debe contener tres elementos en `lessons`. No uses HTML en los textos: React los presenta como texto y los escapa.

Guarda la voz en `public/audio/nombre.mp3` y configura `audio: '/audio/nombre.mp3'`. La grabación debe incluir la MISMA ficha, resumen y enseñanzas. Guarda una ilustración autorizada en `public/ilustraciones/nombre.webp`, configura `illustration: '/ilustraciones/nombre.webp'` y agrega descripción y crédito en `illustrationAlt`. La portada CSS es decorativa, no sustituye las ilustraciones de la obra requeridas por el profesor.

Al publicar de verdad cambia `status: 'published'` y `publishedAt: 'AAAA-MM-DD'` por la fecha real local de México. `plannedDate` es únicamente el turno previsto. No retrofeches publicaciones. Los borradores son revisables por enlace; NO contienen secretos ni están protegidos por autenticación. No existe administrador, base de datos ni programación automática.

## Trabajo en equipo y publicación
Suban esta carpeta a un repositorio GitHub. Cada integrante trabaja en una rama y abre un pull request con su publicación; revisen contenido, referencias, derechos de imágenes y audio antes de unirlo. No incluyan contraseñas, tokens o datos privados. Los números de control se conservan en los datos para una futura carátula, pero no se presentan en las páginas.

Para obtener una liga pública pueden importar el repositorio en un proveedor compatible con Next.js, ejecutar el build y desplegar. El proyecto todavía NO está alojado y no tiene una liga pública. Después agreguen la liga real a la carátula y verifiquen que el profesor pueda acceder sin iniciar sesión.

## Calendario
24 turnos del 6 al 29 de noviembre de 2026, cuatro rondas por apellidos. Si alguien no publica, el calendario NO desplaza los turnos. El carrusel es una interfaz visual independiente de la rotación de integrantes. Todos deben consultar el orden acordado con el profesor.

## Redes
Configura URLs reales en `socialProfiles`. No se inventan cuentas. Cada una requiere al menos cinco publicaciones durante el proyecto (15 en total); este código no publica en redes.

## Calidad y límites
- Gobernabilidad: contenido tipado, responsable por entrada, fuentes y cambios revisables en Git.
- Estética y accesibilidad: diseño adaptable, etiquetas de formularios, navegación por teclado, enlace para saltar contenido y movimiento reducido.
- Sensibilidad: aviso contextual y resumen sin descripciones gráficas.
- Seguridad: sin contraseñas incrustadas, sin formularios ni base de datos; textos escapados por React. Mantengan dependencias actualizadas y habiliten HTTPS en el proveedor.
- Concurrencia y carga: páginas prerenderizadas y contenido local; usen caché/CDN, imágenes optimizadas y audios comprimidos en el alojamiento. No se ha realizado prueba de carga ni se garantiza capacidad ilimitada.
- Audio: reproductor nativo sin reproducción automática, carga solo metadatos.

## Pendientes reales de la entrega escolar
23 cuentos adicionales, audios de todas las entradas, ilustraciones autorizadas, cuentas y publicaciones sociales, alojamiento y carátula con la liga real. Este ZIP es el proyecto de software, no representa 24 publicaciones realizadas.
