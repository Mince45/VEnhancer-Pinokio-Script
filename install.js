// install.js — клонирование, создание venv и установка всех зависимостей
module.exports = async () => ({
  run: [
    // 1) Клонируем репозиторий
    { method: "shell.run", params: { message: "git clone https://github.com/Vchitect/VEnhancer.git app" } },
    // 2) Создаём виртуальное окружение
    { method: "shell.run", params: { message: "python -m venv app/env" } },
    // 3) Ставим зависимости через python -m pip — гарантированно в нужное env
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          // обновляем pip
          "env\\Scripts\\python.exe -m pip install --upgrade pip",
          // ставим CUDA‑11.8‑сборку PyTorch (GPU‑акселерация!)
          "env\\Scripts\\python.exe -m pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118 --upgrade",
          // теперь всё остальное из requirements.txt
          "env\\Scripts\\python.exe -m pip install -r requirements.txt"
        ]
      }
    },
    // 4) Уведомление о готовности
    { method: "notify", params: { html: "✅ Установка завершена. Можно нажать «Start (CLI)» или «Start (Gradio)»." } }
  ]
})
