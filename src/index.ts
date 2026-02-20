import { typewriter } from "./components/typewriter"

const prompt = document.querySelector<HTMLElement>("[data-typewriter]")
const history = document.querySelector<HTMLElement>("[data-history]")

if (prompt && history) {
  typewriter(prompt, history, [
    "whoami",
    { output: "James Malkin" },
    "echo $LINKEDIN",
    { output: "linkedin.com/in/j-malkin/" },
    "git add .",
    "git commit -m 'feat: portfolio'",
    { output: "[main abc1234] feat: portfolio" },
    "git push",
    { output: "To github.com:james-malkin/james-malkin.github.io" },
  ])
}