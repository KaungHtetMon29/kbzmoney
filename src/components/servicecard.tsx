function Servicecard({ title, Image }: { title: string; Image: any }) {
  return (
    <div className="px-18 py-8 bg-white rounded-lg flex flex-col items-center w-80 gap-6 shadow-lg">
      <div>
        <img src={Image} alt={title} />
      </div>
      <div>{title}</div>
    </div>
  );
}
export default Servicecard;
