import Layout from "@/components/layout";
import MainHeader, { MainText, MainTitle } from "@/components/main-header";
import Link from "next/link";

export default function Gallery({ text, email, phone }) {
  return (
    <Layout>
      <div
        className="bg-cover"
        style={{ backgroundImage: "url('/assets/images/back-contact.png')" }}
      >
        <div className="py-40 bg-black bg-opacity-20 min-h-screen">
          <MainHeader>
            <MainTitle width="600px">Contact Us</MainTitle>
            <MainText width="800px">{text}</MainText>
          </MainHeader>

          <div className="flex max-xs:flex-col text-white justify-center w-full">
            <div className="flex flex-col items-center justify-center mt-5 sm:mr-40 mr-20 max-xs:mr-0">
              <p className="text-lg mb-3">Email</p>
              <Link
                rel="stylesheet"
                href={"mailto:" + email}
                className="bg-green-800 font-bold px-5 text-neutral-50 py-4 rounded-md"
              >
                {email}
              </Link>
            </div>
            <div className="flex flex-col items-center mt-5">
              <p className="text-lg  mb-3">Phone</p>
              <Link
                rel="stylesheet"
                href={"tel:" + phone}
                className="bg-green-800 text-neutral-50 font-bold px-5 py-4 rounded-md"
              >
                {email}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and types Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesLorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and types",
      email: "abcd.xyz.com",
      phone: "9081456789",
    },
  };
}
