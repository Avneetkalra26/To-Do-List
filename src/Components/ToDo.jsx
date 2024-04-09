import React from "react";
import style from "../CssModule/TodoCss.module.css";
import ToDoItem from "./ToDoItem";
export default function ToDo({ tasks }) {
  return (
    <>
      <div className={`${style.m}`}>
        <h2 id={style.h2}>To Do List</h2>
        {tasks.length == 0 ? ( 
          <div className="alert alert-danger" role="alert">
            No Items Found
          </div>
        ) : (
          <table className="table table-hover">
            <thead>
              <tr className="table-dark">
                <th scope="col">S.No.</th>
                <th scope="col">Title</th>
                <th scope="col">Desc</th>
                <th scope="col">Remark</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((value, index) => {
                return (
                  <ToDoItem v={value} i={index} key={index} />

                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}


