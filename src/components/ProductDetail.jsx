import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const ProductDetail = (props) => {
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 2000);
    }, []);
    let ProductDetail = <Loading />;
    if (loader === false) {
        ProductDetail = (
            <div className="card container">
                <div className="card-body text-center">
                    <h5 className="card-title ">
                        {" "}
                        <b>Name:</b> {props.details.name}{" "}
                    </h5>

                    <h5 className="card-title">
                        {" "}
                        <b>Price:</b> {props.details.price}{" "}
                    </h5>

                    <h5 className="card-title">
                        {" "}
                        <b>Deatils:</b> {props.details.description}{" "}
                    </h5>
                    <p className="card-text">
                        {" "}
                        <b>category:</b> {props.details.categorY}
                    </p>
                    <button
                        className="btn btn-primary"
                        onClick={props.onBackBtn}
                    >
                        Go to Back
                    </button>
                </div>
            </div>
        );
    }
    return <>{ProductDetail}</>;
};

export default ProductDetail;
