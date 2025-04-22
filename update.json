module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        path: "app",
        message: "git pull"
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "app/env",
        message: "pip install -r app/requirements.txt"
      }
    },
    {
      method: "notify",
      params: {
        html: "🔄 VEnhancer обновлён. Нажмите \"Start\" для перезапуска."
      }
    }
  ]
}
