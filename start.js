module.exports = async (kernel) => {
  return {
    daemon: true,
    run: [
      // Просто активируем уже готовую env и запускаем CLI-скрипт
      {
        method: "shell.run",
        params: {
          venv: "env",
          path: "app",
          message: [
            "python enhance_a_video.py --input \"{{input}}\" --output \"{{output}}\" --scale 2 --fps 60"
          ]
        }
      }
    ]
  }
}
