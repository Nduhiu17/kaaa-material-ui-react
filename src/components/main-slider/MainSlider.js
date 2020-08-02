/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{Fragment} from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper, Toolbar, Typography} from '@material-ui/core'

//images
import imgOne from '../../assets/slider/1.jpg'
import imgTwo from '../../assets/slider/2.jpg'
import imgThree from '../../assets/slider/3.jpg'
import imgFour from '../../assets/slider/4.jpg'
import imgFive from '../../assets/slider/5.jpg'
import imgSix from '../../assets/slider/6.jpeg'
import imgSeven from '../../assets/slider/7.jpeg'
import imgEight from '../../assets/slider/12.jpg'
 
export default function MainSlider(props)
{
    var items = [
        {
            image: <img src = {imgOne} alt="image one" className={""}/>
        },
        {
            image: <img src = {imgTwo} alt="image one"/>
        },
        {
            image: <img src = {imgThree} alt="image one"/>
        },
        {
            image: <img src = {imgFour} alt="image one"/>
        },
        {
            image: <img src = {imgFive} alt="image one"/>
        },
        {
            image: <img src = {imgSix} alt="image one"/>
        },
        {
            image: <img src = {imgSeven} alt="image one"/>
        },
        {
            image: <img src = {imgEight} alt="image one"/>
        }
    ]
 
    return (
        <Fragment>
            <Carousel>
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
            <Typography variant={"h3"}>Kenyan Australian Alumni Association
            </Typography>
            <p variant={"h6"}>We are a association affiliated with the Australia. The members are alumni of various australian university through scholarship or privately funded. Our main aim is to intergrate the alumni that have graduated in Australia and help make good networks.
            </p>
        </Fragment>

    )
}
 
function Item(props)
{
    return (
            <div className="image-wrapper">
                {props.item.image}
            </div>
    )
}