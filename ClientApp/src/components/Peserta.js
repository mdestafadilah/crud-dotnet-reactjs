import React from 'react'
import PesertaForm from './PesertaForm'

export const Peserta = () => {

  const handleOnSubmit = (peserta) => {
    console.log(peserta);
  }

  return (
    <div>
      <PesertaForm handleSubmit={handleOnSubmit}/>
    </div>
  )
}
