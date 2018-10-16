// Export a stateless functional component
// description, amount, createdAt value

import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  // info passed in on props, here are deconstructing the props object
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {" "}
      {amount} - {createdAt}{" "}
    </p>
  </div>
);

export default ExpenseListItem;
