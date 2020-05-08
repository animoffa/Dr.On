import React from "react";
import css from "./FormControls.module.css";

export const Textarea=({input,meta, ...props})=>{
    const error=meta.error ;
    return (
        <div className={css.formControl + " "+(error? css.error: "")}>
                <textarea {...input} {...props}/>
            { error && <span>{meta.error}</span>}
        </div>
    )
};

export const Input=({input,meta, ...props})=>{
    const error=meta.touched && meta.error ;
    return (
        <div className={css.formControl + " "+(error? css.error: "")}>
            <div>
                <input {...input} {...props} className={css.field}/>
            </div>
            { error && <span>{meta.error}</span>}
        </div>
    )
};