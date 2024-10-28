import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addProduct, updateProduct } from "../../features/productSlice";

export default function AddProducts() {
  const { ID } = useParams();

  const [editId] = useState(ID ? ID : null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imgUrl, setImgUrl] = useState("");
  const [alldeatils, setDetails] = useState({
    title: "",
    price: 0,
    description: "",
    shippingInformation: "",
    category: "",
  });
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    if (editId) {
      const product = products.find((item) => item.id == ID);
      setDetails({
        title: product.title,
        price: product.price,
        description: product.description,
        shippingInformation: product.shippingInformation,
        category: product.category,
      });
    }
  }, []);
  const handleonChange = (e) => {
    setDetails({ ...alldeatils, [e.target.name]: e.target.value });
  };

  const handleUploadChange = (info) => {
    const imgurl = info.file.originFileObj;
    console.log(imgurl);
    const url = URL.createObjectURL(imgurl);
    setImgUrl(url);
  };
  const add = () => {
    const id = products.length + 1; // get the next id

    console.log(alldeatils);

    dispatch(
      addProduct({
        ...alldeatils,
        id,
        images: [imgUrl],
      })
    );

    navigate("/admin/dashboard");
  };

  const update = () => {
    dispatch(
      updateProduct({
        ...alldeatils,
        id: ID,
      })
    );
    navigate("/admin/dashboard");
  };
  return (
    <div class="bg-white  border-4 rounded-lg shadow relative m-10">
      <div class="flex items-start justify-between p-5 border-b rounded-t">
        <h3 class="text-xl font-semibold">
          {ID ? "Edit Product" : "Add Product"}
        </h3>
        <button
          type="button"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          data-modal-toggle="product-modal"
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      <div class="p-6 space-y-6">
        <Form action="#">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label
                for="product-name"
                class="text-sm font-medium text-gray-900 block mb-2"
              >
                Product Title
              </label>
              <Input
                type="text"
                name="title"
                id="product-name"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Apple Imac 27”"
                required=""
                onChange={handleonChange}
                value={alldeatils.title}
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="category"
                class="text-sm font-medium text-gray-900 block mb-2"
              >
                Category
              </label>
              <Input
                type="text"
                name="category"
                id="category"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Electronics"
                required=""
                onChange={handleonChange}
                value={alldeatils.category}
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="brand"
                class="text-sm font-medium text-gray-900 block mb-2"
              >
                Shipping Information
              </label>
              <Input
                type="text"
                name="shippingInformation"
                id="brand"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Shipps In Just 2 weeks"
                required=""
                onChange={handleonChange}
                value={alldeatils.shippingInformation}
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label
                for="price"
                class="text-sm font-medium text-gray-900 block mb-2"
              >
                Price
              </label>
              <Input
                type="number"
                name="price"
                id="price"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="$2300"
                required=""
                value={alldeatils.price}
                onChange={handleonChange}
              />
            </div>

            <div class="col-span-full">
              <label
                for="product-details"
                class="text-sm font-medium text-gray-900 block mb-2"
              >
                Product Description
              </label>
              <TextArea
                id="product-details"
                rows="6"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                placeholder="Details"
                name="description"
                value={alldeatils.description}
                onChange={handleonChange}
              ></TextArea>
            </div>
            <div
              class={`col-span-full  ${ID != undefined ? "hidden" : "block"}`}
            >
              <Upload listType="picture" onChange={handleUploadChange}>
                <Button
                  icon={<UploadOutlined />}
                  className="w-full bg-blue-500 text-white hover:bg-blue-600 rounded-md"
                >
                  Click to Upload
                </Button>
              </Upload>
            </div>
          </div>
        </Form>
      </div>

      <div class="p-6 border-t border-gray-200 rounded-b">
        <button
          class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          onClick={ID != null ? update : add}
        >
          Save all
        </button>
      </div>
    </div>
  );
}
