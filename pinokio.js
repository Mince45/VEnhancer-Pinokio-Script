const path = require('path')
module.exports = {
  version: "1.5",
  title: "VEnhancer",
  description: "AI‑ускоритель видео на базе VChitect/VEnhancer",
  icon: "icon.png",
  menu: async (kernel) => {
    const installing = await kernel.running(__dirname, "install.js")
    const installed = await kernel.exists(__dirname, "app", "env")
    const running = await kernel.running(__dirname, "start.js")
    if (installing) {
      return [ { title: "Installing…", selected: true, action: "install" } ]
    } else if (!installed) {
      return [ { title: "Install", selected: true, action: "install" } ]
    } else {
      return [
        { title: "Start", selected: !running, action: "start" },
        { title: "Stop", selected: running, action: "stop" },
        { title: "Update", selected: false, action: "update" }
      ]
    }
  }
}