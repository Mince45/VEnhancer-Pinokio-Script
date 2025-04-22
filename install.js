// install.js
module.exports = async () => ({
  run: [
    // 1) Клонируем репозиторий в app/
    { method: "shell.run", params: { message: "git clone https://github.com/Vchitect/VEnhancer.git app" } },

    // 2) Создаём venv
    { method: "shell.run", params: { message: "python -m venv app/env" } },

    // 3) Устанавливаем зависимости внутри venv (GPU‑PyTorch и всё остальное)
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          // 3.1) Апгрейд pip
          "env\\Scripts\\python.exe -m pip install --upgrade pip",
          // 3.2) Ставим CUDA11.8‑колёса torch/torchvision/torchaudio
          "env\\Scripts\\python.exe -m pip install torch==2.0.1+cu118 torchvision==0.15.2+cu118 torchaudio==2.0.2+cu118 --index-url https://download.pytorch.org/whl/cu118 --upgrade",
          // 3.3) Ставим остальные библиотеки из requirements.txt
          "env\\Scripts\\python.exe -m pip install -r requirements.txt"
        ]
      }
    },

    // 4) Уведомление об окончании установки
    { method: "notify", params: { html: "✅ Установка завершена. Теперь можно нажать «Start (CLI)» или «Start (Gradio)»." } }
  ]
})
