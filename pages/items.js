import React from "react";
import Items from "../components/Items";

const ItemPro = props => {
  return (
    <div>
      <Items page={parseFloat(props.query.page) || 1} />
    </div>
  );
};

export default ItemPro;
