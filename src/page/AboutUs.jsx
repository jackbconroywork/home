import BreadCrumb from "../components/common/Breadcrumb";
// Teams images
import SingleTeamSkill from "../components/team/SingleTeamSkills";
import SingleTeamDetails from "../components/team/SingleTeamDetails";
import SingleTeamDetailsTwo from "../components/team/SingleTeamDetailsTwo";

function AboutUs() {
  return (
    <>
      <BreadCrumb title="Our Story" />
      <SingleTeamDetails />
      {/* <SingleTeamDetailsTwo /> */}
      {/* <SingleTeamSkill /> */}
    </>
  );
}

export default AboutUs;
