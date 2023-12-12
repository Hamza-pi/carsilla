const CategoryCard = ({data}) => {
  return (
    <div className="xl:w-[218px] sm:w-[48%] w-full py-8 flex flex-col gap-4 items-center justify-center bg-white shadow-boxShadow rounded-xl font-openSans">
      <div className="image xl:w-[166px] w-[90%] h-[157px] rounded-[10px]">
        <img
          src={data?.img}
          alt=""
          className="w-full h-full rounded-[10px] object-cover object-center"
        />
      </div>
      <div className="details xl:w-[166px] w-[90%] flex items-center justify-start gap-x-4">
        <div className="w-[40px] h-[40px] rounded-lg bg-textDark"></div>
        <div className="font-bold">
            <h3 className="text-sm leading-[21px] text-profileCard">{data?.title}</h3>
            <p>{data?.sale}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
