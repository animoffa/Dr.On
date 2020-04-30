import React from "react";
import css from "./FormControls.module.css";

export const Textarea=({input,meta, ...props})=>{
    const error=meta.touched && meta.error ;
    return (
        <div className={css.formcontrol + " "+(error? css.error: "")}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            { error && <span>{meta.error}</span>}
        </div>
    )
};

export const Input=({input,meta, ...props})=>{
    const error=meta.touched && meta.error ;
    return (
        <div className={css.formcontrol + " "+(error? css.error: "")}>
            <div>
                <input {...input} {...props}/>
            </div>
            { error && <span>{meta.error}</span>}
        </div>
    )
};