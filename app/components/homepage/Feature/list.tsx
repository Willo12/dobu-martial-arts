type ListProps = {
  fea1: String;
  fea2: String;
  fea3: String;
};

const List = ({ fea1, fea2, fea3 }: ListProps) => {
  return (
    <>
      <ul className="justify-evenly text-center text-2xl text-white  lg:mx-20 lg:flex lg:justify-between">
        <div className="h-10 lg:hidden"></div>
        <div className="h-20 ">
          <li>{fea1}</li>
          <img className="hidden lg:visible" src="" alt="" />
        </div>
        <div className="h-20 ">
          <li>{fea2}</li>
          <img className="hidden lg:visible" src="" alt="" />
        </div>
        <div className="h-20 ">
          <li>{fea3}</li>
          <img className="hidden lg:visible" src="" alt="" />
        </div>
      </ul>
    </>
  );
};

export default List;
