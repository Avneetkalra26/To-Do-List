import React, { useState } from "react";
import style from "../CssModule/TodoCss.module.css";

export default function AddTasks(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [remarks, setRemarks] = useState("");
  const todoItem = {
    title: title,
    desc: desc,
    remarks: remarks
  }
  return (
    <div className={`${style.m}`}>
      <div className="card mb-5">
        <div className="card-body">
          <div className="card-title">
            <h2 id={style.h2}>Add Tasks</h2>
          </div>
          <div className="row mb-3">
            <div className="col">
              <input id="title"
                type="text"
                placeholder="Title"
                className="form-control"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value)
                }}
              />
            </div>
            <div className="col">
              <input
                type="text"
                placeholder="Description"
                className="form-control"
                value={desc}
                onChange={(e) => {
                  setDesc(e.target.value)
                }}
              />
            </div>
            <div className="col">
              <input
                type="text"
                placeholder="Remarks"
                className="form-control"
                value={remarks}
                onChange={(e) => {
                  setRemarks(e.target.value)
                }}
              />
            </div>
          </div>

          <button
            type="button"
            className={` btn btn-outline-danger ${style.button}`}
            onClick={(event) => {
              props.send(todoItem);
              setTitle("");
              setDesc("");
              setRemarks("");
            }}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}
