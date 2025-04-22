module.exports = async (kernel) => {
  return {
    // не daemon — сразу отработает и закроется
    run: [
      {
        method: "shell.run",
        params: {
          venv: "env",
          // запускаем главный скрипт из папки app
          message: "python app/main.py --input {{input}} --output {{output}} --scale 2 --fps 60"
        }
      }
    ]
  }
}
