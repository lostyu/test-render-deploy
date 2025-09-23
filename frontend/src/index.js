document.addEventListener('DOMContentLoaded', function () {
  const app = document.getElementById('app')

  app.innerHTML = `
    <div style="text-align: center; padding: 2rem;">
      <h1>🎉 Hello1010 Learn Render Deployment</h1>
      <p>This is a simple full-stack app for learning GitHub Actions + Render</p>
      <button id="fetch-data" style="padding: 10px 20px; margin: 10px;">
        Call Backend API
      </button>
      <div id="result" style="margin-top: 20px;"></div>
    </div>
  `

  const button = document.getElementById('fetch-data')
  const resultDiv = document.getElementById('result')

  button.addEventListener('click', async function () {
    try {
      const response = await fetch('/api/hello')
      const data = await response.json()

      resultDiv.innerHTML = `
        <p><strong>Message:</strong> ${data.message}</p>
        <p><strong>Timestamp:</strong> ${data.timestamp}</p>
      `
      resultDiv.style.color = 'green'
    } catch (error) {
      resultDiv.innerHTML = '❌ Failed to fetch data from API'
      resultDiv.style.color = 'red'
    }
  })
})
