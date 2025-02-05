import React from "react";

const Breadcrumbs = ({ page_header_details }) => {
  return (
    <div className="rs-breadcrumbs img1">
      <div className="">
        <div className="breadcrumbs-inner">
          <h1 className="page-title">{page_header_details.header_name}</h1>
          {/* <ul
                        className="breadcrumbs-area"
                    >
                        <li title="Go to home">
                            <a className="active" href="/">
                                Home
                            </a>
                        </li>
                        <li>{page_header_details.header_current_page_name}</li>
            </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
