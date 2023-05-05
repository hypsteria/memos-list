class Memo {
	id: string;
	description: string;

	constructor(descriptionText: string) {
		this.description = descriptionText;
		this.id = JSON.stringify(new Date().toISOString());
	}

	toPlainObject() {
		return {
			id: this.id,
			description: this.description,
		};
	}
}

export default Memo;
