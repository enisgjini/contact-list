import React, { useState, useEffect } from "react";
import "../App.css";

export default function ContactList() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResults(data.results);
      });
  }, []);

  return (
    <div className="container">
      <div>
        <br />
      </div>

      <table>
        <thead>
          <tr>
            <th>Profile</th>
            <th>First and last name</th>
            <th>Email</th>
            <th>Birthday</th>
            <th>Address</th>
            <th>Phone number</th>
          </tr>
        </thead>
        <br />
        {results.map((result, index) => {
          return (
            <>
              <tbody>
                <tr>
                  <td>
                    <img src={result.picture.thumbnail} alt="" />
                  </td>
                  <td>
                    {result.name.first}
                    {result.name.last}
                  </td>
                  <td>{result.email}</td>
                  <td>{result.dob.date}</td>
                  <td>
                    {result.location.city},{result.location.country},
                    {result.location.postcode},{result.location.street.name}
                  </td>
                  <td>{result.phone}</td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
}
