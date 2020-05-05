export class Task{
    public id? : number;
    public title? : string;
    public start? : Date;
    public isPeriodic?: boolean;
    public intervalInDays? : number;
    public end?: Date;
}