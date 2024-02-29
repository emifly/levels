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
        name: "Zoo Management",
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

function createStars(projectKey, parent) {
  const starsContainer = document.createElement("div")
  starsContainer.className = "stars-container"

  for (let starIndex = 1; starIndex <= 3; starIndex++) {
    const starToggler = document.createElement("input")
    starToggler.className = "star-toggler"
    starToggler.type = "radio"
    starToggler.name = projectKey
    starToggler.value = starIndex.toString()
    starToggler.id = `${projectKey}-${starIndex}`
    starToggler.ariaLabel = `${starIndex} star${starIndex === 1 ? "" : "s"}`
    starToggler.checked = localStorage.getItem(`${projectKey}-stars`) === starIndex.toString()
    starToggler.addEventListener("change", function() {
      localStorage.setItem(`${projectKey}-stars`, starToggler.value)
    })
    starsContainer.appendChild(starToggler)

    const star = document.createElement("label")
    star.className = "star"
    star.htmlFor = `${projectKey}-${starIndex}`
    star.textContent = "★"
    starsContainer.appendChild(star)
  }

  parent.appendChild(starsContainer)
}

function createRocket(projectKey, parent) {
  const rocketContainer = document.createElement("div")

  const rocketToggler = document.createElement("input")
  rocketToggler.className = "rocket-toggler"
  rocketToggler.type = "checkbox"
  rocketToggler.id = `${projectKey}-rocket`
  rocketToggler.checked = localStorage.getItem(`${projectKey}-rocket`) === "checked"
  rocketToggler.addEventListener("change", function() {
    localStorage.setItem(`${projectKey}-rocket`, rocketToggler.checked
      ? "checked"
      : "unchecked")
  })
  rocketContainer.appendChild(rocketToggler)

  const rocket = document.createElement("label")
  rocket.className = "rocket"
  rocket.htmlFor = `${projectKey}-rocket`
  rocket.textContent = "🚀"
  rocketContainer.appendChild(rocket)

  parent.appendChild(rocketContainer)
}

function createResetButton(projectKey, parent) {
  const resetButton = document.createElement("button")
  resetButton.textContent = "Reset"
  resetButton.className = "reset-button"
  resetButton.addEventListener("click", function() {
    const starTogglers = parent.querySelectorAll(".star-toggler")
    starTogglers.forEach((starToggler) => {
      starToggler.checked = false
    })
    localStorage.setItem(`${projectKey}-stars`, "0")

    const rocketToggler = parent.querySelector(".rocket-toggler")
    if (rocketToggler) {
      rocketToggler.checked = false
    }
    localStorage.setItem(`${projectKey}-rocket`, "unchecked")
  })
  parent.appendChild(resetButton)
}

function createProject(project, parent) {
  const projectKey = project.name.replace(" ", "-")

  const projectContainer = document.createElement("div")
  projectContainer.className = "project-container"
  projectContainer.setAttribute("data-aos", "fade-up")

  const projectNameParagraph = document.createElement("p")
  projectNameParagraph.className = "project-name-paragraph"
  projectNameParagraph.textContent = project.name
  projectContainer.appendChild(projectNameParagraph)

  createStars(projectKey, projectContainer)

  if (project.deployable) {
    createRocket(projectKey, projectContainer)
  }

  createResetButton(projectKey, projectContainer)

  parent.appendChild(projectContainer)
}

function createLevelDivider(level, parent) {
  const levelDividerContainer = document.createElement("div")
  levelDividerContainer.className = "level-divider-container"
  levelDividerContainer.setAttribute("data-aos", "fade-up")

  const levelDividerLeft = document.createElement("hr")
  levelDividerLeft.className = "level-divider"
  levelDividerContainer.appendChild(levelDividerLeft)
  
  const levelHeading = document.createElement("h2")
  levelHeading.className = "level-heading"
  levelHeading.textContent = level.name
  levelDividerContainer.appendChild(levelHeading)

  const levelDividerRight = document.createElement("hr")
  levelDividerRight.className = "level-divider"
  levelDividerContainer.appendChild(levelDividerRight)

  parent.appendChild(levelDividerContainer)
}

function createLevel(level, parent) {
  const levelContainer = document.createElement("section")

  createLevelDivider(level, parent)

  level.projects.forEach((project) => {
    createProject(project, levelContainer)
  })

  parent.appendChild(levelContainer)
}

levels.forEach(function(level) {
  createLevel(level, document.body)
})
