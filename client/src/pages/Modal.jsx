import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import CountryModal from "../components/CountryModal";

export default function Modal({visibleModal, handleClose, currentLocation}) {

  return (
    <CountryModal
      // key={location.Country + " Modal"}
      visible={visibleModal}
      onClose={handleClose}
      info={currentLocation}
    />
  );
}
