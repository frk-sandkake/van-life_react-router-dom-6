import React from "react";
import { NavLink, Outlet } from "react-router-dom/dist";

export default function LayoutHost() {

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
      }

    return (
        <>
            <nav className="host-nav">
                <NavLink
                 to='/host'
                 end
                 style={({isActive}) => isActive ? activeStyles : null}
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to='/host/income'
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Income
                </NavLink>
                <NavLink
                 to='/host/reviews'
                 style={({isActive}) => isActive ? activeStyles : null}
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}