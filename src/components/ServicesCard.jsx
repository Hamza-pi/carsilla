const ServicesCard = ({data}) => {
  return (
    <div className="2xl:w-[218px] sm:w-[48%] w-full py-4 flex flex-col gap-4 items-center justify-center bg-white shadow-boxShadow rounded-xl font-openSans">
      <div className="image 2xl:w-[163px] w-[90%] h-[107px] rounded-[10px]">
        <img
          src={data?.img}
          alt=""
          className="w-full h-full rounded-[10px] object-cover object-center"
        />
      </div>
      <div className="details 2xl:w-[163px] w-[90%] flex flex-col items-start justify-start gap-y-4">
        <h3 className="font-bold leading-[22px] text-textDark">{data.title}</h3>
        <div className="font-bold text-sm leading-[20px]">
            <h4 className="text-[#02A189]">Available : 1235</h4>
            <h4 className="text-textBlue">Already sold : 235</h4>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
