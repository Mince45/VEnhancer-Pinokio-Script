// install.js — клонирование, создание venv и установка всех зависимостей
module.exports = async () => ({
  run: [
    // 1) Клонируем репозиторий
    {
      method: "shell.run",
      params: { message: "git clone https://github.com/Vchitect/VEnhancer.git app" }
    },
    // 2) Создаём виртуальное окружение
    {
      method: "shell.run",
      params: { message: "python -m venv app/env" }
    },
    // 3) Устанавливаем зависимости внутри app/env без активации
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          // 3.1) Обновляем pip через python -m pip
          "env\\Scripts\\python.exe -m pip install --upgrade pip",
          // 3.2) Ставим PyTorch нужной версии
          "env\\Scripts\\python.exe -m pip install torch==2.0.1 torchvision==0.15.2 torchaudio==2.0.2",
          // 3.3) Ставим всё остальное из requirements.txt
          "env\\Scripts\\python.exe -m pip install -r requirements.txt"
        ]
      }
    },
    // 4) Уведомление об успешной установке
    {
      method: "notify",
      params: {
        html: "✅ Установка завершена. Теперь можно нажать «Start (CLI)» или «Start (Gradio)»."
      }
    }
  ]
})
