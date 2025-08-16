// src/components/Servicedetailes.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import services from "./servicedata";

export default function Servicedetailes() {
  const { id } = useParams();
  const service = services.find((s) => s.id === parseInt(id));

  if (!service) {
    return (
      <div className="container py-5 text-center">
        <h2>Service Not Found</h2>
        <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6">
          <img
            src={`/img/${service.img}`}
            alt={service.title}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="fw-bold">{service.title}</h1>
          <p className="text-muted">{service.desc}</p>
          <p>{service.details}</p>
          <Link to="/" className="btn btn-outline-primary mt-3">
            Back to Services
          </Link>
        </div>
      </div>
    </div>
  );
}
