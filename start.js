// start.js
//module.exports = async () => ({
//  daemon: true,
//  run: [
//    {
//      method: "shell.run",
//      params: {
//        path: "app/env",   // указываем, где находится Scripts
//        message: [
  // ① активируем venv
//  ".\\Scripts\\activate && " +
  // ② гарантируем, что easydict установлен (ставится 1 раз, потом пропускается)
//  "python -m pip install --quiet easydict && " +
//  // ③ запускаем сам скрипт
//  ".\\Scripts\\activate && " +
//  "python -m pip install --quiet easydict huggingface-hub && " +
//  "python ..\\enhance_a_video.py --input \"{{input}}\" --output \"{{output}}\" --scale 2 --fps 60"
//]
//      }
//    }
//  ]
//})


// start.js
//
// Запуск обычного CLI‑скрипта «файл‑в‑файл».
// Рабочая папка — app (в ней лежат и env/, и enhance_a_video.py).
// Демо ориентировано на Windows, но оставлено условие для *nix.

module.exports = async () => ({
  run: [
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          // Windows
          "{{os.platform() === 'win32' ? " +
          // 1) активация venv
          "env\\\\Scripts\\\\activate && " +
          // 2) запуск скрипта
          "python enhance_a_video.py --input \\\"{{input}}\\\" --output \\\"{{output}}\\\" --scale 2 --fps 60" +
          // *nix
          " : " +
          "source env/bin/activate && " +
          "python enhance_a_video.py --input \\\"{{input}}\\\" --output \\\"{{output}}\\\" --scale 2 --fps 60" +
          "}}"
        ]
      }
    }
  ]
})
