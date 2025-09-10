---
title: getty v1.0.9
date: 2025-09-9T00:00:00.000Z
permalink: /es/blog/update.1.0.9/
createTime: 2025/09/9 22:00
cover: https://thumbs.odycdn.com/53aff70136e49dfd88c55d57a1963665.webp
coverStyle:
  layout: left
  width: 200
  compact: true
---

## ==λ v1.0.9:== Wubba Lubba Dub Dub!

Una nueva variante de getty ha llegado, creada para que los streamers gestionen sus directos en Odysee de forma profesional, combinando alertas, widgets y herramientas en una única aplicación.

**A continuación tienes una versión más estructurada y ampliada de nuestra última versión.**

### 1. Corrección del widget de notificaciones de propina en USD (AR)

- **Problema anterior:** el widget mostraba valores incorrectos en la notificación al extraer el precio de AR sin un precio de mercado establecido.
- **¿Qué se ha hecho?** se ha ajustado la lógica de cálculo para que el monto reflejado sea exacto, independientemente del exchange utilizado.
- **Resultado:** ahora es posible ver la cantidad real de propinas en dólares, lo que facilita la monitorización de ingresos y la interacción con la audiencia.

::: note

El precio de AR se verifica y actualiza desde varios exchanges, garantizando la mayor precisión posible.

:::

### 2. Refactorización de los temas de chat

- **Nuevo gestor modular:** la arquitectura del chat pasa a un sistema modular que permite añadir, quitar o modificar temas de chat sin afectar al resto. Crea o duplica un tema de chat, modifica colores, cambia tamaño de fuente de cada elemento o el tamaño del avatar.
- **Ventajas para el usuario:** una mayor flexibilidad para personalizar colores, tamaño de fuentes o disposiciones; los cambios se aplican de forma instantánea y sin recargar la fuente de widget.
- **Impacto:** los streamers pueden adaptar la estética del chat a su marca de canal o a la temática del directo con apenas unos clics.

![getty](https://thumbs.odycdn.com/2544e835838972059b9f8ca1c4250b47.webp)

### 3. Mejoras en la visualización de métricas

- **Gráfica de vistas promedio:** ahora es más claro, con líneas de tendencia y puntos de referencia que facilitan la interpretación rápida del rendimiento. Filtra por día, semana, mes o año.
- **Panel de actividades:** se ha migrado a una vista más compacta y visual, mostrando datos clave (pico de espectadores, propinas, tiempo de visualización) al instante.
- **Beneficio:** los streamers obtienen una visión panorámica de su desempeño sin necesidad de navegar entre varias pantallas. También puedes exportar las estadísticas de tu canal con un simple clics.

![getty](https://thumbs.odycdn.com/8e7f6c482f844ffb76ecfb25a534e495.webp)

### 4. Refuerzo de la seguridad

| Medida                                    | ¿Qué es?                                                                                                          | ¿Por qué importa?                                                                                          |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Políticas de Seguridad de Contenido (CSP) | Conjunto de reglas que indican a los navegadores qué fuentes de contenido son confiables.                         | Previene ataques de inyección de scripts (XSS) y protege la integridad de la página.                       |
| Integridad de Subrecursos (SRI)           | Uso de hashes criptográficos para validar que los recursos externos (p.ej., librerías CDN) no han sido alterados. | Garantiza que los archivos descargados sean idénticos a los esperados, evitando manipulaciones maliciosas. |
| Variables CSS en lugar de estilos inline  | Centraliza la definición de estilos en hojas de estilo reutilizables.                                             | Mejora la mantenibilidad del código y reduce la superficie de ataque.                                      |

**Estas capas de protección hacen que getty sea más robusta frente a vulnerabilidades comunes**

### 5. Nueva barra lateral con sugerencias

- **¿De qué se trata?** la barra lateral ahora muestra recomendaciones adaptadas al flujo de configuración en getty (por ejemplo, sugerencias para activar alertas, visitar documentación en Odysee o configuraciones de chat).
- **Objetivo:** reducir el número de clicks necesarios para acceder a funciones relevantes y acelerar la configuración durante el directo.

### 6. Detalles de UI/UX

- **Avatar uniforme:** el avatar del usuario mantiene un tamaño constante en todas las variantes del tema de chat, logrando una apariencia más coherente.
- **Consistencia visual:** se han alineado márgenes, tipografías y espaciados para que cada sección del panel tenga una presentación homogénea.

### 7. ¿Qué significa todo esto para ti?

**Con estas mejoras, getty busca que tu experiencia de streaming sea:**

- **Más fluida:** menos errores y una interfaz que responde rápidamente.
- **Más segura:** protecciones avanzadas contra amenazas externas.
- **Más personalizable:** herramientas de diseño y configuración que se adaptan a tu estilo.
- **Más informativa:** métricas claras y accesibles para tomar decisiones en tiempo real.

### Próximos pasos

1. Actualiza getty a la versión v1.0.9 (desde el repositorio en github o mediante la app de pruebas).
2. Revisa la nueva barra lateral y experimenta con las sugerencias contextuales.
3. Personaliza tu tema de chat usando el gestor modular y observa cómo ocurre la magia.
4. Monitorea tus propinas y métricas con los widgets y la gráfica de vistas promedio.

Disfruta de un directo más dinámico y seguro con getty. Si tienes alguna duda o quieres compartir tu feedback, por favor, comparte tus comentarios a nuestro correo electrónico **hello@getty.sh**.

### **λ**
