import { IoIosPeople } from "react-icons/io";
import { MdTurnedIn } from "react-icons/md";
import { GiHospitalCross } from "react-icons/gi";
import { RiSkull2Fill } from "react-icons/ri";

const HelpContent = ({ classes, theme }) => {
  return (
    <div className={classes.helpContent}>
      <div style={{ color: theme.palette.neutral.population }}>
        <IoIosPeople /> - Population (aproximate)
      </div>
      <div style={{ color: theme.palette.neutral.totalConfirmed }}>
        <MdTurnedIn /> - Confirmed Cases
      </div>
      <div style={{ color: theme.palette.neutral.totalRecovered }}>
        <GiHospitalCross /> - Recovered Cases
      </div>
      <div style={{ color: theme.palette.neutral.totalDeaths }}>
        <RiSkull2Fill /> - Deceased Cases
      </div>
    </div>
  );
};

export default HelpContent;
