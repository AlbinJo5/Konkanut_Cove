import Layout from "@/admin_components/layout";
import { Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import { ADMIN_ROUTES } from "@/admin_components/core/routes";
import DashboardCard from "@/admin_components/dashboardCard";

function Dashboard() {
  const list = [
    {
      title: "Hotels",
      img: "https://www.freepnglogos.com/uploads/hotel-logo-png/download-building-hotel-clipart-png-33.png",
      totalCount: "22",
      link: ADMIN_ROUTES.HOTELS,
    },
    {
      title: "Packages",
      img: "https://png.pngtree.com/png-vector/20221024/ourmid/pngtree-suitcases-or-luggage-for-travel-and-adventure-png-image_6347505.png",
      totalCount: "50",
      link: ADMIN_ROUTES.PACKAGES,
    },
    {
      title: "Enquiries",
      img: "https://th.bing.com/th/id/OIP.zXs0VLPf14fP4QyQobauIgHaHa?pid=ImgDet&rs=1",
      totalCount: "43",
      link: ADMIN_ROUTES.ENQUIRIES,
    },
    {
      title: "Contacts",
      img: "https://cdn.pixabay.com/photo/2016/06/13/17/30/mail-1454734_1280.png",
      totalCount: "15",
      link: ADMIN_ROUTES.CONTACTS,
    },
  ];
  return (
    <Layout>
      <Grid.Container gap={2} justify="flex-start">
        {list.map((item, index) => (
          <DashboardCard key={index} item={item}></DashboardCard>
        ))}
      </Grid.Container>
      {/* <LineChart /> */}
    </Layout>
  );
}

export default Dashboard;
