import GridClass from "./plugins/grid"

export default function editorScene() {

	// UI around editor

	var ASB = document.getElementById("add-square-btn")
	ASB.onclick = () => {
		add([
			pos(center()),
			anchor("center"),
			rect(16, 16),
			color(255,255,255),
			area(),
			rotate(),
			scale(),
		])
	}

	// editor scene

	var editMode = "translate"
	var selectedObject = null

	onKeyPress("1", () => {
		editMode = "translate"
	})

	onKeyPress("2", () => {
		editMode = "rotate"
	})

	onKeyPress("3", () => {
		editMode = "scale"
	})

	onClick("area", (obj) => {
		selectedObject = obj;
		
		displayObjectDetails(obj)

		// display  
	})

	// plug in editor tools
	plug(GridClass);
		
	// debug inspector
	debug.inspect = true
	
	onDraw(() => {
		if (!debug.inspect)
			return
	})
	
}

function displayObjectDetails(obj) {
	for (const comp in obj.inspect()) {
		var objComp = obj.c(comp)
		console.log(comp)
		console.log(objComp)
		for (const compVar in objComp) {
			if (typeof objComp[compVar] == "function" || compVar == "cleanups") {
				continue;
			}
			console.log("\t- " + compVar + " -> " + objComp[compVar])
			switch (typeof objComp[compVar]) {
				case "boolean":
					// display boolean thing
					break;
				case "number":
					// display number thing
					break;
				case "bigint":
					// display bigint thing
					break;
				case "string":
					// display string thing
					break;
				case "symbol":
					// display symbol thing
					break;
				default:
				case "object":
					// serialize object (if possible)
					
					break;
			}
		}
		console.log("---------------")
	}
}