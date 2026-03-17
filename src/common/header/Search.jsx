import React from "react"
// import cipher1 from "../../components/assets/images/cipher.png"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
// import Login from "../login/Login"
const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            {/* <img src={cipher1} alt='' /> */}
            <h2 align="center">CIPHER</h2>
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div>

          <div className='icon f_flex width'>
            <div className='login'>
              <NavLink className="abc" to='Login'>
                <i className='fa fa-user icon-circle'></i>
              </NavLink>
            </div>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
