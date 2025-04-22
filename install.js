module.exports = async (kernel) => {
  return {
    run: [
      // 1. Клонируем репо в папку app
      {
        method: "shell.run",
        params: {
          message: "git clone https://github.com/Vchitect/VEnhancer.git app"
        }
      },
      // 2. Создаём виртуальное окружение в корне
      {
        method: "shell.run",
        params: {
          message: "python -m venv env"
        }
      },
      // 3. Устанавливаем зависимости из requirements.txt
      {
        method: "shell.run",
        params: {
          venv: "env",
          message: "pip install -r app/requirements.txt"
        }
      },
      // 4. Сообщаем об успешной установке
      {
        method: "notify",
        params: {
          html: "✅ VEnhancer установлен. Перейдите на «Start»."
        }
      }
    ]
  }
}
