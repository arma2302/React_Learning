import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Alert,
  Backdrop,
  Box,
  CircularProgress,
  IconButton,
  Modal,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import styled from "styled-components";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const url = "https://fakestoreapi.com/products";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function MainComp() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [imageFiles, setImageFiles] = useState(null);
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    // Create object URL for the selected image file
    if (imageFiles) {
      const url = URL.createObjectURL(imageFiles);
      setImageURL(url);
      return () => URL.revokeObjectURL(url); // Cleanup on unmount
    }
  }, [imageFiles]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setProducts(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`, { method: "DELETE" });
      if (!response.ok) {
        throw new Error("Failed to delete");
      }
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = (id) => {
    const productToEdit = products.find((product) => product.id === id);
    setModalData(productToEdit);
    setOpen(true);
  };

  const handleUpdate = async () => {
    if (!modalData) return;
    try {
      const response = await fetch(`${url}/${modalData.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: modalData.title,
          description: modalData.description,
          image: imageURL,
          price: modalData.price,
          category: modalData.category,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to update product");
      }
      const updatedProduct = await response.json();
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        )
      );
      setOpen(false);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex gap-6 flex-wrap p-6">
      {loading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      {error && <Alert severity="error">{error}</Alert>}
      {products.map((product) => (
        <Card sx={{ maxWidth: 345 }} key={product.id}>
          <CardMedia
            sx={{ height: 250, objectFit: "cover" }}
            image={product.image}
            title={product.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Price: {product.price}$</Button>
            <Button size="small">{product.category}</Button>
            <IconButton onClick={() => handleEdit(product.id)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleDelete(product.id)}>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
      <Modal open={isOpen} onClose={() => setOpen(false)}>
        <Box
          sx={{
            backgroundColor: "#222",
            color: "#fff",
            padding: 4,
            borderRadius: 2,
          }}
        >
          {modalData && (
            <>
              <img src={modalData.image} className="w-56" />
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                Upload files
                <VisuallyHiddenInput
                  type="file"
                  onChange={(e) => setImageFiles(e.target.files[0])}
                  multiple
                />
              </Button>
              <Typography variant="h6">{modalData.title}</Typography>
              <TextField
                label="Description"
                variant="outlined"
                value={modalData.description}
                onChange={(e) =>
                  setModalData({ ...modalData, description: e.target.value })
                }
                sx={{ input: { color: "#fff" }, mb: 2 }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleUpdate}
              >
                Update
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}
