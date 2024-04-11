import TicketForm from "@/app/(components)/TicketForm";
import React from "react";

const getTicketById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
    cache: "no-store",
    method: "GET",
  });
  if (!res.ok) {
    throw new Error("Failed to get ticket.");
  }
  return res.json();
};

const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;
  let updatedTicketData = {};

  if (EDITMODE) {
    updatedTicketData = await getTicketById(params.id);
    updatedTicketData = updatedTicketData.foundTicketData;
  } else {
    updatedTicketData = {
      _id: "new",
    };
  }
  return <TicketForm ticket={updatedTicketData} />;
};

export default TicketPage;
