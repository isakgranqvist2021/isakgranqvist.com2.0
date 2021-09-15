/** @format */

import { useState, useEffect } from 'react';
import http from '../../Utils/http';
import alertsReducer from '../../Store/alerts.reducer';
import Alert from '../Alert/Alert';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.scss';

function Contact(props) {
	const [formData, setFormData] = useState({
		email: '',
		name: '',
		message: '',
	});

	const submit = async () => {
		try {
			const response = await http.POST('/contact', formData);

			alertsReducer.dispatch({
				message: response.message,
				type: `${response.success ? 'success' : 'danger'}`,
			});

			if (response.success) {
				setFormData({
					email: '',
					name: '',
					message: '',
				});
			}
		} catch (err) {
			window.alert('message could not be sent');
		}
	};

	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);

	return (
		<div id='Contact'>
			<div className='container'>
				<form data-aos='fade-right'>
					<Alert />
					<section className='uk-margin-medium-bottom'>
						<label htmlFor='email'>Email </label>
						<input
							id='email'
							placeholder='peter-smith@email.com'
							value={formData.email}
							onChange={(e) =>
								setFormData({
									...formData,
									email: e.target.value,
								})
							}
						/>
					</section>
					<section>
						<label htmlFor='name'>Full Name</label>
						<input
							id='name'
							placeholder='Peter Smith'
							value={formData.name}
							onChange={(e) =>
								setFormData({
									...formData,
									name: e.target.value,
								})
							}
						/>
					</section>
					<section>
						<label htmlFor='message'>Message</label>
						<textarea
							id='message'
							placeholder='Message'
							value={formData.message}
							onChange={(e) =>
								setFormData({
									...formData,
									message: e.target.value,
								})
							}></textarea>
					</section>

					<button type='button' onClick={submit}>
						<span className='material-icons-outlined'>send</span>
					</button>
				</form>
				<div className='social'>
					<h3 data-aos='fade-left'>
						You can also reach me through my social channels
					</h3>
					<div className='icons' data-aos='fade-up'>
						<a
							href='https://www.instagram.com/isakgranqvist2021/'
							title='Instagram'>
							<img
								src='https://static.isakgranqvist.com/icons/instagram.svg'
								alt='Instagram Icon'
							/>
						</a>
						<a
							href='https://www.linkedin.com/in/isak-granqvist-b1217a207/'
							title='Linkedin'>
							<img
								src='https://static.isakgranqvist.com/icons/linkedin.svg'
								alt='Linkedin Icon'
							/>
						</a>
						<a
							href='https://github.com/isakgranqvist2021'
							title='Github'>
							<img
								src='https://static.isakgranqvist.com/icons/github.svg'
								alt='Github Icon'
							/>
						</a>
						<a
							href='mailto:contact@isakgranqvist.com'
							title='Send mail'>
							<img
								src='https://static.isakgranqvist.com/icons/email.svg'
								alt='Email Icon'
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Contact;
