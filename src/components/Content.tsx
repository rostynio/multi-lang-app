import React from 'react'
import { useTranslation } from 'react-i18next'
import '../styles/App.css'

interface ListItem {
  id: number
  value: string
}

interface Props {
  itemsList: Array<ListItem>
}

const Content = ({ itemsList }: Props) => {
  const { t } = useTranslation()
  return (
    <div className='content-wrapper'>
      <ul>{itemsList && itemsList.map(el => <li key={el.id}>{t(`${el.id}`)}</li>)}</ul>
    </div>
  )
}

export default Content
