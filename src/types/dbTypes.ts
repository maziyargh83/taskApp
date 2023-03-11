export enum STATUS {
  "PENDING",
  "DONE",
}
export class Task {
  constructor(
    public objectId: string,
    public title: string,
    public categoryId: string,
    public subCategoryId: string,
    public status: keyof typeof STATUS,
    public createDate: Date,
    public isDeleted: boolean
  ) {}
}
export class List {
  constructor(
    public objectId: string,
    public title: string,
    public emoji: string,
    public createDate: Date,
    public isDeleted: boolean
  ) {}
}
export class Label {
  constructor(
    public objectId: string,
    public title: string,
    public ListId: string,
    public createDate: Date,
    public isDeleted: boolean
  ) {}
}
