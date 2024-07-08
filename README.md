# PDFForge

PDFForge es una aplicación web que te permite convertir páginas web en archivos PDF de manera rápida y sencilla. Simplemente ingresa la URL del sitio web que deseas convertir, y PDFForge generará un archivo PDF con el contenido completo de la página.

## Características

- **Conversión de HTML a PDF**: Transforma cualquier página web en un archivo PDF descargable.
- **Personalización**: Ajusta el formato, los márgenes y otras opciones antes de generar el PDF.

## Requisitos

- Node.js
- npm (Node Package Manager)

## Instalación

1. Clona este repositorio:

    ```bash
    git clone https://ivolucion.visualstudio.com/GeneradorPDF/_git/GeneradorPDF
    cd pdfforge
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

## Uso

1. Inicia el servidor:

    ```bash
    node index.js
    ```

2. Envía una solicitud POST a `http://localhost:3000/generate-pdf` con el siguiente formato:

    ```json
    {
      "url": "http://ejemplo.com"
    }
    ```

    La respuesta será un archivo PDF con el contenido de la página web especificada.

## Archivos

### `index.js`

Este archivo configura el servidor Express y define la ruta para generar los archivos PDF.

### `pdf/generate-pdf.js`

Este archivo utiliza Puppeteer para convertir la página web en un archivo PDF.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.