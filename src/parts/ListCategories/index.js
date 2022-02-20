import React from "react";

import RenderItem from "./RenderItem";

import BusinessDevelopment from "public/images/icon-business-development.svg";
import ContentWriter from "public/images/icon-content-writer.svg";
import ProductAdvertisement from "public/images/icon-product-advertisement.svg";
import CustomerRelationship from "public/images/icon-customer-relationship.svg";
import GameDevelopment from "public/images/icon-game-development.svg";
import TravelGuidance from "public/images/icon-travel-guidance.svg";

export default function index() {
  const data = [
    {
      imageName: <BusinessDevelopment />,
      name: "Fundamental Bisnis Properti",
      total: 12493,
    },
    {
      imageName: <ContentWriter />,
      name: "Facebook Marketing Properti",
      total: 839,
    },
    {
      imageName: <ProductAdvertisement />,
      name: "Instagram Marketing Properti",
      total: 478,
    },
    {
      imageName: <CustomerRelationship />,
      name: "Marketplace Properti",
      total: 553,
    },
    {
      imageName: <GameDevelopment />,
      name: "Membangun List Cabuy",
      total: 7309,
    },
    {
      imageName: <TravelGuidance />,
      name: "Membangun Web Properti",
      total: 73,
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-auto">
          <h2 className="text-lg text-gray-600">Kategori</h2>
          <h3 className="text-xl text-gray-900">
            Kursus & <span className="text-teal-400">Populer</span>
          </h3>
        </div>
      </div>
      <div className="flex flex-wrap justify-start items-center -mx-4 mt-6">
        {data?.length > 0 ? (
          data.map((item, index) => {
            return <RenderItem item={item} key={index}></RenderItem>;
          })
        ) : (
          <div className="w-full text-center-py-12">No Item Found</div>
        )}
      </div>
    </>
  );
}
