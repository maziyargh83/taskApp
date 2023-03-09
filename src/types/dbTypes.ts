export class Task {
  constructor(
    public id: string,
    public title: string,
    public category: string,
    public status: "pending" | "done"
  ) {}
}
