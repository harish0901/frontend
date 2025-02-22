import React from 'react';

const Home = () => {
  return (
    <div>
      <img src="/cc2.jpg" className="img-fluid w-100 pt-1" alt="Banner" />
      <div className="row row-cols-1 row-cols-md-2 g-4 m-2">
        <div className="col">
          <div className="card shadow-sm">
            <img src="/veg.jpg" className="card-img-top" alt="Veg Recipes" />
            <div className="card-body text-center">
              <h2 className="card-title"><strong>Veg Recipes</strong></h2> {/* Made bold */}
              <p className="card-text">Explore a variety of delicious vegetarian recipes that are easy to make and full of flavor.</p>
              <button className="btn btn-primary">View Recipes</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img src="/nveg.jpg" className="card-img-top" alt="Non-Veg Recipes" />
            <div className="card-body text-center">
              <h2 className="card-title"><strong>Non-Veg Recipes</strong></h2> {/* Made bold */}
              <p className="card-text">Discover mouth-watering non-vegetarian recipes that will satisfy your cravings.</p>
              <button className="btn btn-primary">View Recipes</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img src="/d6.jpg" className="card-img-top" alt="Desserts" />
            <div className="card-body text-center">
              <h2 className="card-title"><strong>Desserts</strong></h2> {/* Made bold */}
              <p className="card-text">Indulge in sweet treats with our collection of delightful dessert recipes.</p>
              <button className="btn btn-primary">View Recipes</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img src="/snack.jpg" className="card-img-top" alt="Snacks" />
            <div className="card-body text-center">
              <h2 className="card-title"><strong>Snacks</strong></h2> {/* Made bold */}
              <p className="card-text">Find quick and easy snack recipes that are perfect for any occasion.</p>
              <button className="btn btn-primary">View Recipes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;