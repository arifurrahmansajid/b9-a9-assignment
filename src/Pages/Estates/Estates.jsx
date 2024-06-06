import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Estates = () => {
  const [estates, setEstates] = useState([]);

  useEffect(() => {
    fetch("estate.json")
      .then((res) => res.json())
      .then((data) => setEstates(data));
  }, []);

  return (
    <>
      <h1>All data: {estates.length}</h1>

      <div className="grid grid-cols-3 gap-10">
        {estates.map((estate) => (
          <div key={estate.id}>
            <div className="card card-compact  g-base-100  h-[600px] shadow-xl">
              <figure>
                <img src={estate.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {estate.estate_title} <span>{estate.id}</span>
                </h2>
                <p className="text-base">{estate.segment_name}</p>
                <p>{estate.description}</p>
                <p>{estate.price}</p>
                <p>{estate.status}</p>
                <p>{estate.area}</p>
                <p>{estate.location}</p>

                <div>
                  {estate.facilities.map((facility, idx) => (
                    <li key={idx}>{facility}</li>
                  ))}
                </div>

                <div className="card-actions ">
                  <Link className="w-full" to="/property">
                    <button className="btn btn-outline hover:bg-primary w-full">
                      {estate.view_property_button}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Estates;
