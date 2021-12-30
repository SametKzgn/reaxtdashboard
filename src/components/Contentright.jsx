import React from 'react'
import Card from './Card'
import Slider from './Slider'
import Lastcards from './Lastcards'
import Sidebar from './Sidebar';
function Contentright() {

  const icondata = [
    {
      title: "Donations",
      icon: "fas fa-donate"
    },
    {
      title: "Airtime",
      icon: "fas fa-rocket",
    },
    {
      title: "Internet",
      icon: "fab fa-internet-explorer",
    },
    {
      title: "Data",
      icon: "fas fa-digital-tachograph",
    },
    {
      title: "Gitlab",
      icon: "fab fa-gitlab",
    },
    {
      title: "Anchor",
      icon: "fas fa-anchor",
    },
    {
      title: "Bomb",
      icon: "fas fa-bomb",
    },
    {
      title: "Bell",
      icon: "fas fa-bell",
    },
    {
      title: "Bullhorn ",
      icon: "fas fa-bullhorn",
    },
    {
      title: "İnterpreting",
      icon: "fas fa-american-sign-language-interpreting",
    },
    {
      title: "RSS",
      icon: "fas fa-american-sign-language-interpreting",
    },
    {
      title: "Hospital",
      icon: "fas fa-ambulance",
    },
    {
      title: "Horse",
      icon: "fas fa-horse",
    },
    {
      title: "Dragon",
      icon: "fab fa-phoenix-squadron",
    },
    {
      title: "Check Double",
      icon: "fas fa-check-double",
    },
    {
      title: "Gifts",

      icon: "fas fa-gifts",
    },
    {
      title: "Education",
      icon: "fas fa-certificate",
    },
    {
      title: "Baby",
      icon: "fas fa-baby",
    },
    {
      title: "Bone",
      icon: "fas fa-bone ",
    },
    {
      title: "Broom",
      icon: "fas fa-broom",
    },
  ];
  return (
    <div className='contentright'>
      <Card />
      <Slider data={icondata} />
      <Lastcards />
    </div>
  )
}

export default Contentright
