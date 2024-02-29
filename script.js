const levels = [
  {
    name: "Front-end",
    projects: [
      {
        name: "FizzBuzz (JavaScript)",
        deployable: false,
      },
      {
        name: "Dynamite",
        deployable: false,
      },
      {
        name: "Email Extraction",
        deployable: false,
      },
      {
        name: "Bus Board",
        deployable: true,
      },
      {
        name: "Chessington",
        deployable: false,
      },
      {
        name: "Gilded Rose",
        deployable: false,
      },
      {
        name: "MyFace (MVP)",
        deployable: false,
      },
      {
        name: "Photo Viewer",
        deployable: true,
      },
      {
        name: "MyFace (React)",
        deployable: false,
      },
      {
        name: "Pokemon Encyclopedia",
        deployable: true,
      },
      {
        name: "Mars Mission",
        deployable: true,
      },
    ]
  },
  {
    name: "Back-end",
    projects: [
      {
        name: "FizzBuzz (C#)",
        deployable: false,
      },
      {
        name: "Warehouse Workshop",
        deployable: false,
      },
      {
        name: "Support Bank",
        deployable: false,
      },
      {
        name: "Bookish",
        deployable: false,
      },
      {
        name: "MyFace (Accounts)",
        deployable: false,
      },
      {
        name: "ShipIt",
        deployable: false,
      },
      {
        name: "Zoo Management",
        deployable: false,
      },
    ],
  },
  {
    name: "Full-stack",
    projects: [
      {
        name: "Whale Spotting",
        deployable: true,
      },
    ]
  },
]

function createProject(project, levelContainer)
{
  const projectKey = project.name.replace(" ", "-")
  const projectContainer = document.createElement("div")
  projectContainer.className = "project-container"
  projectContainer.setAttribute("data-aos", "fade-up")
  const projectNameParagraph = document.createElement("p")
  projectNameParagraph.className = "project-name-paragraph"
  projectNameParagraph.textContent = project.name
  const starsContainer = document.createElement("div")
  starsContainer.className = "stars-container"
  for (let starIndex = 1; starIndex <= 3; starIndex++) {
    const starToggler = document.createElement("input")
    starToggler.className = "star-toggler"
    starToggler.type = "radio"
    starToggler.name = projectKey
    starToggler.value = starIndex
    starToggler.id = `${projectKey}-${starIndex}`
    starToggler.ariaLabel = `${starIndex} star${starIndex === 1 ? "" : "s"}`
    const star = document.createElement("label")
    star.className = "star"
    star.htmlFor = `${projectKey}-${starIndex}`
    star.textContent = "★"
    starsContainer.appendChild(starToggler)
    starsContainer.appendChild(star)
  }
  const rocketContainer = document.createElement("div")
  const rocketToggler = document.createElement("input")
  rocketToggler.className = "rocket-toggler"
  rocketToggler.type = "checkbox"
  rocketToggler.id = `${projectKey}-rocket`
  const rocket = document.createElement("label")
  rocket.className = "rocket"
  rocket.htmlFor = `${projectKey}-rocket`
  rocket.textContent = "🚀"
  rocketContainer.appendChild(rocketToggler)
  rocketContainer.appendChild(rocket)
  const resetButton = document.createElement("button")
  resetButton.textContent = "Reset"
  resetButton.className = "reset-button"
  resetButton.addEventListener("click", function() {
    starsContainer.childNodes.forEach((starToggler) => {
      starToggler.checked = false
    })
    rocketToggler.checked = false
  })
  projectContainer.appendChild(projectNameParagraph)
  projectContainer.appendChild(starsContainer)
  if (project.deployable) {
    projectContainer.appendChild(rocketContainer)
  }
  projectContainer.appendChild(resetButton)
  levelContainer.appendChild(projectContainer)
}

function createLevel(level) {
  const levelContainer = document.createElement("section")
  level.projects.forEach((project) => {
    createProject(project, levelContainer)
  })
  const levelDividerContainer = document.createElement("div")
  levelDividerContainer.className = "level-divider-container"
  levelDividerContainer.setAttribute("data-aos", "fade-up")
  const levelDividerLeft = document.createElement("hr")
  levelDividerLeft.className = "level-divider"
  const levelHeading = document.createElement("h2")
  levelHeading.className = "level-heading"
  const levelDividerRight = document.createElement("hr")
  levelDividerRight.className = "level-divider"
  levelHeading.textContent = level.name
  levelDividerContainer.appendChild(levelDividerLeft)
  levelDividerContainer.appendChild(levelHeading)
  levelDividerContainer.appendChild(levelDividerRight)
  document.body.appendChild(levelDividerContainer)
  document.body.appendChild(levelContainer)
}

levels.forEach(createLevel)
