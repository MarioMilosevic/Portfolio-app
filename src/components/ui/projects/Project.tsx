
const Project = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="flex flex-col gap-4 py-8">
      {children}
    </div>
  )
}

export default Project
