export default class GridObject {

	// should only contain these parameters
	constructor(grid, x, y) {
		this.grid = grid;
		this.x = x;
		this.y = y;

		// add value to gridObject to change object
		this.value = null;
	}

	// value is a kaboom object
	setValue(value) {
		this.destroy();
		this.value = value;
		this.value.pos = this.getWorldPos();
		this.scale = 0.25;
		// trigger grid value changed
	}

	getValue() {
		return this.value;
	}

	destroy() {
		if (this.value != null) {
			this.value.destroy();
			this.value = null;
		}
	}

	toString() {
		return this.x + ", " + this.y;
	}

	// get world pos

	getWorldPos() {
		return vec2(this.x * this.grid.cellSize, this.y * this.grid.cellSize).add(this.grid.pos);
	}

}