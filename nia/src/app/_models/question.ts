import { QuestionOption } from './option';
import { UserResponse } from './userResponse';

export class Question {
	id? : number;
	questionDesc?: string;
	options? : QuestionOption[] = [];
	isAnswered? : boolean = false;
	userResponse? : UserResponse;
	resultDesc? : string; 
	correctAnswered? : boolean;
	answered? : boolean;
}