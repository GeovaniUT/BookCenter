import React, { useState, useEffect } from "react";
import './category.css';
import Books from "./books";
import { Link } from "react-router-dom";


export default function Category() {
    
    const [books, setBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("3");
    const urlBooksForCategory = `http://localhost:9001/booksForCategory?category_id=${selectedCategory}`

    useEffect(() => {
        const getBooksForCategory = async () => {
            
            try {
                const response = await fetch(urlBooksForCategory, {
                    method: "GET"
                });

                const list = await response.json();
                setBooks(list.Books[0]);
                
            } catch (error) {
                console.error('Error al cargar los libros:', error);
            }
        };

        getBooksForCategory();
    }, [selectedCategory]);

    const CategoryChange = (category) => {
        setSelectedCategory(category);
    };
 
    return (
        <>
            <div className="">
                <ul className="category">
                    <li className="line link" onClick={() => CategoryChange("3")}>Fantasia</li>
                    <li className="line link" onClick={() => CategoryChange("2")}>Terror</li>
                    <li className="line link" onClick={() => CategoryChange("4")}>Ficción</li>
                    <li className="line link" onClick={() => CategoryChange("1")}>Romance</li>
                    <li className="link" onClick={() => CategoryChange("5")}>Misterio</li>
                </ul>
            </div>

            <div className="books">
                {books.map((book, index) => (
                    <div key={index} className="content-book">
                        <Link to={`/Book/${book.id_books}`}><img className="book"  src={`http://localhost:9001/category${book.image}`} alt={`Book ${index + 1}`} /></Link> 
                                        
                    </div>
                    
                    
                ))}
            </div>
        </>
    );

}