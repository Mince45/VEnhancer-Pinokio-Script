// install.js — клонирование, создание venv и установка всех зависимостей
module.exports = async () => ({
  run: [
    // 1) Клонируем репо в папку app
    {
      method: "shell.run",
      params: {
        message: "git clone https://github.com/Vchitect/VEnhancer.git app"
      }
    },
    // 2) Создаём виртуальное окружение
    {
      method: "shell.run",
      params: {
        message: "python -m venv app/env"
      }
    },
    // 3) Устанавливаем зависимости ВСЕ сразу, напрямую через pip.exe из venv
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          // 3.1) Обновляем pip внутри env
          "env\\Scripts\\pip.exe install --upgrade pip",
          // 3.2) Ставим точные версии PyTorch как в официальной инструкции
          "env\\Scripts\\pip.exe install torch==2.0.1 torchvision==0.15.2 torchaudio==2.0.2",
          // 3.3) Ставим всё остальное из requirements.txt (там уже есть easydict, huggingface_hub и т.д.) :contentReference[oaicite:1]{index=1}
          "env\\Scripts\\pip.exe install -r requirements.txt"
        ]
      }
    },
    // 4) Уведомление об успешной установке
    {
      method: "notify",
      params: {
        html: "✅ Установка завершена. Теперь нажмите «Start (CLI)» или «Start (Gradio)»."
      }
    }
  ]
})
