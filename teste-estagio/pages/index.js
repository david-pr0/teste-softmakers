import Layout from "@/app/layout";
import Tables from "@/components/Table";
import { useState, useEffect } from 'react';

export default function Home() {

  const [totalPages, setTotalPages] = useState(1); 
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 12; 
  const totalItems = 13; 

  useEffect(() => {
    const calculatedTotalPages = Math.ceil(totalItems / itemsPerPage);
    setTotalPages(calculatedTotalPages);
  }, 
  [totalItems, itemsPerPage]);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Layout>
      <Tables />
    </Layout>
  )
}
