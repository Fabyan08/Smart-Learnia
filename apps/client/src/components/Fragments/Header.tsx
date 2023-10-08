import Identity from "../Elements/Identity/Index";

const Header = () => {
  return (
    <header className="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-gray-800">
      <div className="flex flex-shrink-0 items-center space-x-4 text-white">
        <Identity></Identity>

      </div>
    </header>
  );
};

export default Header;
