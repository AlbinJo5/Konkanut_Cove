import Layout from "@/components/layout";
import MainHeader, { MainText, MainTitle } from "@/components/main-header";
import Page5Panel2 from "@/components/page5-panel2";
import Page5Panel3 from "@/components/page5-panel3";
import Link from "next/link";

const data = [
  {
    image: "/assets/images/sample.png",
    heading: "DEVBAG",
    title: "GO AND SPEND AN AMAZING WEEKEND IN DEVBAG",
    maxWidth: "650px",
    button: { name: "View Package" },
    paragraphs: [
      "It is famous for Scuba Diving, serene beaches, beautiful temples, historical forts and its delicious cuisine. Sindhudurg is the only official Scuba Diving destination in Maharashtra.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.Lorem Ipsum is",
    ],
    href: "/iternary",
  },
  {
    image: "/assets/images/sample.png",
    heading: "TARKARLI",
    title: "GO AND SPEND AN AMAZING WEEKEND IN DEVBAG",
    maxWidth: "650px",
    button: { name: "View Package" },
    paragraphs: [
      "It is famous for Scuba Diving, serene beaches, beautiful temples, historical forts and its delicious cuisine. Sindhudurg is the only official Scuba Diving destination in Maharashtra.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.Lorem Ipsum is",
    ],
    href: "/iternary",
  },
  {
    image: "/assets/images/sample.png",
    heading: "DEVBAG",
    title: "GO AND SPEND AN AMAZING WEEKEND IN DEVBAG",
    maxWidth: "650px",
    button: { name: "View Package" },
    paragraphs: [
      "It is famous for Scuba Diving, serene beaches, beautiful temples, historical forts and its delicious cuisine. Sindhudurg is the only official Scuba Diving destination in Maharashtra.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.Lorem Ipsum is",
    ],
    href: "/iternary",
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
