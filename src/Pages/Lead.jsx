import Navbar from "../Components/Navbar";

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeadService from '../Services/LeadService';

function Leads() {

    const [leads, setLeads] = useState([]);
    const [search, setSearch] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        fetchLeads();
    }, []);

    const fetchLeads = () => {
        LeadService.getAllLeads()
            .then(response => {
                setLeads(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleSearch = (value) => {
        setSearch(value);

        if (value.trim() === '') {
            fetchLeads();
            return;
        }

        LeadService.searchLeads(value)
            .then(response => {
                setLeads(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleFilter = (value) => {
        setStatus(value);

        if (value === '') {
            fetchLeads();
            return;
        }

        LeadService.filterLeads(value)
            .then(response => {
                setLeads(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleDelete = (id) => {

        const confirmDelete = window.confirm(
            'Are you sure you want to delete this lead?'
        );

        if (confirmDelete) {
            LeadService.deleteLead(id)
                .then(() => {
                    alert('Lead deleted successfully!');
                    fetchLeads();
                })
                .catch(error => {
                    console.error(error);
                });
        }
    };

    const getStatusBadge = (status) => {

        const colors = {
            NEW: 'primary',
            CONTACTED: 'warning',
            QUALIFIED: 'success',
            LOST: 'danger'
        };

        return (
            <span className={`badge bg-${colors[status] || 'secondary'}`}>
                {status}
            </span>
        );
    };

    return (
       <>
       <Navbar/>
        <div className="container mt-4">

            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>
                    <h2>All Leads</h2>
                    <p className="text-muted">
                        Manage your sales leads here.
                    </p>
                </div>

                <Link to="/add-lead" className="btn btn-primary">
                    + Add Lead
                </Link>

            </div>

            {/* Search and Filter */}

            <div className="row mb-3">

                <div className="col-md-6 mb-2">

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by lead name..."
                        value={search}
                        onChange={(e) => handleSearch(e.target.value)}
                    />

                </div>

                <div className="col-md-6 mb-2">

                    <select
                        className="form-select"
                        value={status}
                        onChange={(e) => handleFilter(e.target.value)}
                    >
                        <option value="">All Statuses</option>
                        <option value="NEW">New</option>
                        <option value="CONTACTED">Contacted</option>
                        <option value="QUALIFIED">Qualified</option>
                        <option value="LOST">Lost</option>
                    </select>

                </div>

            </div>

            {/* Leads Table */}

            <div className="card shadow-sm border-0">

                <div className="table-responsive">

                    <table className="table table-hover align-middle mb-0">

                        <thead className="table-light">

                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Company</th>
                                <th>Source</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>

                        </thead>

                        <tbody>

                            {leads.length > 0 ? (

                                leads.map(lead => (

                                    <tr key={lead.leadId}>

                                        <td>{lead.leadId}</td>
                                        <td>{lead.name}</td>
                                        <td>{lead.email}</td>
                                        <td>{lead.phone}</td>
                                        <td>{lead.company}</td>
                                        <td>{lead.source}</td>
                                        <td>{getStatusBadge(lead.status)}</td>

                                        <td>

                                            <Link
                                                to={`/edit-lead/${lead.leadId}`}
                                                className="btn btn-sm btn-outline-primary me-2"
                                            >
                                                Edit
                                            </Link>

                                            <button
                                                className="btn btn-sm btn-outline-danger"
                                                onClick={() => handleDelete(lead.leadId)}
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>
                                    <td colSpan="8" className="text-center py-4">
                                        No leads found.
                                    </td>
                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
       </>
    );
}

export default Leads;
