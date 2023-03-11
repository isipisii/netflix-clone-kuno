import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className="h-[150px] bg-[#0d0c0c] mt-[2rem] flex items-center justify-center">
      <div className="flex flex-col items-center">
        <p className="text-[#ffffff70] text-[.9rem]">Thanks to TMDB for providing free API.</p>
        <p className="text-[#ffffff70] text-[.9rem]">For learning purposes only.</p>
        <p className="text-[#ffffff70] text-[.75rem] mt-2 sm:text-[.8rem]">Made by Alessandro Benig.</p>
        <a href="https://github.com/isipisii" target="_blank">
         <FontAwesomeIcon icon={faGithub} className="text-white text-[1.5rem] mt-2" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
