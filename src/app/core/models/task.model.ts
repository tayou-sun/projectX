export class Task{
    private _id?: number;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    private _title?: string;
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    public start? : string;//Date;
    public isPeriodic?: boolean;
    private _intervalInDays?: number;
    public get intervalInDays(): number {
        return this._intervalInDays;
    }
    public set intervalInDays(value: number) {
        this._intervalInDays = value;
    }
    public end?: Date;
}