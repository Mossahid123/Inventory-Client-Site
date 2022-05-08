import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='bolgs-container'>
            <div className='w-50 mx-auto'>
                <h1>Difference between javascript and nodejs</h1>
                <p>
                    <h3>1. NodeJS :</h3>
                    NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>
                <p>
                  <h3>     2. JavaScript :</h3>
                    Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                </p>
            </div>
            <div className='w-50 mx-auto'>
                <h1> Differences between sql and nosql databases</h1>
                <p>
                     <h3>SQL</h3>
                     <p>
                     SQL (pronounced “ess-que-el”) stands for Structured Query Language. SQL is used to communicate with a database. According to ANSI (American National Standards Institute), it is the standard language for relational database management systems. SQL statements are used to perform tasks such as update data on a database, or retrieve data from a database. Some common relational database management systems that use SQL are: Oracle, Sybase, Microsoft SQL Server, Access, Ingres
                     </p>
                     <h3>NO SQL</h3>
                     <p>
                     NoSQL databases (aka "not only SQL") are non-tabular databases and store data differently than relational tables. NoSQL databases come in a variety of types based on their data model. The main types are document, key-value, wide-column, and graph. They provide flexible schemas and scale easily with large amounts of data and high user loads.
                     </p>
                     <h3></h3>

                </p>
            </div>
        </div>
    );
};

export default Blogs;