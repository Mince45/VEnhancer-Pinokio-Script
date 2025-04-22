// start.js
module.exports = async (kernel) => {
  return {
    daemon: true,
    run: [
      {
        method: "shell.run",
        params: {
          venv: "app/env",
          path: "app",
          message: "python gradio_app.py --input \"{{input}}\" --output \"{{output}}\" --scale 2 --fps 60"
        }
      }
    ]
  }
}
