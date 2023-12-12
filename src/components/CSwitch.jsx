import Switch from "react-switch";

const CSwitch = ({ checked ,dispatch,type}) => {

  const handleChecked = (check)=>{
    dispatch({type,payload:check})
  }

  return (
    <Switch
      onColor="#775DA6"
      offColor="#898989"
      handleDiameter={20}
      uncheckedIcon={false}
      checkedIcon={false}
      checked={checked}
      onChange={handleChecked}
      height={24}
      width={40}
      className="react-switch"
    />
  );
};

export default CSwitch;
