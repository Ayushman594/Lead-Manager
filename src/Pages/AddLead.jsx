
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import LeadService from '../Services/LeadService';

function AddLead() {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {

        LeadService.addLead(data)
            .then(() => {
                alert('Lead added successfully!');
                navigate('/leads');
            })
            .catch(error => {
                console.error(error);
                alert('Failed to add lead.');
            });
    };

    return (

        <div className="container mt-4">

            <div className="card shadow-sm border-0 mx-auto"
                style={{ maxWidth: '700px' }}>

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
                                placeholder="Enter lead name"
                                {...register('name', {
                                    required: 'Name is required'
                                })}
                            />

                            {errors.name && (
                                <small className="text-danger">
                                    {errors.name.message}
                                </small>
                            )}

                        </div>

                        {/* Email */}

                        <div className="mb-3">

                            <label className="form-label">Email</label>

                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email address"
                                {...register('email', {
                                    required: 'Email is required'
                                })}
                            />

                            {errors.email && (
                                <small className="text-danger">
                                    {errors.email.message}
                                </small>
                            )}

                        </div>

                        {/* Phone */}

                        <div className="mb-3">

                            <label className="form-label">Phone</label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter phone number"
                                {...register('phone', {
                                    required: 'Phone is required'
                                })}
                            />

                            {errors.phone && (
                                <small className="text-danger">
                                    {errors.phone.message}
                                </small>
                            )}

                        </div>

                        {/* Company */}

                        <div className="mb-3">

                            <label className="form-label">Company</label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter company name"
                                {...register('company', {
                                    required: 'Company is required'
                                })}
                            />

                            {errors.company && (
                                <small className="text-danger">
                                    {errors.company.message}
                                </small>
                            )}

                        </div>

                        {/* Source */}

                        <div className="mb-3">

                            <label className="form-label">Source</label>

                            <select
                                className="form-select"
                                {...register('source', {
                                    required: 'Please select a source'
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
                                <small className="text-danger">
                                    {errors.source.message}
                                </small>
                            )}

                        </div>

                        {/* Status */}

                        <div className="mb-4">

                            <label className="form-label">Status</label>

                            <select
                                className="form-select"
                                {...register('status', {
                                    required: 'Please select a status'
                                })}
                            >
                                <option value="NEW">New</option>
                                <option value="CONTACTED">Contacted</option>
                                <option value="QUALIFIED">Qualified</option>
                                <option value="LOST">Lost</option>
                            </select>

                        </div>

                        <div className="d-flex gap-2">

                            <button type="submit" className="btn btn-primary">
                                Save Lead
                            </button>

                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => navigate('/leads')}
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
