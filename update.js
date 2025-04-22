module.exports = {
  run: [
    // 1. Обновляем код
    {
      method: "shell.run",
      params: {
        message: "cd app && git pull"
      }
    },
    // 2. (Опционально) убеждаемся, что зависимости в порядке
    {
      method: "shell.run",
      params: {
        venv: "env",
        message: "pip install -r app/requirements.txt"
      }
    },
    // 3. Уведомляем
    {
      method: "notify",
      params: {
        html: "🔄 VEnhancer обновлён. Запустите «Start» заново."
      }
    }
  ]
}
