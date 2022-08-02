export interface AccountResponse {
	user: {
		id: string;
		email: string;
		is_active: boolean;
		first_name: string;
		last_name: string;
		city: string;
		photo: string;
		// created: Date;
		// updated: Date;
	};
	access: string;
	refresh: string;
}

export interface IDashboardOptions {
	text: string;
	link: string;
	alternateAction?: any;
	icon: any;
	hideOption?: any;
}
