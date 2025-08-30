---
title: getty v1.0.3
date: 2025-08-03T00:00:00.000Z
permalink: /es/blog/update.1.0.3/
createTime: 2025/08/03 22:10
cover: https://thumbs.odycdn.com/1b3ec3165cbbd2b7d5fdb2f0f0ebc6c4.webp
coverStyle:
  layout: left
  width: 200
  compact: true
---

## ==λ v1.0.3:== ¡Nuevo! Widget de redes sociales, optimización y más.

En esta actualización, hemos implementado funcionalidades importantes, optimización de código y mejoras en la experiencia de usuario. A continuación, todos los cambios:

==Nueva función:== Widget de redes sociales y validación de billetera.

### Validación de dirección Arweave

Implementamos una validación estricta para las direcciones de billetera Arweave, asegurando que todas las direcciones ingresadas cumplan con el formato correcto antes de guardarse en la configuración.

### Panel de redes sociales mejorado

1. **Soporte completo de i18n:** El panel de redes sociales ahora cuenta con internacionalización total mediante atributos data-i18n y nuevas claves en languages.js.
2. **Backend persistente:** Desarrollamos un nuevo módulo backend con endpoints API para guardar y recuperar la configuración de redes sociales.
3. **Widget OBS:** Creamos un widget/overlay dedicado para OBS que muestra los enlaces sociales en un diseño horizontal atractivo.

### Optimización de compilación y rendimiento

1. **Secuenciación controlada:** Implementamos ==npm-run-all== para gestionar mejor la ejecución paralela/secuencial de scripts.
2. **Minificación CSS:** Integramos PostCSS con cssnano para reducir el tamaño de los archivos CSS.
3. **Ajustes de Tailwind:** Optimizamos la configuración de tailwind.config.js para una compilación más eficiente.
4. **Limpieza de dependencias:** Eliminamos paquetes innecesarios que ya no se usaban, reduciendo el tamaño del proyecto.

### Mejoras de UI y UX: Iconos SVG.

1. Reemplazamos y optimizamos todos los iconos SVG del sistema.
2. Implementamos un sistema personalizado de carga para los iconos.
3. Mejoramos la calidad y consistencia visual de todos los gráficos vectoriales.
4. Solucionamos varios bugs menores que afectaban la experiencia de usuario en casos específicos.
5. Realizamos ajustes de estilo y diseño según comentarios de usuarios.

### Actualización a la versión 1.0.3

Esta versión consolida todas las mejoras mencionadas y sienta una base más sólida para futuras actualizaciones.

==Recomendamos a todos los usuarios actualizar para disfrutar de:==

1. Mayor estabilidad de la aplicación.
2. Mejor rendimiento general.
3. Nuevas funciones sociales.
4. Una experiencia de usuario más pulida.

**¿Ya probaste las nuevas funciones? ¡Cuéntanos tu experiencia!**

### **λ**
