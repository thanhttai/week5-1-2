import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import avatar from '../img/img.webp'

function ListItem({ data }) {
    console.log(data);
    return (
        <div class="col l-3 mr">
            <div class="card">
                <h3 class="heading-card">{data.city}</h3>
                <div class="container__img">
                    <img src={avatar}
                        alt="" class="img-company" />
                </div>
                <h4>{data.title}</h4>
                <h5 class="heading-card-sub">salaryHigh :{data.salaryHigh}</h5>
                <span class="quantity">salaryLow: {data.salaryLow}</span>
                <div class="card-body">
                    <p class="card-text">{data.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ListItem;