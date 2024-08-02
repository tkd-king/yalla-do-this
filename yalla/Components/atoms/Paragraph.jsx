import PropTypes from 'prop-types';

const Paragraph = ({children, variant = '' }) => {
  let paragraphStyle = "";

  switch (variant) {
    
    case "banner":
      paragraphStyle = " text-black text-[17px] font-[600] tracking-[1px] ";
      break;
      case "imgs":
        paragraphStyle = "cursor-pointer pt-[2%] leading-[25px] text-black text-[14px] font-semibold";
      break;
      case "offer":
        paragraphStyle = " leading-[25px]  text-[16px] font-[400] mt-[20px]";
      break;
      case "danger":
        paragraphStyle = " leading-[25px] text-black  text-[16px] font-[500] tracking-wide ";
      break;
      case "contact":
        paragraphStyle = " leading-[25px] text-black pt-[4%]text-[15px] font-[500] tracking-wide ";
      break;
      
      case "contact2":
        paragraphStyle = " text-600-gray  px-[40px] text-[16px] font-[500] tracking-wide ";
      break;
        
    default:
      paragraphStyle = "";
  }

  return (
    <p className={paragraphStyle}>{children}</p>
  );
};

Paragraph.propTypes = {
  children: PropTypes.string.isRequired
}


export default Paragraph;
