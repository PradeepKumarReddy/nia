import { QuestionOption } from './option';

export class Question {
	id? : number;
	questionDesc?: string;
	options? : QuestionOption[] = [];
	isAnswered? : boolean = false;
}