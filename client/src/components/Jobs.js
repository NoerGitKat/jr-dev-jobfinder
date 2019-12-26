import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import SingleJob from './SingleJob';
import JobModal from './JobModal';

const Jobs = ({ allJobs }) => {
	const [activeStep, setActiveStep] = useState(0);
	const [modalOpened, setModalOpened] = useState(false);
	const [singleJob, setSingleJob] = useState({});

	// Show 50 jobs per page
	const numOfSteps = Math.ceil(allJobs.length / 50);

	// Paginate number of jobs shown
	const jobsPerPage = allJobs.slice(activeStep * 50, activeStep * 50 + 50);

	// Stepper
	const handleNext = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

	// Toggle modal
	const toggleModal = () => {
		setModalOpened(prevState => {
			return !prevState;
		});
	};

	const handleModalClick = singleJob => {
		setSingleJob(singleJob);
		toggleModal();
	};

	return (
		<div className="jobList">
			<Typography variant="h4" component="h1">
				Junior developer jobs here!
			</Typography>
			<Typography variant="h6" component="h2">
				Found {allJobs.length} jobs:
			</Typography>
			{jobsPerPage.map((job, i) => (
				<SingleJob key={`${job.title + i}`} job={job} handleModalClick={handleModalClick} />
			))}
			<div>
				Page {activeStep + 1} of {numOfSteps}
			</div>
			<MobileStepper
				variant="progress"
				steps={numOfSteps}
				position="static"
				activeStep={activeStep}
				className={''}
				nextButton={
					<Button size="small" onClick={handleNext} disabled={activeStep + 1 === numOfSteps}>
						Next
						<KeyboardArrowRight />
					</Button>
				}
				backButton={
					<Button size="small" onClick={handleBack} disabled={activeStep === 0}>
						<KeyboardArrowLeft />
						Back
					</Button>
				}
			/>
			<JobModal modalOpened={modalOpened} toggleModal={toggleModal} singleJob={singleJob} />
		</div>
	);
};

export default Jobs;
