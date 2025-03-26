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

const console = document.getElementById("console")

const interpret = (instruction) => {
    if (!instruction.kind) {
        return null
    }

    switch (instruction) {
        case "log":
            console.textContent = instruction.template.args.join("")
    }
}

interpret(
    Instruction.Log(Template("Hello, World!"))
)