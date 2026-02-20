const delay = (ms: number) => new Promise(r => setTimeout(r, ms))

export async function typewriter(
  prompt: HTMLElement,
  history: HTMLElement,
  lines: (string | { output: string })[]
) {
  async function type(text: string) {
    prompt.textContent = ""
    for (const char of text) {
      prompt.textContent += char
      await delay(100)
    }
  }

  function appendLine(text: string, isCommand = false) {
    const div = document.createElement("div")
    div.innerHTML = isCommand ? `<span class="text-green-500">❯</span> ${text}` : text
    history.appendChild(div)
  }

  while (true) {
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      if (typeof line === "object" || typeof line !== "string") continue

      await type(line)
      await delay(1000)

      appendLine(prompt.textContent!, true)
      prompt.textContent = ""

      const next = lines[i + 1]
      if (next && typeof next === "object") {
        appendLine(next.output)
        i++
      }

      await delay(500)
    }

    await type("clear")
    await delay(2000)
    history.innerHTML = ""
    prompt.textContent = ""

    await delay(3000)
  }
}