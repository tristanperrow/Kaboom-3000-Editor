import kaboom from "kaboom"
import editorScene from "../editor/editorScene"

// initialize context
kaboom({
	width: 1280,
	height: 720,
	background: [238, 238, 238],
})

// load assets
loadSprite("bean", "sprites/bean.png")

// scenes
scene("editor", editorScene)

// go
go("editor")