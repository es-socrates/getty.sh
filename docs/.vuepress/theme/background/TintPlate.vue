<script setup lang="ts">
import { computed, onMounted, onUnmounted, useTemplateRef } from "vue";
import { useDarkMode } from "vuepress-theme-plume/client";

declare const __VUEPRESS_DEV__: boolean;

type TintChannel = { value: number; offset: number };
interface TintPlate {
  r: TintChannel;
  g: TintChannel;
  b: TintChannel;
}

const props = defineProps<
  {
    rgb?: string | number;
  } & Partial<TintPlate> & { light?: TintPlate; dark?: TintPlate }
>();

const config = computed(() => {
  const { rgb, light, dark, r, g, b } = props;
  if (rgb !== undefined && rgb !== null) {
    return rgb;
  }
  if (light || dark) {
    return {
      ...(light ? { light } : {}),
      ...(dark ? { dark } : {}),
    };
  }
  if (r !== undefined || g !== undefined || b !== undefined) {
    const channels: Partial<TintPlate> = {};
    if (r !== undefined) channels.r = r;
    if (g !== undefined) channels.g = g;
    if (b !== undefined) channels.b = b;
    return channels;
  }
  return null;
});

const lightTint: TintPlate = {
  r: { value: 200, offset: 36 },
  g: { value: 200, offset: 36 },
  b: { value: 200, offset: 36 },
};

const darkTint: TintPlate = {
  r: { value: 32, offset: 36 },
  g: { value: 32, offset: 36 },
  b: { value: 32, offset: 36 },
};

const channelKeys = ["r", "g", "b"] as const;

type ModeConfig = {
  light?: Partial<TintPlate> | string | number;
  dark?: Partial<TintPlate> | string | number;
};
type PlateConfig = null | string | number | Partial<TintPlate> | ModeConfig;

const isTintChannels = (config: PlateConfig): config is Partial<TintPlate> =>
  typeof config === "object" &&
  config !== null &&
  ("r" in config || "g" in config || "b" in config);

const isModeConfig = (config: PlateConfig): config is ModeConfig =>
  typeof config === "object" &&
  config !== null &&
  ("light" in config || "dark" in config);

const toPlate = (plate: number | string) => {
  if (
    typeof plate === "number" ||
    Number(plate) === Number.parseInt(String(plate), 10)
  ) {
    return [plate, plate, plate].map((value) => Number(value));
  }
  return typeof plate === "string" && plate.includes(",")
    ? plate
        .replace(/\s/g, "")
        .split(",")
        .map((value) => Number(value))
    : [];
};

const toTint = ([r, g, b]: number[]): TintPlate => ({
  r: toColor(r),
  g: toColor(g),
  b: toColor(b),
});

const toColor = (num: number): TintChannel => {
  const offset = 256 - num;
  return { value: num, offset: offset > 64 ? 64 : offset };
};

const normalizeTint = (
  tint: Partial<TintPlate> | undefined,
  fallback: TintPlate
): TintPlate =>
  channelKeys.reduce<TintPlate>((acc, key) => {
    const channel = tint?.[key] ?? fallback[key];
    acc[key] = {
      value: Number(channel?.value ?? fallback[key].value),
      offset: Number(channel?.offset ?? fallback[key].offset),
    };
    return acc;
  }, {} as TintPlate);

const canvas = useTemplateRef<HTMLCanvasElement>("canvas");
const isDark = useDarkMode();

let ctx: CanvasRenderingContext2D | null = null;
let t = 0;
let timer = 0;

const plate = computed<TintPlate>(() => {
  const defaultTint = isDark.value ? darkTint : lightTint;
  const value = config.value as PlateConfig;

  if (value === null) {
    return normalizeTint(undefined, defaultTint);
  }

  if (typeof value === "string" || typeof value === "number") {
    if (isDark.value) return normalizeTint(undefined, darkTint);
    const values = toPlate(value);
    return values.length === 3
      ? toTint(values)
      : normalizeTint(undefined, lightTint);
  }

  if (isTintChannels(value)) {
    if (isDark.value) return normalizeTint(undefined, darkTint);
    return normalizeTint(value, lightTint);
  }

  if (isModeConfig(value)) {
    const preferred = isDark.value ? value.dark : value.light;
    const fallback = isDark.value ? value.light : value.dark;
    const target = preferred ?? fallback;

    if (target === undefined) {
      return normalizeTint(undefined, defaultTint);
    }

    if (typeof target === "string" || typeof target === "number") {
      const values = toPlate(target);
      return values.length === 3
        ? toTint(values)
        : normalizeTint(undefined, defaultTint);
    }

    return normalizeTint(target as Partial<TintPlate>, defaultTint);
  }

  return normalizeTint(undefined, defaultTint);
});

onMounted(() => {
  if (canvas.value) {
    ctx = canvas.value.getContext("2d");
    if (!ctx) return;
    if (timer) window.cancelAnimationFrame(timer);
    if (typeof __VUEPRESS_DEV__ !== "undefined" && __VUEPRESS_DEV__) {
      console.debug("[TintPlate] override active", config.value);
    }
    run();
  }
});

onUnmounted(() => {
  if (timer) window.cancelAnimationFrame(timer);
});

function run() {
  for (let x = 0; x <= 35; x++) {
    for (let y = 0; y <= 35; y++) {
      col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
    }
  }
  t += 0.02;
  timer = window.requestAnimationFrame(run);
}

function col(x: number, y: number, r: number, g: number, b: number) {
  if (!ctx) return;
  ctx.fillStyle = `rgb(${r},${g},${b})`;
  ctx.fillRect(x, y, 1, 1);
}

function R(x: number, y: number, time: number) {
  const { r } = plate.value;
  return Math.floor(
    r.value + r.offset * Math.cos((x * x - y * y) / 300 + time)
  );
}

function G(x: number, y: number, time: number) {
  const { g } = plate.value;
  return Math.floor(
    g.value +
      g.offset *
        Math.sin(
          (x * x * Math.cos(time / 4) + y * y * Math.sin(time / 3)) / 300
        )
  );
}

function B(x: number, y: number, time: number) {
  const { b } = plate.value;
  return Math.floor(
    b.value +
      b.offset *
        Math.sin(
          5 * Math.sin(time / 9) +
            ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
        )
  );
}
</script>

<template>
  <div class="bg-filter">
    <canvas ref="canvas" width="32" height="32" />
  </div>
</template>

<style scoped>
.bg-filter {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  transform: translate3d(0, 0, 0);
}

.vp-home-hero.full.once .bg-filter {
  height: calc(100% + var(--vp-footer-height, 0px));
}

@property --vp-home-hero-bg-filter {
  inherits: false;
  initial-value: #fff;
  syntax: "<color>";
}

.bg-filter::after {
  --vp-home-hero-bg-filter: var(--vp-c-bg);

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  background: linear-gradient(
    to bottom,
    var(--vp-home-hero-bg-filter) 0,
    transparent 45%,
    transparent 55%,
    var(--vp-home-hero-bg-filter) 140%
  );
  transition: --vp-home-hero-bg-filter var(--vp-t-color);
}

.bg-filter canvas {
  width: 100%;
  height: 100%;
}
</style>
