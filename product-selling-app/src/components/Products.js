import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ProductTable from "./ProductTable";

const tempArray = [];

const useStyles = makeStyles({
  mainContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  formContainer: {
    minWidth: "70vh",
    marginLeft: "0.2em",
    "& > h4": {
      border: "1px solid #d1d1d1",
      height: "8vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "0.2em",
      borderRadius: "0.5em",
      color: "#af1321",
    },
  },
  formInnerContainer: {
    border: "1px solid #d1d1d1",
    borderRadius: "0.5em",
    marginTop: "3em",
  },
  form: {
    minHeight: "52vh",
    marginTop: "0.5em",
    "& > div": {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      marginBottom: "0.8em",
    },
  },
  inputGroup: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    margin: "0",
    "& > label": {
      color: "gray",
      fontSize: "0.8em",
      marginBottom: "0.2em",
    },
    "& > span": {
      color: "#af1321",
      fontSize: "0.53em",
      fontWeight: "700",
    },
  },
  formField: {
    width: "28vh",
    height: "4vh",
  },
  selectField: {
    height: "4.80vh",
    width: "29vh",
  },
  addButton: {
    width: "15vh",
    height: "6vh",
    marginBottom: "-3em",
  },
  tableContainer: {
    marginLeft: "0.2em",
    "& > h4": {
      border: "1px solid #d1d1d1",
      width: "100vh",
      height: "8vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "0.2em",
      borderRadius: "0.5em",
      color: "#af1321",
    },
  },
  tableInnerContainer: {
    marginTop: "3em",
  },
});

//function to convert first letter of a string to uppercase
function capitalizeFirstLetter(str) {
  // converting first letter to uppercase
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

  return capitalized;
}

function Products() {
  const [displayData, setDisplayData] = useState([]);
  const [tableArray, setTableArray] = useState([]);
  const [updateState, setUpdateState] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    getData();
  }, [displayData]);

  //Initial values for form input field
  const initialValues = {
    productName: "",
    price: 0,
    qty: 0,
    discount: 0,
    gst: 0,
    category: "",
  };

  //Validationschema for validating the form
  const validationSchema = Yup.object({
    productName: Yup.string().required("PLEASE ENTER PRODUCT NAME!"),
    category: Yup.string().required("PLEASE SELECT CATEGORY!"),
    price: Yup.number().min(1, "OOPS INVALID!"),
    qty: Yup.number().min(1, "OOPS INVALID!"),
    discount: Yup.number().min(0, "OOPS NEGATIVE NUMBER!"),
    gst: Yup.number().min(0, "OOPS NEGATIVE NUMBER!"),
  });

  //Method call when form submitted
  const onSubmit = (values, { resetForm }) => {
      tempArray.push({
        productName: values.productName,
        price: values.price,
        qty: values.qty,
        discount: values.discount ? values.discount : 0,
        gst: values.gst ? values.gst : 0,
        //set first character as a capital letter
        category: capitalizeFirstLetter(values.category),
      });

      //in local storage data store as a string so JSON.stringfy is use
      localStorage.setItem("localData", JSON.stringify(tempArray));

      setDisplayData({
        displayData: tempArray,
      });

      resetForm(initialValues);
  };

  //Method for retriving data from localstorage
  function getData() {
    var data = localStorage.getItem("localData");
    if (data != null) {
      setTableArray({
        tableArray: JSON.parse(data),
      });
    }
  }

  //Method for delete the record
  const deleteData = (pname) => {
    let items = JSON.parse(localStorage.getItem("localData"));

    items.forEach(function (item, index) {
      if (pname === item.productName) {
        items.splice(index, 1);
      }
    });
    localStorage.setItem("localData", JSON.stringify(items));
    getData();
  };

  return (
    <div className={classes.mainContainer}>
      {/* Form Container */}
      <div className={classes.formContainer}>
        <h4>PRODUCT FORM</h4>
        <div className={classes.formInnerContainer}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className={classes.form}>
              <div>
                <div className={classes.inputGroup}>
                  <label htmlFor="productName">Product Name</label>
                  <Field
                    className={classes.formField}
                    type="text"
                    id="productName"
                    name="productName"
                    placeholder="ENTER PRODUCT NAME"
                  />
                  <ErrorMessage component="span" name="productName" />
                </div>

                <div className={classes.inputGroup}>
                  <label htmlFor="category">Select Category</label>
                  <Field
                    as="select"
                    id="category"
                    name="category"
                    className={classes.selectField}
                  >
                    <option value="">SELECT CATEGORY</option>
                    <option value="grocery">Grocery</option>
                    <option value="electronic">Electronic</option>
                    <option value="wearable">Wearable</option>
                  </Field>
                  <ErrorMessage component="span" name="category" />
                </div>
              </div>

              <div>
                <div className={classes.inputGroup}>
                  <label htmlFor="price">Price</label>
                  <Field
                    className={classes.formField}
                    type="number"
                    id="price"
                    name="price"
                    placeholder="ENTER PRICE"
                  />
                  <ErrorMessage component="span" name="price" />
                </div>

                <div className={classes.inputGroup}>
                  <label htmlFor="qty">Qty</label>
                  <Field
                    className={classes.formField}
                    type="number"
                    id="qty"
                    name="qty"
                    placeholder="ENTER QTY"
                  />
                  <ErrorMessage component="span" name="qty" />
                </div>
              </div>

              <div>
                <div className={classes.inputGroup}>
                  <label htmlFor="discount">Discount(%)</label>
                  <Field
                    className={classes.formField}
                    type="number"
                    id="discount"
                    name="discount"
                    placeholder="ENTER DISCOUNT"
                  />
                  <ErrorMessage component="span" name="discount" />
                </div>

                <div className={classes.inputGroup}>
                  <label htmlFor="gst">GST(%)</label>
                  <Field
                    className={classes.formField}
                    type="number"
                    id="gst"
                    name="gst"
                    placeholder="ENTER GST"
                  />
                  <ErrorMessage component="span" name="gst" />
                </div>
              </div>
              {!updateState ? (
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  className={classes.addButton}
                >
                  ADD
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="contained"
                  color="secondary"
                  className={classes.addButton}
                  onClick={updateData}
                >
                  UPDATE
                </Button>
              )}
            </Form>
          </Formik>
        </div>
      </div>

      {/* Display data in table Container */}
      <div className={classes.tableContainer}>
        <h4>PRODUCT LIST</h4>
        <div className={classes.tableInnerContainer}>
          {tableArray && (
            <ProductTable datas={tableArray} deleteFunc={deleteData} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
