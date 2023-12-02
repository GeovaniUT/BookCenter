import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './books.css'
import { Link } from "react-router-dom";
export default function Books() {
    const { idBook } = useParams();
 
    const urlBookID = `http://localhost:9001/getBookForId?id_books=${idBook}`;
    const [book, setBook] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getBooksForId = async () => {
            try {
                const response = await fetch(urlBookID, {
                    method: "GET",
                });

                if (!response.ok) {
                    throw new Error(`Error fetching book: ${response.status}`);
                }

                const item = await response.json();
                console.log("Data from API:", item);

                setBook(item.Books);
            } catch (error) {
                console.error("Error fetching books:", error);
                setError("Error al obtener detalles del libro.");
            }
        };

        getBooksForId();
    }, [urlBookID]);


    
    return (
        <>
            {book.length > 0 && (
                <div className="">
                    {book.map((bookItem) => (
                        <div key={bookItem.id_books}>       
                            <div className="viewBook"> 
                                <img
                                    className="bookItem"
                                    src={`http://localhost:9001/category${bookItem.image}`}
                                    alt={bookItem.title}
                                /> 
                                <div className="dataBook"v>
                                    <p>Título: <a className="style">{bookItem.title}</a></p> 
                                    <br></br>
                                    <p>Autor: <a className="style">{bookItem.author}</a></p>
                                    <br></br>
                                    <p>Páginas: <a className="style">{bookItem.pages}</a></p>
                                    <br></br>
                                    <a  href={`http://localhost:9001/category/${bookItem.url}`} target="_blank"><button className="read">Leer</button></a>
                                    <br></br>
                                    
                                </div>        
                            </div>
                            
                        </div>
                        
                        
                    ))}
                </div>
            )}
        </>
    );
}
