import DataObjectIcon from "@mui/icons-material/DataObject";

const Navbar = () => {
  return (
    <div className="flex m-5 max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col">
      <Logo />
      <Buttons />
    </div>
  );
};

export default Navbar;

const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className="p-[6px] rounded-md bg-main">
        <DataObjectIcon sx={{ fontSize: 27, color: "white" }} />
      </div>
      <div className="flex gap-1 text-[19px]">
        <span className="font-bold text-main">Snippet</span>
        <span className="text-slate-600">Master</span>
      </div>
    </div>
  );
};

const Buttons = () => {
  return (
    <div className="flex gap-2 max-sm:flex-col max-sm:w-[60%] max-sm:mt-8">
      <button className="max-sm:w-full p-[8px] px-6 text-sm text-white rounded-md bg-main">
        Sign In
      </button>
      <button className="text-sm border  hover:text-white  hover:bg-main p-[8px] px-6 rounded-md border-main text-main">
        Sign Up
      </button>
    </div>
  );
};
