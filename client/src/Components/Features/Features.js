/** @format */

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Features.scss';

export default function Features() {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);

	return (
		<div id='Features' className='bg-dark'>
			<div className='container'>
				<div className='features-grid'>
					<div className='card' data-aos='fade-right'>
						<span className='material-icons-outlined'>code</span>
						<h3>Software Solutions</h3>
						<p>
							I deliver custom software solutions with your unique
							business requirements in mind. Web, Mobile, Desktop.
						</p>
					</div>
					<div className='card' data-aos='fade-up'>
						<span className='material-icons-outlined'>groups</span>
						<h3>Business Consulting</h3>
						<p>
							I asses your IT needs and what software solution
							might be suitable for your company. Provide guidance
							on how you can implement those.
						</p>
					</div>
					<div className='card' data-aos='fade-left'>
						<span className='material-icons-outlined'>
							wordpress
						</span>
						<h3>CMS Maintenance</h3>
						<p>
							I will build websites or maintain already built
							sites. Common alternatives are wordpress, shopify.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
