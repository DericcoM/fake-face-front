import { useStore } from 'effector-react'
import { featureModel } from '../models'
import { Alert } from 'antd'
import { FACE_STATUS } from '../../../common/const'
import { Loader } from '../../Loader'

export const Status = () => {
  const faceStatus = useStore(featureModel.$faceStatus)
  const isFetching = useStore(featureModel.$isFetching)
  console.log('FACE SATTUS', faceStatus)
  const time = new Date().toLocaleTimeString()

  if (!faceStatus) return null

  let alert

  if (faceStatus.value === FACE_STATUS.REAL) {
    alert = <Alert message={`Реальное фото. Время: ${time}`} type="success" showIcon />
  } else if (faceStatus.value === FACE_STATUS.FAKE) {
    alert = <Alert message={`Фейковое фото. Время: ${time}`} type="warning" showIcon />
  } else if (faceStatus.value === FACE_STATUS.NO_FACE) {
    alert = <Alert message={`На фото не обнаружено лица. Время: ${time}`} type="info" showIcon />
  } else {
    alert = (
      <Alert message={`Неизвестное значение статуса. Время: ${time}`} type="warning" showIcon />
    )
  }

  return (
    <>
      {alert}
      <Loader spinning={isFetching} />
    </>
  )
}
