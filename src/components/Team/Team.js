import React, { useState } from "react";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";
import { NavLink } from "react-router-dom";

const Team = () => {
  const [products, setproducts] = useState([
    {
      id: 1,
      name: "Solophina Mkandawire",
      price: "Group leader",
      market: "Developer",
      quantity: "Project Manager",
      image:
        "https://scontent.fllw1-1.fna.fbcdn.net/v/t39.30808-6/421955589_857644819441818_748859348488021815_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHvMvTQNLONASeA_Wpw1CF_7KZaCJ7s9C7sploInuz0LqR-HheEP6C5JkwaowxthfnuBk9C-BRCozaJH2ya1CU4&_nc_ohc=rXAV_js4HMUQ7kNvgEJtcnH&_nc_zt=23&_nc_ht=scontent.fllw1-1.fna&oh=00_AYCShTAJgY0JT7ociPtsHJJGCXS29Cy9A5-Axyf9VR1MNw&oe=664C1942",
    },

    {
      id: 2,
      name: "Kondwani Padyera",
      price: "Group Member",
      market: "Developer",
      quantity: "Designer",
      image: "https://scontent.fllw1-1.fna.fbcdn.net/v/t39.30808-6/409008332_327573653396622_894419312922931690_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGjVCjRiGh9WcC7fbpzNatEj3GXH0CX5faPcZcfQJfl9rMDZDKWaE75WqST8zHMIWno14ZYsh4U8tjdDt8Yk52B&_nc_ohc=a0HigY2NqoEQ7kNvgEM_aPB&_nc_zt=23&_nc_ht=scontent.fllw1-1.fna&oh=00_AYBtgHdWG470Godd1R6TU_-0BDQfiOr-6ptIqI4_n3fEFA&oe=664C247E",
    },

    {
      id: 3,
      name: "Johnson Kamanga",
      price: "Group Member",
      market: "Developer",
      quantity: "Designer",
      image:
        "https://scontent.fllw1-1.fna.fbcdn.net/v/t39.30808-6/295916765_1798159527212334_8349121538674233371_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFs0wlj4hxnriOqaH5orq7FNFDRf-excY80UNF_57Fxj1Z8S0m_U5f-1GTSrswLQtTJVaPampF7aRKVjLa0lsUD&_nc_ohc=sfl8NauZPIgQ7kNvgEa-iWP&_nc_zt=23&_nc_ht=scontent.fllw1-1.fna&oh=00_AYDAbu1PV867TbZQzj08TIGQaWlxjK9rsaZyUH9Kyr0zNQ&oe=664C1449",
    },
    {
      id: 4,
      name: "Chimwemwe Katenje",
      price: "Group Member",
      market: "Developer",
      quantity: "Designer",
      image:
        "https://scontent.fllw1-1.fna.fbcdn.net/v/t39.30808-6/269669318_108812561701000_3322554232703235991_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHD_J0qiCQ4RWykw1ZXC_U2S-jkwN_rowBL6OTA3-ujAK_Pt5GPR7kJTTGg2BjQpzVhgoY0Bwxm0UxNAvITXCNa&_nc_ohc=nSxBljAJsCwQ7kNvgEBef_W&_nc_zt=23&_nc_ht=scontent.fllw1-1.fna&oh=00_AYD0Nyx24cTNnhZBJJ1yyvWAs7ulxILG5GLYOAx8k8-zLQ&oe=664C38E9",
    },
    {
      id: 5,
      name: "Osman Daud",
      price: "Group Member",
      market: "Developer",
      quantity: "Designer",
      image:
        "https://scontent.fllw1-1.fna.fbcdn.net/v/t39.30808-6/428598318_2714192982062896_5635226273016430478_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFa5yKlaAWDtZ4HH_WYE8xjLk57hP-PuzMuTnuE_4-7MyaKk4cBz76K4iiXEPaApdwblWJ8kfnFlHFhwB1tNtx1&_nc_ohc=hNEi74n9bxkQ7kNvgHy7_cP&_nc_zt=23&_nc_ht=scontent.fllw1-1.fna&oh=00_AYB-yu_VmaYeKee8KbDqnqO-XNBW4Mjj-lyEP42Arfo6Hg&oe=664C2D76",
    },

    {
      id: 6,
      name: "Eric Sato",
      price: "Group Member",
      market: "Developer",
      quantity: "Designer",
      image: "https://scontent.fllw1-1.fna.fbcdn.net/v/t39.30808-6/282999306_115419094504001_2687045033368541942_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEOBqPOr2RYZhzTCuDuVBszvgXqGgl8WlC-BeoaCXxaUBK9_g5nZ0QYI0oYd5YIPRXnduKswBJuT6zGoOQ1F2od&_nc_ohc=rr4_WGwQcNQQ7kNvgHpB3wb&_nc_zt=23&_nc_ht=scontent.fllw1-1.fna&oh=00_AYD3hNEpVbXJ3AenXIsqzyM1OYB5O6fvSFY1tyObjH1Zwg&oe=664C31A5",
    },

    {
      id: 7,
      name: "Roberto Bitah",
      price: "Group Member",
      market: "Developer",
      quantity: "Designer",
      image:
        "https://scontent.fllw1-1.fna.fbcdn.net/v/t39.30808-6/341900967_207999891949071_7728087525263611268_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEK_RKdhv9lCYNIWQeHistmEblhfu9BDXgRuWF-70ENeGf9r2M2theXFvg5suyeAyVjjWWrO7kROptA8bZBXyvp&_nc_ohc=U2tG9m7r5xcQ7kNvgF5Kc41&_nc_zt=23&_nc_ht=scontent.fllw1-1.fna&oh=00_AYCYkVpgFvZAG_CdCsdCxaPogXV_225BDGFF9-wDqb1jYg&oe=664C351A",
    }
  ]);

  return (
    <div>
      <NavBar></NavBar>
      <div
        className="w-full mx-auto px-4 py-8 bg-green-500"
        // style={{
        //   backgroundImage:
        //     'url("https://www.ashwameghagri.com/images/event_3.jpg")',
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl text-white font-bold text-center mb-8">
            MEET OUR TEAM
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md rounded-lg p-6 h-3/4"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="mx-auto rounded-lg mb-4  h-1/2"
                />
                <h2 className="text-xl font-bold text-black mb-2">
                  {product.name}
                </h2>
                <p className=" text-black mb-2 text-lg">
                  {product.price}
                </p>
                <p className=" text-black mb-4 text-lg">
                  {product.market}
                </p>
                <p className=" text-black mb-2 text-lg">
                  {product.quantity}
                </p>
                <NavLink to="/Messages">
                  <button className="bg-green-500 block m-auto text-white p-2 rounded-lg font-bold hover:bg-green-700">
                    CONTACT
                  </button>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Team;
