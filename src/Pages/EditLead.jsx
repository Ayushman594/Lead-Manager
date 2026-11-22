
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import LeadService from '../Services/LeadService';

function EditLead() {

    const navigate = useNavigate();

    const { id } = useParams();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    useEffect(() => {

        LeadService.getLeadById(id)
            .then(response => {
                reset(response.data);
            })
            .catch(error => {
                console.error(error);
                alert('Unable to fetch lead details.');
                navigate('/leads');
            });

    }, [id, reset, navigate]);

    const onSubmit = (data) => {

        LeadService.updateLead(id, data)
            .then(() => {
                alert('Lead updated successfully!');
                navigate('/leads');
            })
            .catch(error => {
                console.error(error);
                alert('Failed to update lead.');
            });

    };

    return (

        <div className="container mt-4">

            <div
                className="card shadow-sm border-0 mx-auto"
                style={{ maxWidth: '700px' }}
            >

                <div className="card-body p-4">

                    <h2 className="mb-2">Edit Lead</h2>

                    <p className="text-muted mb-4">
                        Update the lead information.
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="mb-3">

                            <label className="form-label">Lead Name</label>

                            <input
                                type="text"
                                className="form-control"
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

                        <div className="mb-3">

                            <label className="form-label">Email</label>

                            <input
                                type="email"
                                className="form-control"
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

                        <div className="mb-3">

                            <label className="form-label">Phone</label>

                            <input
                                type="text"
                                className="form-control"
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

                        <div className="mb-3">

                            <label className="form-label">Company</label>

                            <input
                                type="text"
                                className="form-control"
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

                        <div className="mb-3">

                            <label className="form-label">Source</label>

                            <select
                                className="form-select"
                                {...register('source', {
                                    required: 'Please select a source'
                                })}
                            >
                                <option value="Website">Website</option>
                                <option value="Referral">Referral</option>
                                <option value="Social Media">Social Media</option>
                                <option value="Advertisement">Advertisement</option>
                                <option value="Other">Other</option>
                            </select>

                        </div>

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
                                Update Lead
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

export default EditLead;
