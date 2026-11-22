import Navbar from "../Components/Navbar";

import { useEffect, useState } from 'react';
import LeadService from '../Services/LeadService';

function Dashboard() {

    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchLeads();
    }, []);

    const fetchLeads = () => {

        LeadService.getAllLeads()
            .then((response) => {
                setLeads(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setError('Unable to fetch leads.');
                setLoading(false);
            });
    };

    const totalLeads = leads.length;

    const newLeads = leads.filter(
        lead => lead.status === 'NEW'
    ).length;

    const contactedLeads = leads.filter(
        lead => lead.status === 'CONTACTED'
    ).length;

    const qualifiedLeads = leads.filter(
        lead => lead.status === 'QUALIFIED'
    ).length;

    const lostLeads = leads.filter(
        lead => lead.status === 'LOST'
    ).length;

    const statistics = [
        { title: 'Total Leads', count: totalLeads },
        { title: 'New Leads', count: newLeads },
        { title: 'Contacted Leads', count: contactedLeads },
        { title: 'Qualified Leads', count: qualifiedLeads },
        { title: 'Lost Leads', count: lostLeads }
    ];

    if (loading) {
        return <div className="container mt-4">Loading...</div>;
    }

    if (error) {
        return (
            <div className="container mt-4">
                <div className="alert alert-danger">{error}</div>
            </div>
        );
    }

    return (
        <>
        <Navbar/>
        <div className="container mt-4">

            <h2 className="mb-2">Dashboard</h2>

            <p className="text-muted mb-4">
                Overview of your sales leads.
            </p>

            <div className="row g-3">

                {statistics.map((stat, index) => (

                    <div className="col-12 col-sm-6 col-lg-4 col-xl" key={index}>

                        <div className="card shadow-sm border-0 h-100">

                            <div className="card-body">

                                <h6 className="text-muted">
                                    {stat.title}
                                </h6>

                                <h2 className="fw-bold mb-0">
                                    {stat.count}
                                </h2>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
        </>
    );
}

export default Dashboard;

