// start_gradio.js — web‑UI на базе gradio_app.py
module.exports = async () => ({
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "env\\Scripts\\activate && python gradio_app.py"
        ]
      }
    }
  ]
})
