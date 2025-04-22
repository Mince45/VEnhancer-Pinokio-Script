// start.js — запуск enhance_a_video.py (CLI‑режим)
module.exports = async () => ({
  run: [
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          // Активируем venv и сразу вызываем через python -m pip
          "env\\Scripts\\activate && " +
          "python enhance_a_video.py " +
            "--input_path \"{{input}}\" " +
            "--save_dir   \"{{output}}\" " +
            "--up_scale   {{scale}} " +
            "--target_fps {{fps}}"
        ]
      }
    }
  ]
})
