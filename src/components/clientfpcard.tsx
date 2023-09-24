function Clientfp({
  color,
  title,
  Image,
  country,
}: {
  color: string;
  title: string;
  Image: any;
  country: string[];
}) {
  return (
    <div className=" bg-white rounded-lg flex flex-col items-start w-64 gap-6 shadow-lg">
      <img
        src={Image}
        alt={title}
        className={`object-contain object-center w-full h-56 p-8 ${color}`}
      />
      <div className="px-8 py-8 flex flex-col gap-4 text-left w-full">
        <div>{title}</div>
        <hr />
        <div className="w-full text-left">
          {country.map((e) => {
            return <p>{e}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
export default Clientfp;
