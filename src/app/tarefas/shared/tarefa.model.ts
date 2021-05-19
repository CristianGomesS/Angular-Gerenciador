export class Tarefa {

	constructor(
		public id?: number,
		public nome?: string,
		public dataInit?: Date,
		public dataFim?: Date,
		public concluida?: boolean) {}
}
