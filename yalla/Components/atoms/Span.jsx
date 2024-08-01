import PropTypes from "prop-types";
const Span = ({ level, children }) => {
    const SpanTag = `h${level}`;
    const getSpanStyles = (level) => {
        switch (level) {
            case "success":
                return "text-[23px] text-[#2d334a] font-[700] leading-[1.3em] tracking-[-2px]";
            case "footer":
                return " text-[13px] cursor-pointer text-[#747474] hover:text-[#ff6a28] font-normal";
            case "offers":
                return "text-[18px] text-black font-[500]  leading-[1em] ";
            case "overview":
                return "text-[30px] text-[#2d334a] font-[600] leading-[50px] leading-[50px]  ";
            case "work":
                return "text-[75px] text-[#164b8d] font-[800] pr-[3%] ";
            case "work2":
                return "text-[27px] font-[700] text-[#212529] whitespace-nowrap ";
            default:
                return "text-lg"
        }

    }
    const SpanStyle = getSpanStyles(level);
    return <SpanTag className={SpanStyle}>{children}</SpanTag>
};
Span.PropTypes = {
    level: PropTypes.oneOf(["success", "footer", "3", "4", "5", "6"])
};
export default Span
