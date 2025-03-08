"use client";

import DataObjectIcon from "@mui/icons-material/DataObject";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
  useClerk,
} from "@clerk/nextjs";
import Link from "next/link";

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
  const { userId } = useAuth();
  return (
    <div className="flex gap-2 max-sm:flex-col max-sm:w-[60%] max-sm:mt-8">
      {/* If user is signed out, show Sign In and Sign Up buttons */}
      {userId ? (
        <Link href="my-notes">
          <button className="max-sm:w-full p-[8x] px-6 text-sm text-main rounded-md">
            Access To App
          </button>
        </Link>
      ) : (
        <>
          <SignedOut>
            <SignInButton>
              <button className="max-sm:w-full p-[8px] px-6 text-sm text-white rounded-md bg-main">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedOut>
            <SignUpButton>
              <button className="text-sm border hover:text-white hover:bg-main p-[8px] px-6 rounded-md border-main text-main">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
        </>
      )}
      {/* If user is signed in, show profile and logout button */}
      <SignedIn>
        <div className="flex items-center gap-3">
          <UserButton afterSignOutUrl="/" />
          {/* <button
            onClick={() => signOut()}
            className="text-sm border hover:text-white hover:bg-red-500 p-[8px] px-6 rounded-md border-red-500 text-red-500"
          >
            Logout
          </button> */}
        </div>
      </SignedIn>
    </div>
  );
};
