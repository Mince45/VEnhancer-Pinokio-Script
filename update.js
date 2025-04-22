module.exports = {
  run: [
    // 1. Скачиваем свежие правки
    {
      method: "shell.run",
      params: {
        path: "app",
        message: "git pull"
      }
    },
    // 2. Обновляем зависимости на случай новых
    {
      method: "shell.run",
      params: {
        venv: "env",
        message: "pip install -r app/requirements.txt"
      }
    },
    // 3. Уведомление
    {
      method: "notify",
      params: {
        html: "🔄 VEnhancer обновлён. Нажмите «Start» заново."
      }
    }
  ]
}
