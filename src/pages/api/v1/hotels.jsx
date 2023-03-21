const subPanelDatas=[
    {
      image:"/assets/images/packages/image1.png",
      D:3,N:2,
      location:"Tarkarli - Devbagh",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is ",
      price:5499
    },
    {
      image:"/assets/images/packages/image2.png",
      D:3,N:2,
      location:"Tarkarli - Devbagh",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is ",
      price:5499
    },
    {
      image:"/assets/images/packages/image3.png",
      D:3,N:2,
      location:"Tarkarli - Devbagh",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is ",
      price:5499
    },
  ];

  const imageDatas=[].concat(...Array(3).fill({images:[
    {
      image:"/assets/images/beds/bed_1.png",
    },
    {
      image:"/assets/images/beds/bed_2.png",
    },
    {
      image:"/assets/images/beds/bed_3.png",
    },
    {
      image:"/assets/images/beds/bed_4.png",
    },
    {
      image:"/assets/images/beds/bed_5.png",
    },
    {
      image:"/assets/images/beds/bed_6.png",
    },
    {
      image:"/assets/images/beds/bed_7.png",
    },
  ],
  hotelName:"LP Residency",
  address:"45 Road Devbag,Maharashtra",
  until:Date(4,2,23),
  after:Date(6,2,23),
  landmarks:[
    {
      distance:"0.5km",
      placeName:"Aero city Metro Station"
    },
    {
      distance:"0.5km",
      placeName:"Pune Express Railway Station"
    },
   
  ],
  
}));

export default async function handler(req,res){
    res.status(200).json({
        title:"Enjoy Your Dream Vacation",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and types Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesLorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and types",
        subPanelDatas,
        imageDatas,
    })
}