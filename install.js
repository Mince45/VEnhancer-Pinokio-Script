// install.js — создаём окружение и ставим все зависимости
module.exports = async () => ({
  run: [
    // 1) Клонируем репозиторий в папку app
    {
      method: "shell.run",
      params: {
        message: "git clone https://github.com/Vchitect/VEnhancer.git app"
      }
    },
    // 2) Создаём виртуальное окружение внутри app/env
    {
      method: "shell.run",
      params: {
        message: "python -m venv app/env"
      }
    },
    // 3) Устанавливаем зависимости внутри окружения
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          // Активируем env и апгрейдим pip
          ".\\env\\Scripts\\activate && python -m pip install --upgrade pip",
          // Ставим PyTorch нужной версии
          "pip install torch==2.0.1 torchvision==0.15.2 torchaudio==2.0.2",
          // Ставим всё остальное из requirements.txt
          "pip install -r requirements.txt"
        ]
      }
    },
    // 4) Уведомление об окончании
    {
      method: "notify",
      params: {
        html: "✅ Установка завершена. Жмите «Start»."
      }
    }
  ]
})
