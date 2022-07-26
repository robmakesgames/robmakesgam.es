import { CgCPlusPlus } from 'react-icons/cg';
import { SiOpengl } from 'react-icons/si';
const Icons = {
	CPP: <CgCPlusPlus />,
	OpenGL: <SiOpengl />,
};

const Icon = ({ iconString }) => {
	return <span className="text-xl">{Icons[iconString]}</span>;
};

export default Icon;
