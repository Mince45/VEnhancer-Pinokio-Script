// install.js   — создаём окружение там, где Pinokio потом его ищет
//module.exports = async () => ({
//  run: [
//    { method: "shell.run", params: { message: "git clone https://github.com/Vchitect/VEnhancer.git app" } },
//    { method: "shell.run", params: { message: "python -m venv app/env" } },
//    { method: "shell.run", params: { venv: "app/env", path: "app", message: "pip install -r requirements.txt" } },
//    { method: "notify",    params: { html: "✅ Установка завершена. Жмите «Start»." } }
//  ]
//})

module.exports = async () => ({
  run: [
    {
      method: "shell.run",
      params: {
        // работаем в корне app
        path: "app",
        message: [
          // 1) создаём venv (у вас это уже есть)
          "..\\env\\Scripts\\python.exe -m pip install --upgrade pip",
          // 2) базовый PyTorch как в оригинальной инструкции
          "..\\env\\Scripts\\pip.exe install torch==2.0.1 torchvision==0.15.2 torchaudio==2.0.2",
          // 3) все остальные зависимости проекта
          "..\\env\\Scripts\\pip.exe install -r requirements.txt"
        ]
      }
    }
  ]
})
