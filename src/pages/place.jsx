import Layout from "@/components/layout";
import MainHeader, { MainText, MainTitle } from "@/components/main-header";
import Page5Panel2 from "@/components/page5-panel2";
import Page5Panel3 from "@/components/page5-panel3";
import Link from "next/link";

const data = [
  {
    image: "/assets/images/Places/Places (8).png",
    heading: "Tarkarli",
    // title: "GO AND SPEND AN AMAZING WEEKEND IN DEVBAG",
    maxWidth: "650px",
    button: { name: "View Package" },
    paragraphs: [
      " Tarkarli is a village in Sindhudurg, Maharashtra, on the shores of the Arabian Sea. Tarkarli is mainly famous for Water sports activities like Scuba Diving, Parasailing, etc.  It's known for its white sand and clear waters. A few years ago Tarkarli Beach is declared as a Queen Beach of the Konkan Region.",
    ],
    href: "/packages",
  },
  {
    image: "/assets/images/Places/Places (9).png",
    heading: "Sindhudurg Fort",
    title: "GO AND SPEND AN AMAZING WEEKEND IN DEVBAG",
    maxWidth: "650px",
    button: { name: "View Package" },
    paragraphs: [
      "Sindhudurg Fort is an undisputed fort in the Arabian Sea. Sindhudurg Fort was built by the great Maratha King Shivaji Maharaj ruler of the Maratha Empire in the 17th century. You have to go to the fort by Malvan Jetty. There are three temples on the fort. Shri Shiv Rajeshwar Temple, Jari Mari Temple & Shri Bhavani Temple. In Shri Shiv Rajeshwar Temple Chatrapati Shivaji Maharaj is worshipped as a deity. There are hands & footprints of Shivaji Maharaj on the fort. The fort is surrounded by water.",
    ],
    href: "/packages",
  },
  {
    image: "/assets/images/Places/Places (10).png",
    heading: "Rock Garden",
    title: "GO AND SPEND AN AMAZING WEEKEND IN DEVBAG",
    maxWidth: "650px",
    button: { name: "View Package" },
    paragraphs: [
      "Rock Garden Is adjacent to Chivla Beach. It's very famous as a Sun Set point. One can sit in peace in the Rock Garden and enjoy the sound of the waves.",
    ],
    href: "/packages",
  },
  {
    image: "/assets/images/Places/Places (11).png",
    heading: "Devbag Sangam",
    // title: "GO AND SPEND AN AMAZING WEEKEND IN DEVBAG",
    maxWidth: "650px",
    button: { name: "View Package" },
    paragraphs: [
      "Devbag Beach is the adjacent beach to Tarkarli Beach. Devbag Sangam, the southernmost end of Devbag forms the confluence of the Karli River flowing into the Arabian Sea. Devbag is one of the very famous beaches in Sindhudurg.",
    ],
    href: "/packages",
  },
  {
    image: "/assets/images/Places/Places (12).png",
    heading: "Nivati Beach",
    // title: "GO AND SPEND AN AMAZING WEEKEND IN DEVBAG",
    maxWidth: "650px",
    button: { name: "View Package" },
    paragraphs: [
      " Nivati Beach is located in the south of Vengurla. This is one of the secret beaches of Vengurla and is untouched.",
    ],
    href: "/packages",
  },
  {
    image: "/assets/images/Places/Places (13).png",
    heading: "Thakarwadi Tribal Museum",
    // title: "GO AND SPEND AN AMAZING WEEKEND IN DEVBAG",
    maxWidth: "650px",
    button: { name: "View Package" },
    paragraphs: [
      "This museum is located in Kudal. This is the best view of art and culture. Documents of puppets, Chitrakathi, leather puppets, Dashavatar, Fugdi, and other Thaker art are kept in this museum for 100 to 600 years and you can see the programs of these arts Thakar Tribal community of Sindhudurg preserved and spread the art throughout the country.",
    ],
    href: "/packages",
  },
  {
    image: "/assets/images/Places/Places (14).png",
    heading: "Sawantwadi Palace",
    // title: "GO AND SPEND AN AMAZING WEEKEND IN DEVBAG",
    maxWidth: "650px",
    button: { name: "View Package" },
    paragraphs: [
      "This palace is at Sawantwadi. It's a Top-rated & major tourist attraction in Sindhudurg. Sawantwadi Palace was built by Khem Sawant III during his reign from 1755 – 1803 and stands as the pride of the city. Sawantwadi is the only remaining place in India where the ancient art of ganjifa is still practiced. The Sawant Bhonsle family is persistent in upholding the art of Ganjifa and Lacquerware art forms",
    ],
    href: "/packages",
  },
  {
    image: "/assets/images/Places/Places (15).png",
    heading: "Tambaldeg Beach",
    // title: "GO AND SPEND AN AMAZING WEEKEND IN DEVBAG",
    maxWidth: "650px",
    button: { name: "View Package" },
    paragraphs: [
      " Located in the Mithbav area. This is very clean white sand and one of the most beautiful beaches. Shri Gajaba Devi temple is situated on that beach. As soon as people come to this very peaceful, idyllic place, they experience a heavenly sight. ",
    ],
    href: "/packages",
  },
  {
    image: "/assets/images/Places/Places (16).png",
    heading: "Kunkeshwar Temple",
    // title: "GO AND SPEND AN AMAZING WEEKEND IN DEVBAG",
    maxWidth: "650px",
    button: { name: "View Package" },
    paragraphs: [
      " Kunkeshwar Temple is an ancient Shiva Temple situated in Kunkeshwar village.  It is surrounded by a pristine beach with a long stretch of seashore. The temple is just 14kms away from Devgad Every person who comes to Sindhudurg does not leave without visiting this temple. Anyone can sit & spend a good time in this place. ",
    ],
    href: "/packages",
  },
  {
    image: "/assets/images/Places/Places (17).png",
    heading: "Sagareshwar Beach",
    // title: "GO AND SPEND AN AMAZING WEEKEND IN DEVBAG",
    maxWidth: "650px",
    button: { name: "View Package" },
    paragraphs: [
      "Sagareshwar is a serene beach near Vengurla. One of the Senic, cleanest, and not-so-popular beaches in the Sindhudurg district. Sagareshwar Beach is characterized by a huge stretch of shiny silvery sand dunes, sparkling beach,es and crystal blue waters. A small temple of Sagareshwara (Lord of the Sea) is located on the beach.",
    ],
    href: "/packages",
  },
  {
    image: "/assets/images/Places/Places (18).png",
    heading: "Rameshwar Mandir",
    // title: "GO AND SPEND AN AMAZING WEEKEND IN DEVBAG",
    maxWidth: "650px",
    button: { name: "View Package" },
    paragraphs: [
      "This is an old Shiva Temple. Before the construction of Sindhudurga Fort, Shivaji  Maharaj visited here & prays to Rameshwar for getting success in his newly accepted work. In the old days, there was only a stone plaque in an open space. Shivaji constructed a dome-shaped shelter over the plaque. Now, in renovation, a huge temple is constructed but that dome is kept as it is. ",
    ],
    href: "/packages",
  },
  {
    image: "/assets/images/Places/Places (19).png",
    heading: "Mochemad Beach",
    // title: "GO AND SPEND AN AMAZING WEEKEND IN DEVBAG",
    maxWidth: "650px",
    button: { name: "View Package" },
    paragraphs: [
      "Mochemad is a village in Vengurla Taluka. This beach is one of the most pristine beaches in Vengurla. As this is a calm and untouched beach one can spend quality time alone or with their loved ones.",
    ],
    href: "/packages",
  },
  {
    image: "/assets/images/Places/Places (20).png",
    heading: "Redi Ganesh Mandir",
    // title: "GO AND SPEND AN AMAZING WEEKEND IN DEVBAG",
    maxWidth: "650px",
    button: { name: "View Package" },
    paragraphs: [
      "This temple is situated near Vengurla. This Ganesh Idol was found in the mine. After investigation, it is found that this idol was made by Pandavas. The idol is approximately 6 feet in height and 4 feet in width.",
    ],
    href: "/packages",
  },
  {
    image: "/assets/images/Places/Places (21).png",
    heading: "Insuli Crocodile Point",
    // title: "GO AND SPEND AN AMAZING WEEKEND IN DEVBAG",
    maxWidth: "650px",
    button: { name: "View Package" },
    paragraphs: [
      "Insuli is a village in the Sawantwadi Taluka. You can see live crocodiles here. Here you can experience the unique friendship between man and crocodiles.",
    ],
    href: "/packages",
  },
  {
    image: "/assets/images/Places/Places (1).png",
    heading: "Dhamapur Dam",
    // title: "GO AND SPEND AN AMAZING WEEKEND IN DEVBAG",
    maxWidth: "650px",
    button: { name: "View Package" },
    paragraphs: [
      " Dhamapur Lake is located in Malvan. The lake behind the dam is one of the biggest dams in the Sindhudurg district. The lake receives water throughout the year and remains full throughout the year. it took almost 70 years to build this dam, ie. from 1530 to 1600.",
    ],
    href: "/packages",
  },
  {
    image: "/assets/images/Places/Places (2).png",
    heading: "Jain Idols of Pendur",
    // title: "GO AND SPEND AN AMAZING WEEKEND IN DEVBAG",
    maxWidth: "650px",
    button: { name: "View Package" },
    paragraphs: [
      "Pendur village is located in Malvan. There are Jain sculptures  These Jain sculptures have been found in excavations. These sculptures are very ancient.",
    ],
    href: "/packages",
  },
  {
    image: "/assets/images/Places/Places (3).png",
    heading: "Shiroda Beach",
    // title: "GO AND SPEND AN AMAZING WEEKEND IN DEVBAG",
    maxWidth: "650px",
    button: { name: "View Package" },
    paragraphs: [
      " Shiroda is a small village in Vengurla taluka. Shiroda is famous for its pristine beaches. This beach is very clean, and now becoming a popular tourist destination ",
    ],
    href: "/packages",
  },
  {
    image: "/assets/images/Places/Places (4).png",
    heading: "Bhagwati Devi Mandir",
    // title: "GO AND SPEND AN AMAZING WEEKEND IN DEVBAG",
    maxWidth: "650px",
    button: { name: "View Package" },
    paragraphs: [
      " This temple is situated on the banks of Dhamapur Lake. It is an ancient temple of Bhagwati Devi. The temple which was built around 475 years ago, gives a pleasant impression to the devotees.",
    ],
    href: "/packages",
  },
  {
    image: "/assets/images/Places/Places (5).png",
    heading: "Vijaydurg Fort",
    // title: "GO AND SPEND AN AMAZING WEEKEND IN DEVBAG",
    maxWidth: "650px",
    button: { name: "View Package" },
    paragraphs: [
      "Is located in the Devgad taluka. This fort was constructed by Raja Bhoja II of the Shilahar dynasty and reconstructed by Shivaji Maharaj. It is surrounded by water on all four sides, but connected to the road through a narrow road. The name is Vijaydurg comes from two words, Vijay- meaning victory and Durg- meaning fort. You can see the marks of artillery attack on this fort. The fort is a symbol of the bravery of the Marathas.",
    ],
    href: "/packages",
  },
  {
    image: "/assets/images/Places/Places (6).png",
    heading: "Devgad Beach",
    // title: "GO AND SPEND AN AMAZING WEEKEND IN DEVBAG",
    maxWidth: "650px",
    button: { name: "View Package" },
    paragraphs: [
      " Devgad Beach is very famous for tourists and is located outskirts of Devgad City. Large windmills can be seen near the sea. It is one of the most spectacular places for tourists.",
    ],
    href: "/packages",
  },
  {
    image: "/assets/images/Places/Places (7).png",
    heading: "Devgad Fort",
    // title: "GO AND SPEND AN AMAZING WEEKEND IN DEVBAG",
    maxWidth: "650px",
    button: { name: "View Package" },
    paragraphs: [
      " This fort is located near Devgad town. This is a very important fort in the Sindhudurg district. The fort is surrounded by sea from three sides and to the south, it is attached to the land. This fort was built by Dattajirao Angre in the year 1729.",
    ],
    href: "/packages",
  },
];

export default function Place() {
  return (
    <Layout>
      <div
        className="bg-cover h-80"
        style={{ backgroundImage: "url('/assets/images/back22.png')" }}
      >
        <div className="bg-black bg-opacity-20 h-80">
          <div className="py-32">
            <MainHeader>
              <MainTitle width="600px">
                {"<span style='color:#22543d'>Amazing Places</span>"}
              </MainTitle>
            </MainHeader>
          </div>
        </div>
      </div>
      <ul
        className="bg-repeat"
        style={{ backgroundImage: "url('/assets/images/back3.png')" }}
      >
        {data.map((d, i) => (
          <li className="py-5" key={i}>
            <Page5Panel3 {...d} alignLeft={i % 2 == 0} />
          </li>
        ))}
      </ul>
    </Layout>
  );
}
