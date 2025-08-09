---
title: Getty actualizado v1.0.5
date: 2025-08-03T00:00:00.000Z
permalink: /es/blog/update.1.0.5/
createTime: 2025/08/08 20:30
cover: https://thumbs.odycdn.com/13fc26a839badfe6a238abc4acd24654.webp
coverStyle:
  layout: left
  width: 200
  compact: true
---

## ==Versión 1.0.5:== Mejoras en persistencia, optimización y CI.

En nuestra última actualización, hemos realizado varias mejoras significativas que mejoran la experiencia del usuario y la eficiencia técnica. Aquí los cambios más destacados:

## Mejoras en persistencia y seguridad

1. **Persistencia mejorada de notificaciones externas**: Implementamos un nuevo endpoint dedicado para cargar y guardar secretos, manteniendo `/api/modules` sin secretos para mayor seguridad.
    
2. **Refactorización de configuración**: Migramos `external-notifications-config.json` a la carpeta `config/` con creación segura de carpetas.
    
3. **Escrituras atómicas y autosave**: Mejoramos las escrituras atómicas y añadimos autosave en el Admin cuando se agregan o eliminan elementos.

## Mejoras técnicas

1. **Cache busting**: Añadimos versionamiento en `admin.js` (`?v=1.0.6`) y mantenimiento de `languages.js` (`?v=1.0.4`) para evitar problemas de caché.
    
2. **Optimización de construcción**: Implementamos minificación de HTML, JS y CSS, junto con verificación de `languages.js`.
    
3. **Actualizaciones de pruebas**: Actualizamos Jest a `^30.0.5` y `@types/jest` a `^30.0.0`, con todas las pruebas pasando correctamente.
    
## Mejoras en integración

1. **Configuración avanzada de CI**: Añadimos `node.yml` con matriz de ejecución, gestión de cache de npm, construcción y prueba, control de concurrencia y ignorancia de rutas específicas.
    
2. **Auditoría de seguridad**: Realizamos una auditoría de npm (modo producción, tolerante) y gestionamos artefactos públicos en `workflow_dispatch`.

Estas mejoras combinadas resultan en una aplicación más robusta, segura y eficiente. Esperamos que disfrutes de estas mejoras en tu experiencia con Getty.

The Getty Team
