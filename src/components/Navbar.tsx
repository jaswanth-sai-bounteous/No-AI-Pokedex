
const Navbar = () => {
  return (  
    <>
    <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">No AI POKEDEX</a>
  </div>
  <div className="flex gap-2">
    
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
          
            src="/POKEBALL.png" />
        </div>
      </div>
     
    </div>
  </div>
</div>
    </>
  )
}

export default Navbar
