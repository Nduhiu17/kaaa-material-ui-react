/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{Fragment} from 'react';
import Carousel from 'react-material-ui-carousel'
import { Typography } from '@material-ui/core'

//images
import imgOne from '../../assets/our-team/1.jpeg'
import imgThree from '../../assets/our-team/3.jpeg'
import imgFour from '../../assets/our-team/4.jpeg'
import imgFive from '../../assets/our-team/5.jpeg'
import imgSix from '../../assets/our-team/onespol.jpeg'
 
export default function ObjectiveSlider(props)
{
    var items = [
        {
            image: <img src = {imgOne} alt="Treasurer"/>,
            title: "Treasurer"
        },
        {
            image: <img src = {imgThree} alt="Executive Member"/>,
            title: "Executive Member"
        },
        {
            image: <img src = {imgFour} alt="Chairman"/>,
            title: "Chairman"
        },
        {
            image: <img src = {imgFive} alt="Secretary"/>,
            title: "Secretary"
        },
        {
            image: <img src = {imgSix} alt="Executive Member"/>,
            title: "Executive Member"
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