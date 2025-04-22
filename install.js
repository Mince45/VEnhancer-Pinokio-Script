// install.js
module.exports = async (kernel) => {
  return {
    run: [
      {
        method: "notify",
        params: { html: "🚀 Начинаем установку VEnhancer..." }
      },
      // 1) Клонируем репозиторий в папку app
      {
        method: "shell.run",
        params: { message: "git clone https://github.com/Vchitect/VEnhancer.git app" }
      },
      // 2) Создаём виртуальную среду в app/env
      {
        method: "shell.run",
        params: { message: "python -m venv app/env" }
      },
      // 3) Устанавливаем зависимости (включая gradio) в эту среду
      {
        method: "shell.run",
        params: {
          venv: "app/env",
          message: "pip install -r app/requirements.txt"
        }
      },
      {
        method: "notify",
        params: { html: "✅ Зависимости установлены, включая Gradio." }
      }
    ]
  }
}
