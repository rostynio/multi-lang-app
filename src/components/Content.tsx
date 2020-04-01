import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../styles/App.css'

interface ListItem {
  id: number
  value: string
}

interface Props {
  itemsList: Array<ListItem>
  showLink?: boolean
}

const Content = ({ itemsList, showLink = false}: Props) => {
  const { t } = useTranslation()
  return (
    <div className='content-wrapper'>
      <ul>{itemsList && itemsList.map(el => <li key={el.id}>{t(`${el.value}`)}</li>)}</ul>
      {showLink && <Link to='/films_list'>Also you can check a lit of movies by clicking this text</Link>}
    </div>
  )
}

export default Content
