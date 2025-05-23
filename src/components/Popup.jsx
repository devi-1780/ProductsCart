function Popup({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div
      className="flex justify-center items-center z-0 fixed top-0 left-0 w-full h-full bg-black bg-opacity-70"
      onClick={onClose}
    >
      <div
        className="relative w-[400px] p-10 bg-white rounded-lg shadow-lg shadow-gray-400"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-[10px] right-4 bg-none text-lg cursor-pointer"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
        <button
          onClick={onClose}
          className=" bg-purple-900 text-white px-2 rounded mt-4 ml-[300px]"
        >
          ok
        </button>
      </div>
    </div>
  );
}
export default Popup;
