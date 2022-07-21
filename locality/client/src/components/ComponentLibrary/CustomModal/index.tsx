import { FC } from 'react';
import baseStyles from './modal.module.scss';
import { Modal } from 'semantic-ui-react';

enum ModalSize {
	large = 'large',
	mini = 'mini',
	tiny = 'tiny',
	small = 'small',
	fullscreen = 'fullscreen'
}

interface ICustomerModal {
	children: any;
	open: boolean;
	close: () => void | ((s: string) => void);
	styles?: string;
	size?: ModalSize;
	hideLogo?: boolean;
	showClose?: boolean;
}

const CustomerModal: FC<ICustomerModal> = ({ children, open, close, styles, size, hideLogo, showClose }) => {
	return (
		<div className={`${baseStyles.modal_container} ${styles}`}>
			<Modal open={open} size={size || 'large'} dimmer onClose={close} className={`${baseStyles.modal}`}>
				<Modal.Content className={baseStyles.modal_content}>
					{/* {!hideLogo && (
						<Image
							alt="Model Renovations Logo"
							src="https://photos-bucket-0.s3.us-west-2.amazonaws.com/Model-rebrand-assets/model-logo-text-only-black.png"
							width={250}
							height={20}
							objectFit="contain"
						/>
					)} */}
					{children}
				</Modal.Content>
			</Modal>
		</div>
	);
};

export default CustomerModal;
