import React from 'react';
import './style/data.css';

const DataPenduduk = () => {
  return (
    <div className="data">
    <h1>Masukkan Data Penduduk: </h1> 
      <form>
        <label className="lemper">
          Nama:
          <input type='text' />
        </label>
        <label className="lemper">
          Umur:
          <input type='number' />
        </label>
        <label className="lemper">
          Pekerjaan:
          <input type='text' />
        </label>
        <label className="lemper">
          Kewarganegaraan:
          <input type='text' />
        </label>
        <label className="lemper">
          Status Pidana:
          <input type='text' />
        </label>
        <button>submit</button>
      </form>
    </div>
  )
}

export default DataPenduduk;
