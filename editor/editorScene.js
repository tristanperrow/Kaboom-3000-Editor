import GridClass from "./plugins/grid"

var k;

export default function editorScene(kab) {

	// canvas

	k = kab;

	const canvas = document.getElementById("kCan")

	// UI around editor

	var ASB = document.getElementById("add-square-btn")
	ASB.onclick = () => {
		add([
			pos(center()),
			anchor("center"),
			rect(16, 16),
			color(255, 255, 255),
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

	onMousePress(() => {
		var u = false
		for (const o of get("area").reverse()) {
			if (o.isHovering()) {
				console.log(o)
				if (o.is("adjustment_arrow")) {
					// TODO needs to control via onMouseDown
					console.log("arrow clicked!")
					break;
				}
				u = true
				selectedObject = o
				displayObjectDetails(o)
				showAdjustmentArrows(o)
				break
			}
		}
		if (!u)
			selectedObject = null
	})

	// TODO for adjusting game objects
	onMouseDown(() => {
		
	})

	// plug in editor tools
	plug(GridClass);

	// debug inspector
	debug.inspect = true

	onDraw(() => {
		if (!debug.inspect)
			return
		console.log(k.width() + ", " + k.height() + " -> " + center())
	})

}

// object functions

// add functionality for adjusting game objects
function showAdjustmentArrows(obj) {
	if (obj.children.length > 0)
		return;
	// x
	obj.add([
		pos(),
		anchor("right"),
		rect(16, 6),
		area(),
		color(RED),
		opacity(0.25),
		"adjustment_arrow",
	])
}

// TODO Used to inspect elements in the game
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
					// TODO display boolean thing
					break
				case "number":
					// TODO display number thing
					break
				case "bigint":
					// TODO display bigint thing
					break
				case "string":
					// TODO display string thing
					break
				case "symbol":
					// TODO display symbol thing
					break
				default:
				case "object":
					// TODO serialize object (if possible)

					break
			}
		}
		console.log("---------------")
	}
}

// screen functions

// this does not work currently in Kaboom
function setGameResolution(width, height) {
	kCan.width = width
	kCan.height = height
	kCan.style.width = width + "px"
	kCan.style.height = height + "px"
}