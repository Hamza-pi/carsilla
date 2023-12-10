import Period from "../components/Period";
import SellerProfCard from "../components/SellerProfCard";
import TitleBar from "../components/TitleBar";

const SellerProfiles = () => {
  return (
    <div>
      <TitleBar title={"Service Providers Profiles"} />
      <Period periodTitle="Sales Period" viewTitle="Profiles" showing={4} from={16}/>
      <div className="profiles py-8">
          <SellerProfCard/>
      </div>
    </div>
  );
};

export default SellerProfiles;
