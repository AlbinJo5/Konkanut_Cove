import {
  Modal,
  useModal,
  Button,
  Text,
  Tooltip,
  Spacer,
  Checkbox,
} from "@nextui-org/react";
import { DeleteIcon, EditIcon, IconButton } from "../../icons";
import { Input, Grid, Textarea } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { addData } from "@/utils/firebaseDataHandler";
import { useRouter } from "next/router";
import InitialLoading from "@/admin_components/initialLoading";
import { queryClient } from "@/pages/_app";

export default function PlacesAdd(props) {
  const [form, setForm] = useState({
    createdAt: new Date(),
  });
  const router = useRouter();
  const { setVisible, bindings } = useModal();
  const [imagePath, setImagePath] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  if (props.visibity) {
    setVisible(false);
  }

  // Create New Product API
  const createProduct = async (images, form) => {
    setIsLoading(true);
    setVisible(false);
    await addData(form, images, "Places").then((res) => {
      if (res.status === 200) {
        console.log(res);
        queryClient.invalidateQueries("places");

        alert("Place Added Successfully");
        setIsLoading(false);
        return;
      } else {
        alert("Place Adding Failed");
        setIsLoading(false);
        return;
      }
    });
  };

  return (
    <div>
      {isLoading && <InitialLoading />}
      <Button
        auto
        shadow
        color="success"
        css={{
          color: "white",
        }}
        onClick={() => setVisible(true)}
      >
        Add Place
      </Button>

      <Modal
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={20}>
            Add place
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Grid.Container gap={4}>
            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
              <Input
                bordered
                fullWidth={true}
                labelPlaceholder="Title"
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                color="error"
              />
            </Grid>

            <Grid xs={12} lg={12} md={12} sm={12} xl={12}>
              <Textarea
                bordered
                fullWidth={true}
                labelPlaceholder="Description"
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                color="error"
              />
            </Grid>

            <Grid>
              <input
                type="file"
                onChange={(e) => setImagePath(e.target.files)}
              />
            </Grid>
          </Grid.Container>
        </Modal.Body>
        <Modal.Footer>
          <Button
            auto
            flat
            color="error"
            onPress={() => {
              setVisible(false), setForm({});
            }}
          >
            Close
          </Button>
          <Button
            auto
            color="success"
            css={{
              color: "white",
            }}
            onPress={() => {
              createProduct(imagePath, form);
            }}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
