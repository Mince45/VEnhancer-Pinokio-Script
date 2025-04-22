// pinokio.js
// ────────────────────────────────────────────────────────────────────────────
const path = require("path")

module.exports = {
  version:      "1.6",
  title:        "VEnhancer",
  description:  "AI‑ускоритель видео на базе VChitect/VEnhancer",
  icon:         "icon.png",

  // Параметры, которые Pinokio передаст в start.js
  inputs: [
    { name: "input",  label: "Исходное видео",  type: "file"   },
    { name: "output", label: "Папка результата", type: "folder" }
  ],

  // Главное меню Pinokio
  menu: async (kernel) => {
    const installing   = await kernel.running(__dirname, "install.js")
    const installedEnv = await kernel.exists (__dirname, "app", "env")

    // Запущенные процессы
    const runningCLI    = await kernel.running(__dirname, "start.js")
    const runningGradio = await kernel.running(__dirname, "start_gradio.js")

    // 1. Идёт установка
    if (installing) {
      return [{ icon: "fa-solid fa-plug", text: "Installing…", href: "install.js" }]
    }

    // 2. Среды ещё нет — предлагается установка
    if (!installedEnv) {
      return [{ icon: "fa-solid fa-circle-plus", text: "Install", href: "install.js" }]
    }

    // 3. Всё установлено — показываем варианты запуска + update
    return [
      { icon: "fa-solid fa-play",     text: runningCLI    ? "Running (CLI)"    : "Start (CLI)",    href: "start.js"         },
      { icon: "fa-solid fa-display",  text: runningGradio ? "Running (Gradio)" : "Start (Gradio)", href: "start_gradio.js"  },
      { icon: "fa-solid fa-sync",     text: "Update",                                       href: "update.js"        }
    ]
  },

  // Короткие алиасы для кнопок Pinokio
  install:    "install.js",
  start:      "start.js",        // «Запуск по умолчанию» (если нажать ▶️ в шапке)
  update:     "update.js",
  defaultRun: "start"
}
