import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const IndividualDetail = () => {
  const { id } = useParams();
  console.log(id);
  const [student, setStudent] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `http://localhost:4000/api/v1/student/${id}`
        );
        console.log(data);
        setStudent(data.data);
        console.log(student);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <h1 class="sm:text-3xl mt-3 mb-3 text-3xl font-medium title-font text-white">
          Individual Detail
        </h1>
        <div className="row">
          <div className="col"></div>
          <div style={{ marginLeft: "-10px" }} className="col">
            <table className="table table-dark">
              {" "}
              <thead>
                <tr>
                  <th scope="col">Full Name</th>
                  <th scope="col">
                    {student.firstName} {student.middleName} {student.lastName}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Roll No</td>
                  <td>{student.rollno}</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td> {student.address} </td>
                </tr>
                <tr>
                  <td>Parents Name</td>
                  <td>{student.parentsName} </td>
                </tr>
                <tr>
                  <td>Class</td>
                  <td>{student.className}</td>
                </tr>
                <tr>
                  <td>Section</td>
                  <td>{student.section === "" ? "None" : student.section}</td>
                </tr>
                <tr>
                  <td>Parents Number</td>
                  <td>{student.parentsContactNumber}</td>
                </tr>
                <tr>
                  <td>Fee Paid</td>
                  <td>Rs.{student.feesPaid}</td>
                </tr>
                <tr>
                  <td>Fee Left</td>
                  <td>
                    Rs.
                    {parseInt(student.feesTotal) - parseInt(student.feesPaid)}
                  </td>
                </tr>

                <tr>
                  <td colSpan={2}>
                    <Link
                      to={`/individual-detail-update/${student._id}`}
                      class="btn btn-success"
                    >
                      Update
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};

export default IndividualDetail;
