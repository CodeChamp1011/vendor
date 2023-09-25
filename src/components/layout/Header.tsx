export default function Header() {
  const items = [
    "Find talent",
    "Inspiration",
    "Learn design",
    "Jobs",
    "Go Pro",
  ];
  return (
    <>
      <div className="flex flex-row md:justify-between justify-end px-[24px] md:pt-[48px] pt-[20px] bg-[#FFFFFF]">
        <div className="md:flex hidden flex-row gap-x-10">
          {items.map((item, key) => (
            <span
              key={key}
              className="text-[#0D0C22] text-[14px] font-[500] cursor-pointer"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex justify-center items-center flex-row gap-x-4">
          <div className="text-[#0D0C22] text-[14px] font-normal cursor-pointer">
            Log in
          </div>
          <div className="flex justify-center items-center bg-[#0D0C22] rounded-[10000000px] border-solid border-[1px] border-[#0D0C22] px-[17px] h-[48px] cursor-pointer">
            <p className="text-[#FFF] text-[14px] font-normal">Sign up</p>
          </div>
        </div>
      </div>
    </>
  );
}
