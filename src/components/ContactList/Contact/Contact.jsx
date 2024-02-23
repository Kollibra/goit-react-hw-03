import { FaPhone } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import css from './Contact.module.css';

const Contact = ({ id, name, number, deleteContact }) => {
	const handleRemoveClick = () => {
		deleteContact(id); // Передача id контакту у функцію deleteContact
	};

	return (
		<>
			<li className={css.item}>
				<div className={css.itemInfoContainer}>
					<p className={css.text}>
						<IoPerson className={css.iconPerson} />
						{name}
					</p>
					<p className={css.text}>
						<FaPhone className={css.iconPhone} />
						{number}
					</p>
				</div>
				<button id={id} className={css.button} type="button" onClick={handleRemoveClick}>
					Delete
				</button>
			</li>
		</>
	);
};

export default Contact;