const panel1 = {
  duration:"3days,2nights",
  images:{
          image1:
          "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      
          image2:
          "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
      
          image3:
          "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
      
          image4:
          "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
      
          image5:
          "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",        
          image6:"/assets/images/fort.png"
  },    
  imagesRemaining:7,
  desc:"All-Inclusive 3 Days Holiday - Flights, Sightseeing & Transfers ",
  startingPrice:20000,
  startingDate:Date(2,3,21),
  endingDate:Date(2,5,22)
}

const travelSteps= [
  {
      title: "Day 1 : Trip to Agra",
      title2:"Arrival at Kudal or Sawantwadi / Chipi Airport - Devgad",
      desc:["Arrival at Kudal or Sawantwadi Railway station or Chipi airport. Proceed to devgad and check into the hotel.",
            "Morning, Proceed to Devgad Fort, situated at the confluence of Devgad Creek and Arabian Sea. Placed strategically on a narrow strip of land jutting into the Arabian Sea & proceed to Devgad beach for Zip Lining.",
            "Later Proceed to Kunkeshwar temple by Beautiful coastal road. A pristine beach with a very long stretch of seashoreand white sand adds to the beauty of temple surroundings. Later in the evening, proceed to AcharaJetty for Mangrove Safari.", 
            "Also visit Gajba devi temple for panoramic view. Thenproceed back to the hotel for mesmerizing sunset.Overnight stay at hotel."
            ]
    },
    {
      title: "Day 2 : Trip to Agra",
      title2:"Arrival at Kudal or Sawantwadi / Chipi Airport - Devgad",
      desc:["Arrival at Kudal or Sawantwadi Railway station or Chipi airport. Proceed to devgad and check into the hotel.",
            "Morning, Proceed to Devgad Fort, situated at the confluence of Devgad Creek and Arabian Sea. Placed strategically on a narrow strip of land jutting into the Arabian Sea & proceed to Devgad beach for Zip Lining.",
            "Later Proceed to Kunkeshwar temple by Beautiful coastal road. A pristine beach with a very long stretch of seashoreand white sand adds to the beauty of temple surroundings. Later in the evening, proceed to AcharaJetty for Mangrove Safari.", 
            "Also visit Gajba devi temple for panoramic view. Thenproceed back to the hotel for mesmerizing sunset.Overnight stay at hotel."
            ]
    },
    {
      title: "Day 3 : Trip to Agra",
      title2:"Arrival at Kudal or Sawantwadi / Chipi Airport - Devgad",
      desc:["Arrival at Kudal or Sawantwadi Railway station or Chipi airport. Proceed to devgad and check into the hotel.",
            "Morning, Proceed to Devgad Fort, situated at the confluence of Devgad Creek and Arabian Sea. Placed strategically on a narrow strip of land jutting into the Arabian Sea & proceed to Devgad beach for Zip Lining.",
            "Later Proceed to Kunkeshwar temple by Beautiful coastal road. A pristine beach with a very long stretch of seashoreand white sand adds to the beauty of temple surroundings. Later in the evening, proceed to AcharaJetty for Mangrove Safari.", 
            "Also visit Gajba devi temple for panoramic view. Thenproceed back to the hotel for mesmerizing sunset.Overnight stay at hotel."
            ]
    },
];

const accomodation = [
  {
      selected:true,
      image:"https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: 'Luxury Resort',
      location: 'Maldives',
      distance: '5km',
      fromLocation: 'New York',
      fromDate: new Date('2023-04-01'),
      toDate: new Date('2023-04-08'),
      includes: ['Free breakfast', 'Spa access'],
      room_type: 'Deluxe Suite',
      imageWidth:240,imageHeight:160
    },
    {
      selected:true,
      image:"https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: 'Luxury Resort',
      location: 'Maldives',
      distance: '5km',
      fromLocation: 'New York',
      fromDate: new Date('2023-04-01'),
      toDate: new Date('2023-04-08'),
      includes: ['Free breakfast', 'Spa access'],
      room_type: 'Deluxe Suite',
      imageWidth:240,imageHeight:160
    },
    {
      selected:true,
      image:"https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: 'Luxury Resort',
      location: 'Maldives',
      distance: '5km',
      fromLocation: 'New York',
      fromDate: new Date('2023-04-01'),
      toDate: new Date('2023-04-08'),
      includes: ['Free breakfast', 'Spa access'],
      room_type: 'Deluxe Suite',
      imageWidth:240,imageHeight:160
    }

];

const activities = [
  {
      selected:true,
      image:"https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: 'Luxury Resort',
      location: 'Maldives',
      distance: '5km',
      fromLocation: 'New York',
      fromDate: new Date('2023-04-01'),
      toDate: new Date('2023-04-08'),
      imageWidth:240,imageHeight:160
    },
    {
      selected:true,
      image:"https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: 'Luxury Resort',
      location: 'Maldives',
      distance: '5km',
      fromLocation: 'New York',
      fromDate: new Date('2023-04-01'),
      toDate: new Date('2023-04-08'),
      imageWidth:240,imageHeight:160
    },
    {
      selected:true,
      image:"https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: 'Luxury Resort',
      location: 'Maldives',
      distance: '5km',
      fromLocation: 'New York',
      fromDate: new Date('2023-04-01'),
      toDate: new Date('2023-04-08'),
      imageWidth:240,imageHeight:160
    }
];

const transport = [
  {
      image:"https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      imageWidth:250,
      imageHeight:172,
      carType:"Sedan",
      seats:7
    },
    {
      image:"https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      imageWidth:250,
      imageHeight:172,
      carType:"Sedan",
      seats:7
    },
    {
      image:"https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      imageWidth:250,
      imageHeight:172,
      carType:"Sedan",
      seats:7
    },
]

export default async function handler(req,res){
  const {location} = req.query;
  console.log(location);
  if (location==="devbag"){
      res.status(200).json({
          panel1,
          travelSteps,
          accomodation,
          activities,
          transport
      })
  }
}