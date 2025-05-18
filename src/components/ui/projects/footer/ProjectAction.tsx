const ProjectAction = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-full  hover:bg-slate-800">
      {children}
    </div>
  )
}

export default ProjectAction
