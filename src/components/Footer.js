import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../actions";

const Footer = () => (
    <footer className="bg-primary columns" id="footer">
        <div className="column">
            <h5>Show: </h5>
        </div>
        <div className="column">
            <div className="btn-group btn-group-block">
                <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
                <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
                <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
            </div>
        </div>
    </footer>
);

export default Footer;
