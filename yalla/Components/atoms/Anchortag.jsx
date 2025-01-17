import PropTypes from 'prop-types';

const AnchorTag = ({ href, children, variant = '' }) => {
  let anchorStyle = "";

  switch (variant) {

    case "Header":
      anchorStyle = "flex items-center leading-[50px] hover:text-[#F97300] cursor-pointer text-[#747474] text-[15px] font-[600] ease-in duration-300";
      break;
    case "Headerh":
      anchorStyle = "leading-[40px] hover:text-[#ff6a28] cursor-pointer text-[#747474] text-[14px] font-semibold";
      break;
    case "footer":
      anchorStyle = "text-[13px] cursor-pointer text-[#747474] hover:text-[#ff6a28] font-normal"
      break;
    case "img":
      anchorStyle = "text-[24px]  text-white font-[600]  leading-[1em] cursor-pointer"
      break;
    case "services":
      anchorStyle = "text-[24px]  text-white font-[600] hover:text-[#F97300] ease-in duration-300 leading-[1em] cursor-pointer"
      break;
    case "services":
      anchorStyle = "text-[24px]  text-white font-[600] hover:text-[#F97300] ease-in duration-300 leading-[1em] cursor-pointer"
      break;
    case "servics1":
      anchorStyle= "text-[#2d334a] text-[25px] cursor-pointer font-[600] leading-[1.3em]";
      break;
    case "services2":
      anchorStyle ="text-[16px] text-[#2d334a]cursor-pointer font-[500]";
      break;
      case "danger":
      anchorStyle ="text-[22px] text-[#164b8d] cursor-pointer font-[500]";
      break;
      
    default:
      anchorStyle = "";
  }

  return (
    <a className={anchorStyle} href={href}>{children}</a>
  );
};

AnchorTag.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.string
};

export default AnchorTag;
