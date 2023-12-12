import TitleBar from "../components/TitleBar";
import Period from "../components/Period";
import CategoryCard from "../components/CategoryCard";

const categProgress = [
  {
    title: "Workshop Repairs",
    sale: "$116,34k",
    progress: "w-[90%]",
    shadow: "shadow-pBar1",
  },
  {
    title: "Car Listing",
    sale: "$101,34k",
    progress:"w-[80%]",
    shadow: "shadow-pBar2",
  },
  {
    title: "Car Insurance",
    sale: "$83k",
    progress:"w-[70%]",
    shadow: "shadow-pBar3",
  },
  {
    title: "Car lift",
    sale: "$61k",
    progress:"w-[60%]",
    shadow: "shadow-pBar4",
  },
];

const categories= [
  {
    title:"Workshop",
    img:"/images/c1.png",
    sale:"$23k"
  },
  {
    title:"Roadside",
    img:"/images/c2.png",
    sale:"$18k"
  },
  {
    title:"Insurance",
    img:"/images/c3.png",
    sale:"$20k"
  },
  {
    title:"Services",
    img:"/images/c4.png",
    sale:"$10k"
  },
] 

const Services = () => {
  return (
    <div className="font-openSans">
      <TitleBar title={"Services"} />
      <Period
        periodTitle={"Sales Period"}
        viewTitle={"Products"}
        from={18}
        showing={9}
      />
      {/* Categories & Progress */}
      <div className="categories py-4 flex 2xl:flex-row flex-col gap-4 items-center justify-between">
        {/* Left */}
        <div className="progress_container 2xl:w-[31%] w-full bg-white py-6 px-5 rounded-xl shadow-boxShadow font-bold">
          <h3 className="text-[20px] leading-[24px] text-textDark">
            Top Sales by Categories
          </h3>
          <div className="progress_bars py-2 space-y-4">
            {categProgress.map((item, i) => (
              <div className="progress_bar" key={i}>
                <div className="title text-sm flex item-center justify-between">
                  <h4 className="leading-[21px] text-profileCard">
                    {item.title}
                  </h4>
                  <p className="leading-[19.07px] text-textDark">{item.sale}</p>
                </div>
                <div className="bar bg-greyBg w-full border border-borderColor rounded-full h-[16px]">
                  <div
                    className={`progress bg-textDark ${item.progress} ${item.shadow} rounded-full h-full`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right */}
        <div className="categories 2xl:w-[66%] w-full">
          <div className="category flex flex-wrap items-center xl:justify-between justify-center gap-4 w-full">
            {
              categories.map((category,i)=>(
                <CategoryCard data={category} key={i}/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
