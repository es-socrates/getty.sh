declare module '*.vue' {
  import type { ComponentOptions } from 'vue'

  const comp: ComponentOptions
  export default comp
}

declare module '*.css'

declare module '@internal/home-hero-effects' {
  export const effectComponents: Record<string, unknown>
}
