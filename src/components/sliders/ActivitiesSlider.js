/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{Fragment} from 'react';
import Carousel from 'react-material-ui-carousel'
import {Typography} from '@material-ui/core'

//images
import imgOne from '../../assets/activities/2.jpg'
import imgTwo from '../../assets/activities/3.jpg'
import imgThree from '../../assets/activities/4.jpg'
import imgFour from '../../assets/activities/5.jpg'
import imgFive from '../../assets/activities/6.jpg'
import imgSix from '../../assets/activities/8.jpg'
import imgNine from '../../assets/activities/9.jpg'
import img13 from '../../assets/activities/13.jpg'
 
export default function ActivitiesSlider(props)
{
    var items = [
        {
            image: <img src = {imgOne} alt="Rwanda"/>,
            title: "A team comprising of ladies from Rwanda, Uganda, Tanzania, Ethiopia and Kenya graduated after attending an Executive Women in Leadership course."
        },
        {
            image: <img src = {imgTwo} alt="AGM"/>,
            title: "AGM 2019 held at all saints cathedral"
        },
        {
            image: <img src = {imgThree} alt="Former chair"/>,
            title: "Former chair and current ambassador Charles Ngunjiri and Philip Langat representing us in Pretoria in feb 2019"
        },
        {
            image: <img src = {imgFour} alt="WILN"/>,
            title: "WILN training attended by KAAA members held in Sourthern sun hotels"
        },
        {
            image: <img src = {imgFive} alt="High Commision"/>,
            title: "High Commissioner Alison Chartres hosted the representatives from the Australian Universities for a reception at Australia House at the end of their trip to Kenya."
        },
        {
            image: <img src = {imgSix} alt="Allumni"/>,
            title: "Alumni donated medical supplies and household items to the National Spinal Injury Hospital"
        },
        {
            image: <img src = {imgNine} alt="children home"/>,
            title: "It was humbling to spend the morning with the children of Angel Centre that is run by one of our alumni"
        },
        {
            image: <img src = {img13} alt="social dinner"/>,
            title: "Our social dinner... We are enjoying ourselves, getting to know one another and networking!"
        }
    ]
 
    return (
        <Fragment>
            <Carousel>
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        </Fragment>

    )
}
 
function Item(props)
{
    return (
            <div className="image-wrapper-2">
                <Typography component="p">
                {props.item.title}
                </Typography>
                {props.item.image}
            </div>
    )
}