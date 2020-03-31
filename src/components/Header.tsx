import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import { useTranslation } from 'react-i18next'
import '../styles/App.css'

type OptionType = {
  value: string
  label: string
}

const options: OptionType[] = [
  { value: 'en', label: 'English' },
  { value: 'ar', label: 'Arabian' },
]

const Header = () => {
  const [selectedOption, setSelectedOption] = useState<OptionType>(options[0])
  const { i18n } = useTranslation()
  const { language } = i18n
  useEffect(() => {
    const html = document.querySelector('html')
    html!.setAttribute('dir', i18n.dir(language))
  }, [i18n, language, selectedOption])
  const handleChange = (option: any) => {
    setSelectedOption(option)
    i18n.changeLanguage(option.value)
  }
  return (
    <header>
      <p>What to do on quarantine?</p>
      <div className='select-wrapper'>
        <Select options={options} value={selectedOption} onChange={option => handleChange(option)} />
      </div>
    </header>
  )
}

export default Header
