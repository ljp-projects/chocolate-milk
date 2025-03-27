const Template = (...args) => {
    const self = {
        args
    }

    return self
}

const Instruction = {
    Log(template) {
        const self = {
            template,
            kind: "log",
        }

        return self
    }
}

const langConsole = document.getElementById("langConsole")

const interpret = (instruction) => {
    if (!instruction.kind) {
        return null
    }

    console.log(instruction)

    switch (instruction) {
        case "log":
            langConsole.textContent = instruction.template.args.join("")
    }
}

interpret(
    Instruction.Log(Template("Hello, World!"))
)