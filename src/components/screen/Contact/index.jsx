import React from 'react'
import { Title } from '../../atoms/Title/style'
import {DivStyle} from './style'
import Contact from '../../molecules/ContactSection'

function index() {
  return (
    <>
    <Title>Contacta con Nosotros</Title>
    <DivStyle>
        <Contact></Contact>
    </DivStyle>
    </>
  )
}

export default index