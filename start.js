// start.js  — используем ту же среду, Pinokio больше не создаёт новую
module.exports = async () => ({
  run: [
    {
      method: "shell.run",
      params: {
        venv: "app/env",
        path: "app",
        message: 'python enhance_a_video.py --input "{{input}}" --output "{{output}}" --scale 2 --fps 60'
      }
    }
  ]
})
