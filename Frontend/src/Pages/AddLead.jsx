import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import LeadService from "../Services/LeadService";
import { useState } from "react";

function AddLead() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [serverErrors, setServerErrors] = useState({});

  const onSubmit = async (data) => {
    setServerErrors({});

    try {
      await LeadService.updateLead(data);

      alert("Lead added successfully!");
      navigate("/leads");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setServerErrors(error.response.data);
      } else {
        alert("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="container mt-4">
      <div
        className="card shadow-sm border-0 mx-auto"
        style={{ maxWidth: "700px" }}
      >
        <div className="card-body p-4">
          <h2 className="mb-2">Add New Lead</h2>

          <p className="text-muted mb-4">
            Enter the details of your potential customer.
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}

            <div className="mb-3">
              <label className="form-label">Lead Name</label>

              <input
                type="text"
                className="form-control"
                {...register("name", {
                  required: "Name is required",
                  maxLength: {
                    value: 100,
                    message: "Name cannot exceed 100 characters",
                  },
                })}
              />
              {errors.name && (
                <p className="text-danger">{errors.name.message}</p>
              )}
              {serverErrors.name && (
                <p className="text-danger">{serverErrors.name}</p>
              )}
            </div>

            {/* Email */}

            <div className="mb-3">
              <label className="form-label">Email</label>

              <input
                type="email"
                className="form-control"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-danger">{errors.email.message}</p>
              )}
              {serverErrors.email && (
                <p className="text-danger">{serverErrors.email}</p>
              )}
            </div>

            {/* Phone */}

            <div className="mb-3">
              <label className="form-label">Phone</label>

              <input
                type="text"
                className="form-control"
                {...register("phone", {
                  required: "Phone is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Phone must contain exactly 10 digits",
                  },
                })}
              />
              {errors.phone && (
                <p className="text-danger">{errors.phone.message}</p>
              )}
              {serverErrors.phone && (
                <p className="text-danger">{serverErrors.phone}</p>
              )}
            </div>

            {/* Company */}

            <div className="mb-3">
              <label className="form-label">Company</label>

              <input
                type="text"
                className="form-control"
                {...register("company", {
                  required: "Company is required",
                })}
              />
              {errors.company && (
                <p className="text-danger">{errors.company.message}</p>
              )}
              {serverErrors.company && (
                <p className="text-danger">{serverErrors.company}</p>
              )}
            </div>

            {/* Source */}

            <div className="mb-3">
              <label className="form-label">Source</label>
              <select
                className="form-select"
                {...register("source", {
                  required: "Please select a source",
                })}
              >
                <option value="">Select Source</option>
                <option value="Website">Website</option>
                <option value="Referral">Referral</option>
                <option value="Social Media">Social Media</option>
                <option value="Advertisement">Advertisement</option>
                <option value="Other">Other</option>
              </select>

              {errors.source && (
                <p className="text-danger">{errors.source.message}</p>
              )}
              {serverErrors.source && (
                <p className="text-danger">{serverErrors.source}</p>
              )}
            </div>

            {/* Status */}

            <div className="mb-4">
              <label className="form-label">Status</label>

              <select
                className="form-select"
                {...register("status", {
                  required: "Please select a status",
                })}
              >
                <option value="NEW">New</option>
                <option value="CONTACTED">Contacted</option>
                <option value="QUALIFIED">Qualified</option>
                <option value="LOST">Lost</option>
              </select>

              {errors.status && (
                <p className="text-danger">{errors.status.message}</p>
              )}
              {serverErrors.status && (
                <p className="text-danger">{serverErrors.status}</p>
              )}
            </div>

            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-primary">
                Save Lead
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate("/leads")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddLead;
