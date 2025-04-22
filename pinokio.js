const path = require('path')

module.exports = {
  version: "1.5",
  title: "VEnhancer",
  description: "AI‑ускоритель видео на базе VChitect/VEnhancer",
  icon: "icon.png",

  inputs: [
    { name: "input",  label: "Исходное видео",  type: "file"   },
    { name: "output", label: "Папка результата", type: "folder" }
  ],

  menu: async (kernel) => {
    const installing = await kernel.running(__dirname, "install.js")
    const installed  = await kernel.exists(__dirname, "app", "env")
    const running    = await kernel.running(__dirname, "start.js")

    if (installing) {
      return [{ icon: "fa-solid fa-plug",      text: "Installing…", href: "install.js" }]
    } else if (!installed) {
      return [{ icon: "fa-solid fa-circle-plus", text: "Install",     href: "install.js" }]
    } else {
      return [
        { icon: "fa-solid fa-play", text: "Start",  href: "start.js"  },
        { icon: "fa-solid fa-sync", text: "Update", href: "update.js" }
      ]
    }
  },

  install: "install.js",
  start:   "start.js",
  update:  "update.js",
  defaultRun: "start"
}
