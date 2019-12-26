import React, { forwardRef } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const JobModal = ({ modalOpened, toggleModal, singleJob }) => {
	const { title, description, company_logo, url, how_to_apply, company } = singleJob;
	return (
		<>
			<Dialog
				open={modalOpened}
				TransitionComponent={Transition}
				keepMounted
				onClose={toggleModal}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle id="alert-dialog-slide-title">
					{title} - {company}
					<div className="detailLogo">
						<img src={company_logo} alt="Company Logo" />
					</div>
				</DialogTitle>
				<DialogContent>
					<DialogContentText
						id="alert-dialog-slide-description"
						dangerouslySetInnerHTML={{ __html: description }}
					></DialogContentText>
				</DialogContent>
				<DialogActions>
					<a href={url} target="_blank" rel="noopener noreferrer">
						<Button onClick={toggleModal} color="primary">
							Apply for job!
						</Button>
					</a>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default JobModal;
