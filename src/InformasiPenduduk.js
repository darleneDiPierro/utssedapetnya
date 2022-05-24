import React from 'react';
import './style/informasi.css';

const InformasiPenduduk = () => {
  return (
    <div className="informasi">
      <h1>Cari dengan Nama / NIK : </h1>
      <div className="search-bar">
        <input type='text'/>
        <div className="search-icon">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      <div className="status">
        <h1>Status Pidana: </h1>
      </div>
    </div>
  )
}

export default InformasiPenduduk;
