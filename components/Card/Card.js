const Card = ({ children }) => {
  return (
    <div className="bg-white flex  m-2 rounded-md p-12 items-center justify-center text-black">
      {children}
    </div>
  );
};

export default Card;
