module.exports = {
  name: "VEnhancer",
  description: "AI‑ускоритель видео на базе VChitect/VEnhancer",
  icon: "icon.png",
  scriptVersion: "1.5",
  install: "install.json",
  start:   "start.json",
  defaultRun: "start",
  inputs: [
    {
      name: "input",
      label: "Путь к исходному видео",
      type: "file"
    },
    {
      name: "output",
      label: "Папка для результата",
      type: "folder"
    }
  ]
};
