import kaboom from "kaboom"
import editorScene from "../editor/editorScene"

// initialize context
const k = kaboom({
	width: 640,
	height: 480,
	background: [119, 67, 96],
	canvas: document.getElementById("kCan"),
})

// load assets
loadSprite("bean", "sprites/bean.png")

// scenes
scene("editor", editorScene)

// go
go("editor", k)