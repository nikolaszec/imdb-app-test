import React, { useState, useEffect } from "react";
import Item from "../item/item.component";
import { Grid, CircularProgress } from "@material-ui/core";

const ItemList = ({ list }) => {
  return (
    <Grid container spacing={5}>
      {list.map((item) => {
        return <Item key={item.id} item={item}></Item>;
      })}
    </Grid>
  );
};

export default ItemList;
