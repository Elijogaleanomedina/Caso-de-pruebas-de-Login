# Ejercicio de Pruebas con Playwright

Proyecto de prueba automatizada con Playwright para ejecutar casos de login.

## Requisitos

- Node.js 18+ instalado
- npm disponible
- Conexión a Internet si el proyecto accede a una URL remota durante las pruebas

## Instalación

1. Abrir una terminal en la carpeta del proyecto:
   ```bash
   cd c:\Users\GreenSQA\Documents\Ejercicio
   ```
2. Instalar las dependencias del proyecto:
   ```bash
   npm install
   ```

## Configuración opcional

El proyecto incluye un ejemplo de archivo de entorno con variables de prueba en `.env.example`.
Si necesitas usar valores personalizados, copia ese archivo a `.env` y ajusta los datos:

```bash
copy .env.example .env
```

> Nota: la configuración actual de `playwright.config.ts` no carga automáticamente `.env`.
> Si quieres usar variables de entorno en tus tests, habilita la carga de dotenv en `playwright.config.ts`.

## Ejecución de pruebas

Ejecutar todas las pruebas con Playwright:

```bash
npx playwright test
```

Para ejecutar un archivo de prueba específico:

```bash
npx playwright test tests/LOGIN.spec.ts
```

## Reportes

Después de ejecutar las pruebas, Playwright genera un reporte HTML.
Puedes abrirlo con el siguiente comando:

```bash
npx playwright show-report
```

También puedes abrir directamente `playwright-report/index.html` en el navegador.

## Estructura del proyecto

- `package.json` - dependencias y metadatos del proyecto
- `playwright.config.ts` - configuración de Playwright
- `tests/` - carpeta con los archivos de prueba
- `playwright-report/` - reportes generados por Playwright
- `.env.example` - ejemplo de variables de entorno para pruebas

## Notas

- No se definen scripts personalizados en `package.json`, por lo que se usan comandos `npx playwright`.
- Si agregas un script de prueba en `package.json`, puedes ejecutarlo con `npm test`.
