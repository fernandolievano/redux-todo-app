import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onClick, completed, text }) => (
    <li
        style={{
            textDecoration: completed ? "line-through" : "none"
        }}
        className="todo"
    >
        <div className="tile tile-centered">
        <div className="tile-content">
            <h3 className="title-title">- {text}</h3>
        </div>
        <div className="tile-action">
            <span className={`btn btn-sm" ${completed ? "btn-error" : "btn-success"}`} onClick={onClick}>
                <i className={completed ? "icon icon-cross": "icon icon-check"}></i>
            </span>
        </div>
        </div>
    </li>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo;
