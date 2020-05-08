import React, {useState} from "react";
import css from "./Paginator.module.css";
import cn from "classnames";
import Left from "../../image/icons8-стрелка-влево-в-круге-50.png"
import Right from "../../image/icons8-стрелка-вправо-в-круге-50.png"

let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let page = [];
    for (let i = 1; i <= pagesCount; i++) {
        page.push(i);
    }
    let portionCount=Math.ceil(pagesCount/10);
    let [portionNumber,setPortionNumber]=useState(1);
    let leftPortionPageNumber=(portionNumber-1) * (10+1);
    let rightPortionPageNumber=(portionNumber)*10;

    return <div className={css.paginator}>
        {portionNumber>1 && <button className={css.icons} onClick={()=>{setPortionNumber(portionNumber-1)}}><img src={Left} width="30px" alt="PREV"/></button>}
            {
                page.filter(p=> p>=leftPortionPageNumber && p<=rightPortionPageNumber )
                    .map((p)=> {
                        return <span className={cn({[css.selectedNum]: props.currentPage===p},css.num) }
                                     key={p}
                                     onClick={(e) => {
                            props.onPageChanged(p)
                        }}>{p}</span>
                })
            }
        {portionCount>portionNumber && <button className={css.icons} onClick={()=>{setPortionNumber(portionNumber+1)}}><img src={Right} width="30px" alt={"NEXT"}/></button> }
        </div>

};
export default Paginator;