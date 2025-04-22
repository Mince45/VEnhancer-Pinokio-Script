// install.js
module.exports = async (kernel) => {
  return {
    run: [
      {
        method: "notify",
        params: { html: "🚀 Начинаем установку VEnhancer..." }
      },
      {
        method: "shell.run",
        params: {
          message: "git clone https://github.com/Vchitect/VEnhancer.git app"
        }
      },
      {
        method: "shell.run",
        params: {
          message: "python -m venv env"
        }
      },
      {
        method: "shell.run",
        params: {
          venv: "env",
          message: "pip install -r app/requirements.txt"
        }
      },
      {
        method: "notify",
        params: { html: "✅ Установка завершена. Перейдите на вкладку «Start»." }
      }
    ]
  }
}
