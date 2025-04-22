const path = require('path')

module.exports = {
  version: "1.5",
  title: "VEnhancer",
  description: "AI‑ускоритель видео на базе VChitect/VEnhancer",
  icon: "icon.png",

  // Определяем пункты меню
  menu: async (kernel) => {
    const installing = await kernel.running(__dirname, "install.js")
    const installed  = await kernel.exists(__dirname, "env")
    const running    = await kernel.running(__dirname, "start.js")

    if (installing) {
      return [{
        icon: "fa-solid fa-plug",
        text: "Installing",
        href: "install.js"
      }]
    }
    if (!installed) {
      return [{
        icon: "fa-solid fa-circle-plus",
        text: "Install",
        href: "install.js"
      }]
    }

    return [
      {
        icon: "fa-solid fa-play",
        text: "Start",
        href: "start.js"
      },
      {
        icon: "fa-solid fa-sync",
        text: "Update",
        href: "update.js"
      }
    ]
  },

  // Определяем поля ввода для Start
  inputs: [
    {
      name: "input",
      label: "Исходное видео",
      type: "file"
    },
    {
      name: "output",
      label: "Папка результата",
      type: "folder"
    }
  ]
}
