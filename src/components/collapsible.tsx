/**
 * collapsible.tsx
 * Rob Barton
 */
import React, { useState } from 'react';
import { BiDownArrowAlt } from 'react-icons/bi';

const Collapsible = ({ open, children, title }) => {
	const [isOpen, setIsOpen] = useState(open);

	const handleFilterOpening = () => {
		setIsOpen(prev => !prev);
	};

	return (
		<>
			<div className="card">
				<div>
					<div className="p-3 border-bottom d-flex justify-content-between">
						<h6 className="font-weight-bold">{title}</h6>
						<button type="button" className="btn" onClick={handleFilterOpening}>
							{!isOpen ? (
								<BiDownArrowAlt className="mb-4 text-center xl:mt-2" style={{ transform: 'rotate(180deg)' }} />
							) : (
								<BiDownArrowAlt />
							)}
						</button>
					</div>
				</div>

				<div className="border-bottom">
					<div>{isOpen && <div className="p-3">{children}</div>}</div>
				</div>
			</div>
		</>
	);
};

export default Collapsible;
