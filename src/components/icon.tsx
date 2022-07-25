import { CgCPlusPlus } from 'react-icons/cg';

const Icons = {
	CPP: <CgCPlusPlus />,
};

const Icon = ({ iconString }) => {
	return <p>{Icons[iconString]}</p>;
};

export default Icon;
