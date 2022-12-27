import GridClass from "./plugins/grid"

export default function editorScene() {

	// plug in editor tools
	plug(GridClass);
		
	// debug inspector
	
	
	onDraw(() => {
		if (!debug.inspect)
			return
	})
	
}