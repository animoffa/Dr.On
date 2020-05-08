import React from "react";
import css from "./Friends.module.css";
import defaultPhoto from "../../image/friends.png";
import unfollow from "../../image/unfollow.png";
import follow from "../../image/follow.png";
import music from "../../image/unnamed2.png";
import friends from "../../image/groups.png"
import message from "../../image/message.png";
import {NavLink} from "react-router-dom";
import Paginator from "./Paginator";

let Friends = (props) => {

    return <div className={css.page}>
        {
            props.users.map(u => <div key={u.id} className={css.user}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={css.photo} src={u.photos.small != null ? u.photos.small : defaultPhoto}
                                 alt="Open profile"/>
                        </NavLink>
                    </div>
                    <div className={css.info}>
                        <div>{u.name}</div>
                        <div className={css.info_location}>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>

                        </div>

                    </div>

                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} className={css.m}
                                      onClick={() => {
                                          props.unfollowThunk(u.id);
                                      }}>
                                <img src={unfollow} className={css.icons} width="60px" alt="unfollow"/></button>

                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.followThunk(u.id);
                            }} className={css.m}>
                                <img src={follow} className={css.icons} width="60px" alt="follow"/></button>
                        }
                    </div>
                    <div className={css.fade}>
                        <button className={css.m}><img src={message} className={css.icons} width="60px" alt={"message"}/></button>
                        <button className={css.m}><img src={music} className={css.icons} width="60px" alt={"music"}/></button>
                        <button className={css.m}><img src={friends} className={css.icons} width="60px" alt={"friends"}/></button>
                    </div>
                </div>
            )
        }
        <div>
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                       totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}/>
        </div>

    </div>
};
export default Friends;