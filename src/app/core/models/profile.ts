import { Poll } from "./poll";

export class Profile {
    public pollId?: number;
    public poll?: Poll;
    public id?: number;
    public date?: Date;
    public value?: string;
    public isFinished?: boolean;
}
