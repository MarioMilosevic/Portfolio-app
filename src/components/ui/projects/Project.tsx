
const Project = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="border flex flex-col gap-4">
      {children}
    </div>
  )
}

export default Project
