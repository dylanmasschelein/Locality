import { SyntheticEvent } from 'react';

export type IValue = string | boolean | number | any;

export interface IFormEvent extends SyntheticEvent {
	target: EventTarget & {
		name: string;
		value: IValue;
		files: any;
	};
}
