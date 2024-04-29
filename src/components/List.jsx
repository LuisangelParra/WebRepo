import React, { useState, useEffect } from "react";
import { CardInput } from "./Card";
import ReactPaginate from "react-paginate";
import { Button } from "@material-tailwind/react";
import { SearchBar } from "./SearchBar";


export const List = ({ apps }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [columns, setColumns] = useState(4); // Inicialmente, 4 columnas

  const appsPerPage = 8;
  const pagesVisited = pageNumber * appsPerPage;
  const pageCount = Math.ceil(apps.length / appsPerPage);

  useEffect(() => {
    function handleResize() {
      // Ajusta el número de columnas en función del ancho de la pantalla
      if (window.innerWidth < 768) {
        setColumns(2); // Si la pantalla es pequeña, muestra 2 columnas
      } else {
        setColumns(4); // De lo contrario, muestra 4 columnas
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Ejecuta este efecto solo una vez al montar el componente

  const filteredApps = apps.filter(app =>
    app.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex flex-col items-center">
        <SearchBar onSearchChange={handleSearchChange} />
      <div className={`grid grid-cols-${columns} gap-16 p-10 justify-items-center`}>
        {filteredApps.slice(pagesVisited, pagesVisited + appsPerPage).map((app) => (
          <CardInput key={app.id} app={app} />
        ))}
      </div>
      <ReactPaginate
        className="flex flex-row gap-4"
        previousLabel={<Button color="blue">← Previous</Button>}
        nextLabel={<Button color="blue">Next →</Button>}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

