import React from "react";
import { Link, NavLink } from "react-router-dom";

const Class = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full">
              {" "}
              <Link style={{ textDecoration: "none" }} to={`/classes/1`}>
                <div
                  style={{ backgroundColor: "#D8DFE6", height: "60px" }}
                  className="block relative h-48 rounded overflow-hidden"
                >
                  <h1
                    style={{
                      fontSize: "35px",
                      fontWeight: "bold",
                      color: "black",

                      opacity: "0.7",
                      marginTop: "5px",
                    }}
                  >
                    Class 1
                  </h1>
                </div>
              </Link>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full">
              <Link style={{ textDecoration: "none" }} to={`/classes/2`}>
                <div
                  style={{ backgroundColor: "#D8DFE6", height: "60px" }}
                  className="block relative h-48 rounded overflow-hidden"
                >
                  <h1
                    style={{
                      fontSize: "35px",
                      fontWeight: "bold",
                      color: "black",
                      opacity: "0.7",
                      marginTop: "5px",
                    }}
                  >
                    Class 2
                  </h1>
                </div>
              </Link>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full">
              <Link style={{ textDecoration: "none" }} to={`/classes/3`}>
                <div
                  style={{ backgroundColor: "#D8DFE6", height: "60px" }}
                  className="block relative h-48 rounded overflow-hidden"
                >
                  <h1
                    style={{
                      fontSize: "35px",
                      fontWeight: "bold",
                      color: "black",
                      opacity: "0.7",
                      marginTop: "5px",
                    }}
                  >
                    Class 3
                  </h1>
                </div>
              </Link>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full">
              <Link style={{ textDecoration: "none" }} to={`/classes/4`}>
                <div
                  style={{ backgroundColor: "#D8DFE6", height: "60px" }}
                  className="block relative h-48 rounded overflow-hidden"
                >
                  <h1
                    style={{
                      fontSize: "35px",
                      fontWeight: "bold",
                      color: "black",
                      opacity: "0.7",
                      marginTop: "5px",
                    }}
                  >
                    Class 4
                  </h1>
                </div>
              </Link>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full">
              <Link style={{ textDecoration: "none" }} to={`/classes/5`}>
                <div
                  style={{ backgroundColor: "#D8DFE6", height: "60px" }}
                  className="block relative h-48 rounded overflow-hidden"
                >
                  <h1
                    style={{
                      fontSize: "35px",
                      fontWeight: "bold",
                      color: "black",
                      opacity: "0.7",
                      marginTop: "5px",
                    }}
                  >
                    Class 5
                  </h1>
                </div>
              </Link>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full">
              <div
                style={{ backgroundColor: "#D8DFE6", height: "60px" }}
                className="block relative h-48 rounded overflow-hidden"
              >
                <h1
                  style={{
                    fontSize: "35px",
                    fontWeight: "bold",
                    color: "black",
                    opacity: "0.7",
                    marginTop: "5px",
                  }}
                >
                  Class 6
                </h1>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full">
              <div
                style={{ backgroundColor: "#D8DFE6", height: "60px" }}
                className="block relative h-48 rounded overflow-hidden"
              >
                <h1
                  style={{
                    fontSize: "35px",
                    fontWeight: "bold",
                    color: "black",
                    opacity: "0.7",
                    marginTop: "5px",
                  }}
                >
                  Class 7
                </h1>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full">
              <div
                style={{ backgroundColor: "#D8DFE6", height: "60px" }}
                className="block relative h-48 rounded overflow-hidden"
              >
                <h1
                  style={{
                    fontSize: "35px",
                    fontWeight: "bold",
                    color: "black",
                    opacity: "0.7",
                    marginTop: "5px",
                  }}
                >
                  Class 8
                </h1>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full">
              <div
                style={{ backgroundColor: "#D8DFE6", height: "60px" }}
                className="block relative h-48 rounded overflow-hidden"
              >
                <h1
                  style={{
                    fontSize: "35px",
                    fontWeight: "bold",
                    color: "black",
                    opacity: "0.7",
                    marginTop: "5px",
                  }}
                >
                  Class 9
                </h1>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full">
              <div
                style={{ backgroundColor: "#D8DFE6", height: "60px" }}
                className="block relative h-48 rounded overflow-hidden"
              >
                <h1
                  style={{
                    fontSize: "35px",
                    fontWeight: "bold",
                    color: "black",
                    opacity: "0.7",
                    marginTop: "5px",
                  }}
                >
                  Class 10
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Class;
