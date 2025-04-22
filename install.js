module.exports = async (kernel) => {
  return {
    run: [
      // 1. Уведомляем
      {
        method: "notify",
        params: { html: "🚀 Начинаем установку VEnhancer..." }
      },
      // 2. Клонируем исходники
      {
        method: "shell.run",
        params: {
          message: "git clone https://github.com/Vchitect/VEnhancer.git app"
        }
      },
      // 3. Создаём виртуальную среду в корне (env)
      {
        method: "shell.run",
        params: {
          message: "python -m venv env"
        }
      },
      // 4. Ставим все зависимости внутри env
      {
        method: "shell.run",
        params: {
          venv: "env",
          message: "pip install -r app/requirements.txt"
        }
      },
      // 5. Готово!
      {
        method: "notify",
        params: {
          html: "✅ Установка завершена. Перейдите на вкладку «Start»."
        }
      }
    ]
  }
}
