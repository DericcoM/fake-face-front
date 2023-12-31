import React, { useState } from 'react'
import { Space, Button } from 'antd'
import { Link, useLocation } from 'react-router-dom'

export const HeaderComponent: React.FC = () => {
  const location = useLocation()
  const [isPhotoPage, setIsPhotoPage] = useState(location.pathname === '/')
  const [isLivePage, setIsLivePage] = useState(location.pathname === '/live')
  const [isTakePicturePage, setIsTakePicturePage] = useState(location.pathname === '/photo')

  // Обработчики нажатия для кнопок
  const handlePhotoButtonClick = () => {
    setIsPhotoPage(true)
    setIsLivePage(false)
    setIsTakePicturePage(false)
  }

  const handleLiveButtonClick = () => {
    setIsPhotoPage(false)
    setIsLivePage(true)
    setIsTakePicturePage(false)
  }

  const handleTakePictureButtonClick = () => {
    setIsPhotoPage(false)
    setIsLivePage(false)
    setIsTakePicturePage(true)
  }

  return (
    <Space direction="vertical">
      <div
        style={{
          width: '100%',
          justifyContent: 'space-between',
          alignContent: 'center',
          display: 'flex',
          alignItems: 'center'
        }}>
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="248"
            height="77"
            viewBox="0 0 248 77"
            fill="none">
            <path
              d="M102.733 32.5167V57.3648H111.775V32.252C111.775 29.876 113.716 27.9504 116.111 27.9504H129.003V18.9805H116.377C108.842 18.9805 102.733 25.0406 102.733 32.5167Z"
              fill="#005AAA"
            />
            <path
              d="M161.463 18.9805L152.434 36.0703L142.452 18.9805H132.011L147.453 45.4423L146.486 47.1624C145.99 48.0994 145.019 48.6805 143.955 48.6805H137.562V57.6505H143.955C148.385 57.6505 152.419 55.235 154.485 51.3454L171.731 18.9805H161.463Z"
              fill="#005AAA"
            />
            <path
              d="M180.925 41.3894L186.501 30.819C187.336 29.0757 189.132 27.9498 191.077 27.9498H193.77C194.397 27.9498 194.907 28.4551 194.907 29.0779V41.3894H180.925ZM197.126 18.9809H191.077C185.663 18.9809 180.66 22.1148 178.414 26.814L162.289 57.3818H172.489L176.194 50.3594H194.907V57.3818H203.947V25.7485C203.947 22.0105 200.893 18.9809 197.126 18.9809Z"
              fill="#005AAA"
            />
            <path
              d="M240.565 18.9805H220.093C216.325 18.9805 213.271 22.0112 213.271 25.7481V57.2968H222.313V29.0698C222.313 28.4514 222.818 27.9505 223.44 27.9505H237.218C237.841 27.9505 238.346 28.4514 238.346 29.0698V57.2803H247.386V25.7481C247.386 22.0112 244.333 18.9805 240.565 18.9805Z"
              fill="#005AAA"
            />
            <path
              d="M36.4344 27.3922C25.4787 27.5295 0 28.8696 0 38.3163C0 48.466 29.5598 49.2559 38.62 49.2559C47.6802 49.2559 77.2401 48.466 77.2401 38.3163C77.2401 33.4919 71.2213 31.3796 66.694 30.2097C62.1258 29.0311 56.1204 28.1776 49.3011 27.7284C49.4562 30.0527 49.5613 32.4561 49.6111 34.9111C59.7597 35.6295 65.8094 37.1816 68.594 38.3295C64.5339 40.0014 54.2514 42.1049 38.62 42.1049C22.9211 42.1049 12.6309 39.9871 8.60292 38.312C12.4139 36.7082 21.8195 34.7288 36.5252 34.541C37.4885 34.5289 38.3886 34.1455 39.0607 33.4622C39.7327 32.779 40.0959 31.8761 40.0826 30.9205C40.0582 28.9751 38.4429 27.3922 36.4344 27.3922V27.3922Z"
              fill="url(#paint0_linear_527_51894)"
            />
            <path
              d="M27.5941 38.3152C27.5941 47.3038 28.3891 76.6304 38.6196 76.6304C43.4835 76.6304 45.6115 70.6614 46.7885 66.1731C47.961 61.7101 48.8424 55.6016 49.2908 48.9208C46.6158 49.0888 44.1334 49.1756 42.0541 49.2174C41.3289 59.2891 39.7634 65.2888 38.6074 68.0525C36.9223 64.0245 34.8009 53.8209 34.8009 38.3152C34.8009 22.7808 36.9267 12.5795 38.6141 8.56245C40.2339 12.4576 42.3044 22.1921 42.4328 36.9102C42.4494 38.8633 44.0659 40.4549 46.0677 40.4549C48.0529 40.4363 49.6561 38.8194 49.6395 36.8476C49.5598 27.6327 48.7228 18.9912 47.2857 12.5136C45.3901 3.97646 42.6365 0.00109462 38.6196 0.00109462C28.3891 0.00109462 27.5941 29.3265 27.5941 38.3152Z"
              fill="url(#paint1_linear_527_51894)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_527_51894"
                x1="0.000276799"
                y1="38.3236"
                x2="77.2404"
                y2="38.3236"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#45C3F3" />
                <stop offset="0.5" stopColor="#1671C2" />
                <stop offset="0.959876" stopColor="#2056AE" />
                <stop offset="1" stopColor="#2056AE" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_527_51894"
                x1="38.617"
                y1="76.6303"
                x2="38.617"
                y2="0.000282786"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#2056AE" />
                <stop offset="0.25" stopColor="#2056AE" />
                <stop offset="0.280093" stopColor="#2056AE" />
                <stop offset="0.625" stopColor="#A32B9B" />
                <stop offset="1" stopColor="#ED1443" />
              </linearGradient>
            </defs>
          </svg>
        </Link>
      </div>
      <Space direction="horizontal">
        <Link to="/">
          <Button type={isPhotoPage ? 'primary' : 'default'} onClick={handlePhotoButtonClick}>
            Photo
          </Button>
        </Link>
        <Link to="/live">
          <Button type={isLivePage ? 'primary' : 'default'} onClick={handleLiveButtonClick}>
            Live
          </Button>
        </Link>
        <Link to="/photo">
          <Button
            type={isTakePicturePage ? 'primary' : 'default'}
            onClick={handleTakePictureButtonClick}>
            Take picture
          </Button>
        </Link>
      </Space>
    </Space>
  )
}
