const Catagori = ({ catagori }) => {
  const { logo,category_name,availability } = catagori;
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-lg shadow-cyan-500/50 ... p-8 mt-10 ">
      <figure>
        <img
          src={logo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div>
            <h2 className="text-2xl">{category_name}</h2>
            <p>{availability}</p>
        </div>
        
      </div>
    </div>
  );
};

export default Catagori;
