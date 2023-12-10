const SellerProfCard = () => {
  return (
    <div className="bg-white shadow-boxShadow rounded-md py-4 px-3 font-openSans">
      {/* User Details */}
      <div className="details flex items-start justify-between">
        <div className="left space-y-6">
          <div className="image w-[191px] h-[156px] rounded-xl">
            <img
              src="/images/seller1.png"
              alt="SellerImage"
              className="w-full h-full rounded-xl"
            />
          </div>
          <button className="bg-darkBtn w-full rounded-full py-2 text-white font-bold leading-[21.79px] shadow-btnShadow2">
            Profile
          </button>
        </div>
        <div className="content space-y-4">
          <h3 className="font-bold text-[22px] leading-[34px] text-textDark">
            Workshop
          </h3>
          <div className="font-semibold text-textBlue text-sm leading-[18px]">
            <a href="#" target="_blank" rel="noopener noreferrer">
              www.website.com
            </a>
          </div>
          <p className="font-archivo leading-[24px] text-textLight">53 West Cherry Hill Lane Murfreesboro, TN 37128</p>
          <p className="font-archivo leading-[24px] text-textLight">+1(123) 123-123-123</p>
          <div className="font-archivo leading-[24px] text-textLight">
            <a href="mailto:emailalbo_store@email.com">
              emailalbo_store@email.com
            </a>
            F
          </div>
        </div>
      </div>
      {/* Statistics */}
      
    </div>
  );
};

export default SellerProfCard;
