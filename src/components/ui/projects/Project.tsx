
const Project = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="flex flex-col md:gap-8 gap-4 mb-12 md:mb-8">
      {children}
    </div>
  )
}

export default Project
