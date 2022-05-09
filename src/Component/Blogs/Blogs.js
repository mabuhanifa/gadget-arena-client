import React from "react";
import './Blogs.css';

const Blogs = () => {
  return (
    <div className="container-lg c_t">
      <h2 className="text-center mt-5">Difference between javascript and nodejs</h2>
      <div className="d-flex w-t">
        <p className="w-t text-center"> <h4 className="text-center ">Javascript</h4>
          <br />
          JavaScript is a client-side scripting language used to create dynamic web pages. It is a subset of the ECMAScript standard. It is also known as client-side JavaScript. JavaScript is a high-level, interpreted programming language. It is a dialect of the ECMAScript language. JavaScript is a lightweight, interpreted language. It is not compiled to machine code, and it supports object-oriented, dynamic, and prototype-based programming. JavaScript is a multi-paradigm language, supporting first-class functions, dynamic typing, prototype-based object-orientation, and more.

        </p>
        <p className="w-t text-center">
          <h4 className="text-center">Nodejs</h4>
          <br />
          Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js supports the ECMAScript (JavaScript) standard. Node.js is a collection of modules that provides a large set of useful libraries for node.js. Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications.

        </p>
      </div>
      <h2 className="text-center mt-5">Differences between sql and nosql databases.</h2>
      <div className="d-flex w-t">
        <p className="w-t text-center">
          <h4>SQL Database</h4>
          <br />
          SQL database is a Structured Query Language based database system. SQL is a relational database management system. SQL allows access and manipulation of databases. Structured Query Language or SQL is a standard Database language which is used to create, maintain and retrieve the data from relational databases like MySQL, Oracle, SQL Server, PostGre, etc. The recent ISO standard version of SQL is SQL:2019. SQL databases are vertically scalable. SQL databases are also table-based and this type of  databases are better for multi-row transactions.
        </p>
        <p className="w-t text-center">
          <h4>NoSQL Database</h4>
          <br />
          NoSQL database is a non-relational database system. NoSQL is also a database management system. NoSQL is a database that is not based on a relational model. NoSQL databases are not vertically scalable. NoSQL databases are not table-based. NoSQL databases are better for single-row transactions. NoSQL databases are also designed to be highly available. NoSQL is better for unstructured data like documents or JSON. In term of compatibility  NoSQL varies more widely and dependencies need to be investigated more carefully .


        </p>
      </div>
      <h2 className="text-center mt-5">What is the purpose of jwt and how does it work</h2>
      <div className="w-t text-center">
       <p className="w-t">
          <h4>JWT</h4>
          <br />
          JWT(JSON Web Token) is a standard for representing claims to be transferred between two parties. JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties.  The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted. JWT is lightweight and easy to use by client applications: for example, mobile applications.The claims in a JWT are encoded as a JSON object and are normally digitally signed with a Message Authentication Code (MAC). The most common scenario for using a JWT is authentication. When the user is logged in, each subsequent request includes the JWT, which allows the user to access services that are permitted by that token.
       </p>
      </div>
    </div>
  );
};

export default Blogs;
