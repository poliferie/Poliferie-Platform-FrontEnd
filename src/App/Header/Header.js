import React from "react";

function Header() {
  return (
    <div className="Header">
      <nav className="navbar fixed-bottom container ">
        <div class="row w-100">
          <div class="col" align="center">
            {/*<p>Recent</p>*/}
            <i class="fas fa-heart" />
          </div>
          <div class="col" align="center">
            {/*<p>Search</p>*/}
            <i class="fas fa-search" />
          </div>
          <div class="col" align="center">
            {/*<p>Profile</p>*/}
            <i class="fas fa-user " />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
