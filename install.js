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
          "env\\Scripts\\python.exe -m pip install --upgrade pip",
          // Ставим GPU‑колёса PyTorch (CUDA 11.8)
          "env\\Scripts\\python.exe -m pip install torch==2.0.1+cu118 torchvision==0.15.2+cu118 torchaudio==2.0.2+cu118 --index-url https://download.pytorch.org/whl/cu118 --upgrade",
          // Все остальные зависимости
          "env\\Scripts\\python.exe -m pip install -r requirements.txt",
          // убираем pydantic-core, фиксируем pydantic
          "env\\Scripts\\python.exe -m pip install pydantic==2.10.6"
          "env\\Scripts\\python.exe -m pip install fastapi==0.112.4",
          "env\\Scripts\\python.exe -m pip install --upgrade gradio",
        ]
      }
    },
    {
      method: "notify",
      params: { html: "✅ Установка завершена. Нажмите «Start (CLI)» или «Start (Gradio)»." }
    }
  ]
})