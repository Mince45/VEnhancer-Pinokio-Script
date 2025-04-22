// start_gradio.js — web‑UI на базе gradio_app.py
module.exports = async () => ({
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          // Активируем venv и запускаем Gradio с share‑ссылкой
          "env\\Scripts\\activate && python gradio_app.py --share"
        ]
      }
    }
  ]
})
