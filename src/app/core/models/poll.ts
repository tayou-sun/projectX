import { Problem } from "./problem";
import { ProfileQuestion } from "./profile-question";

export class Poll {
    problemId?: number;
  
    id?: number;
    title?: string;
    periodInDays?: number;
    problem?: Problem;
    pollQuestionItems?: ProfileQuestion[];
    
  }