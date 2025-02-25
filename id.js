const express = require('express');
const app = express();

app.get('/will', (req, res) => {
    res.send('Welcome to our website. NB: DESIGNED BY PRINCE CREATIVITY FT KIZUNGU IDDY');
});

app.listen(5001, () => console.log('Server is running on port 5000'));


const property = [
    {
        id: 1,
        name: 'View Hotel',
        address: 'Cosmos KN31',
        property_type: 'apartment',
        description: 'View hotel contains bedrooms and other activities in the sector like sports',
        number_of_units: '5 floors'
    }
];


app.get('/api/property', (req, res) => {
    res.send(property);
});


app.get('/api/property/:id', (req, res) => {
    const propertyId = parseInt(req.params.id);
    const foundProperty = property.find(p => p.id === propertyId);

    if (!foundProperty) {
        return res.status(404).json({ message: 'Property not found' });
    }
    res.send(foundProperty);
});

const unit = [
    { id: 1, bedrooms: '1', bathrooms: 1, rent: '120$ per day' },
    { id: 2, bedrooms: '2', bathrooms: 2, rent: '220$ per day' },
    { id: 3, bedrooms: '3', bathrooms: 3, rent: '320$ per day' },
    { id: 4, bedrooms: '4', bathrooms: 4, rent: '420$ per day' },
    { id: 5, bedrooms: '5', bathrooms: 5, rent: '520$ per day' },
    { id: 6, bedrooms: '6', bathrooms: 6, rent: '620$ per day' },
    { id: 7, bedrooms: '7', bathrooms: 7, rent: '720$ per day' },
];

app.get('/api/unit', (req, res) => {
    res.send(unit);
});


app.get('/api/unit/:id', (req, res) => {
    const unitId = parseInt(req.params.id);
    const foundUnit = unit.find(u => u.id === unitId);
    if (!foundUnit) {
        return res.status(404).json({ message: 'Unit not found' });
    }
    res.send(foundUnit);
});

const tenant = [
    { id: 1,bedroom:1, name: 'Intwali Yves', email: 'bissman@gmail.com', telephone: '0783837267' },
    { id: 2,bedroom:2, name: 'Kizungu Idi', email: 'kizungu@gmail.com', telephone: '07387364830' },
    { id: 3,bedroom:3, name: 'Rurinda Prince', email: 'rurindaprince@gmail.com', telephone: '0791740068' },
    { id: 4,bedroom:4, name: 'Ahishakiye Alexis', email: 'ahishakiye@gmail.com', telephone: '073879294' },
    { id: 5,bedroom:5, name: 'Irakoze Merveilluex', email: 'irakoze@gmail.com', telephone: '073289382' },
    { id: 6,bedroom:6, name: 'Umwali Gissele', email: 'umwali@gmail.com', telephone: '078354739' },
];


app.get('/api/tenant', (req, res) => {
    res.send(tenant);
});
app.get('/api/tenant/:id', (req, res) => {
    const tenantId = parseInt(req.params.id);
    const foundTenant = tenant.find(t => t.id === tenantId);
    if (!foundTenant) {
        return res.status(404).json({ message: 'Tenant not found' });
    }
    res.send(foundTenant);
});

const lease = [
    { id: 1, bedrooms: '1', amount: '120$', start: '17/february/2025 20:36:07', end: '18/february/2025 20:36:07' },
    { id: 2, bedrooms: '2', amount: '220$', start: '17/february/2025 20:36:07', end: '18/february/2025 20:36:07' },
    { id: 3, bedrooms: '3', amount: '320$', start: '17/february/2025 20:36:07', end: '18/february/2025 20:36:07' },
    { id: 4, bedrooms: '4', amount: '420$', start: '17/february/2025 20:36:07', end: '18/february/2025 20:36:07' },
    { id: 5, bedrooms: '5', amount: '520$', start: '17/february/2025 20:36:07', end: '18/february/2025 20:36:07' },
    { id: 6, bedrooms: '6', amount: '620$', start: '17/february/2025 20:36:07', end: '18/february/2025 20:36:07' },
    { id: 7, bedrooms: '7', amount: '720$', start: '17/february/2025 20:36:07', end: '18/february/2025 20:36:07' },
];

app.get('/api/lease', (req, res) => {
    res.send(lease);
});

app.get('/api/lease/:id', (req, res) => {
    const leaseId = parseInt(req.params.id);
    const foundLease = lease.find(l => l.id === leaseId);
    if (!foundLease) {
        return res.status(404).json({ message: 'Lease not found' });
    }
    res.send(foundLease);
});


const combinedData = {
    property: property,
    unit: unit,
    tenant: tenant,
    lease: lease,
};


app.get('/all-modules', (req, res) => {
    res.send(combinedData);
});