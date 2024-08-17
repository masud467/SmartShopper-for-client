import React from 'react';
import PropTypes from "prop-types";

const AllProductsCard = ({item}) => {
    return (
        <div>
        <div className="card w-96 bg-base-100 shadow-xl">
<figure><img className=" h-56" src={item.image} alt="" /></figure>
<div className="card-body">
 <h2 className="card-title">{item.name}</h2>
 <p><span className="font-medium">Category:</span> {item.category}</p>
 <p><span className="font-medium">Price:</span>  ${item.price}</p>
 <p><span className="font-medium">Ratings:</span>  {item.ratings}</p>
 <p> <span className="font-medium">Description:</span> {item.description}</p>
 <p> <span className="font-medium">Creation Date:{item.creationDate}</span></p>
 {/* <div className="">
  <Link to={`/details-class/${item._id}`}> <button className="btn btn-primary w-full">Enroll</button></Link>
 </div> */}
</div>
</div>
     </div>
  
    );
};

AllProductsCard.propTypes = {
    item: PropTypes.object,
    refetch: PropTypes.func,
  };

export default AllProductsCard;