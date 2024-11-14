import FindUs from "../FindUs";
import SocialLogin from "../SocialLogin";

const RightNavbar = () => {
  return <div className="space-y-5">
         <SocialLogin></SocialLogin>
         <FindUs></FindUs>
    </div>;
};

export default RightNavbar;
