import React, { useState, useEffect } from "react";
import DashboardTable from "./DashboardTable";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import DashboardTable2 from "./DashboardTable2";

var searchArray = [];

const useStyles = makeStyles({
  dashContainer: {
    display: "flex",
  },
  innerContainer: {
    marginLeft: "1em",
    "& > h4": {
      border: "1px solid #d1d1d1",
      width: "90vh",
      height: "8vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "0.2em",
      borderRadius: "0.5em",
      color: "#af1321",
    },
  },
  dashboardBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #d1d1d1",
    borderRadius: "0.3em",
    minHeight: "50vh",
    flexDirection: "column",
    width: "95vh",
  },
  searchOuterBox: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-around",
    borderBottom: "2px solid #d1d1d1",
    paddingBottom: "1em",
    width: "95%",
    "& > div > h5": {
      color: "#af1321",
      margin: "1em",
      fontSize: "0.7rem",
      fontWeight: "800",
    },
  },
  selectCategories: {
    width: "9em",
    display: "flex",
    justifyContent: "space-around",
    "& > *": {
      width: "15em",
      height: "1em",
    },
    "& .MuiInputLabel-root": {
      color: "#gray",
      fontSize: "0.8rem",
    },
  },
  searchField: {
    width: "9em",
  },
  productTable: {
    marginTop: "1em",
  },
});

// Category list
const categoriesList = [
  {
    value: "grocery",
    label: "Grocery",
  },
  {
    value: "electonics",
    label: "Electonics",
  },
  {
    value: "wearable",
    label: "Wearable",
  },
];

function Dashboard() {
  const classes = useStyles();
  const [category, setCategory] = useState("");
  const [inStock, setInStock] = useState(false);
  const [productArray, setProductArray] = useState([]);
  const [productArrayCopy, setProductArrayCopy] = useState([]);
  const [cartData, setCartData] = useState([]);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    getData();
    setProductArrayCopy(JSON.parse(localStorage.getItem("localData")));
    setCartData(JSON.parse(localStorage.getItem("Cart")));
  }, []);

  useEffect(() => {
    localStorage.setItem("localData", JSON.stringify(productArray));
  }, [productArray]);

  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cartData));
  }, [cartData]);

  //retriving data from local storage
  function getData() {
    var data = localStorage.getItem("localData");
    if (data != null) {
      setProductArray(JSON.parse(data));
      searchArray = JSON.parse(data);
    }
  }

  function stockCheckHandler() {
    if (inStock === true) {
      setInStock(false);
      let searchArray2 = searchArray.filter((d) => {
        return d.qty > -1;
      });
      setProductArray([...searchArray2]);
    } else {
      setInStock(true);
      let searchArray2 = searchArray.filter((d) => {
        return d.qty > 20;
      });
      setProductArray([...searchArray2]);
    }
  }

  function searchHandler(e) {
    if (inStock) {
      let searchArray2 = searchArray.filter((d) => {
        let x = d.productName.toLowerCase();
        return x.indexOf(e.target.value) !== -1 && d.qty > 20;
        /* sraching by startwith 
        return x.startsWith(e.target.value) == true; */
      });
      setProductArray([...searchArray2]);
    } else {
      let searchArray2 = searchArray.filter((d) => {
        let x = d.productName.toLowerCase();
        return x.indexOf(e.target.value) !== -1 && d.qty > -1;
      });
      setProductArray([...searchArray2]);
    }
  }

  const addToCarthandler = (product) => {
    const index = productArrayCopy.findIndex(
      (x) => x.productName === product.productName
    );

    const selectProduct = productArrayCopy[index];
    selectProduct.qty = selectProduct.qty - product.qty;

    productArray[index] = selectProduct;

    setProductArray([...productArray]);
    setProductArrayCopy([...productArray]);

    const productInCart = cartData?.find(
      (x) => x.productName === product.productName
    );
    if (productInCart?.productName != null) {
      productInCart.qty = productInCart.qty + product.qty;
      setCartData([...cartData]);
    } else {
      const productCopy = Object.assign({}, product);
      productCopy.qty = product.qty;
      setCartData(
        cartData == null ? [productCopy] : [...cartData, productCopy]
      );
    }
  };

  return (
    <div className={classes.dashContainer}>
      <div className={classes.innerContainer}>
        <h4>CART</h4>
        <div>
          <DashboardTable cartData={cartData} />
        </div>
      </div>

      <div className={classes.innerContainer}>
        <h4>PRODUCT DASHBOARD</h4>
        <div className={classes.dashboardBox}>
          <div className={classes.searchOuterBox}>
            <div>
              <h5>CATEGORIES</h5>
              <div className={classes.selectCategories}>
                <TextField
                  select
                  label="SELECT ALL"
                  value={category}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                >
                  {categoriesList.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </div>
            <div>
              <h5>IN-STOCK</h5>
              <Checkbox
                checked={inStock}
                onChange={stockCheckHandler}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </div>
            <div>
              <h5>SEARCH</h5>
              <TextField
                className={classes.searchField}
                plceholder="Search"
                variant="outlined"
                size="small"
                onChange={searchHandler}
              />
            </div>
          </div>
          <div className={classes.productTable}>
            {productArray.length > 0 && (
              <DashboardTable2
                productsData={productArray}
                addCartHandler={addToCarthandler}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
