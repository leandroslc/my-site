import S from './Loader.module.css'

export const Loader = () => {
  return (
    <div className={S.container}>
      <div className={S.spinner} />
    </div>
  )
}
