const path = require('path')
module.exports = {
  version: "1.0",
  title: "VEnhancer",
  description: "AI‑ускоритель видео на базе VChitect/VEnhancer",
  icon: "icon.png",
  menu: async (kernel) => {
    let installing = await kernel.running(__dirname, "install.js")
    let installed = await kernel.exists(__dirname, "env")
    let running = await kernel.running(__dirname, "start.js")
    if (installing) {
      return [{ title: "Installing…", selected: true, action: "install" }]
    } else if (!installed) {
      return [{ title: "Install", selected: true, action: "install" }]
    } else {
      return [
        { title: "Start",  selected: !running, action: "start" },
        { title: "Stop",   selected:  running, action: "stop"  },
        { title: "Update", selected:  false,   action: "update"}
      ]
    }
  }
}
