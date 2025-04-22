// start_gradio.js
//
// Запуск Gradio‑демо (gradio_app.py).
// Процесс должен оставаться в фоне → daemon: true.

module.exports = async () => ({
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          // Windows
          "{{os.platform() === 'win32' ? " +
          "env\\\\Scripts\\\\activate && python gradio_app.py" +
          // *nix
          " : " +
          "source env/bin/activate && python gradio_app.py" +
          "}}"
        ]
      }
    }
  ]
})
