// install.js   — создаём окружение там, где Pinokio потом его ищет
module.exports = async () => ({
  run: [
    { method: "shell.run", params: { message: "git clone https://github.com/Vchitect/VEnhancer.git app" } },
    { method: "shell.run", params: { message: "python -m venv app/env" } },
    { method: "shell.run", params: { venv: "app/env", path: "app", message: "pip install -r requirements.txt" } },
    { method: "notify",    params: { html: "✅ Установка завершена. Жмите «Start»." } }
  ]
})
